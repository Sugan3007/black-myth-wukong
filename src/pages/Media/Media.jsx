import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import "./Media.css";
import {
  mediaTabs,
  screenshots,
  wallpapers,
  conceptArt,
} from "./mediaData";

const premiumEase = [0.16, 1, 0.3, 1];
const AUTO_SLIDE_DELAY = 3000;

function FullscreenViewer({
  images,
  activeIndex,
  onClose,
  onPrevious,
  onNext,
  reduceMotion,
}) {
  const activeImage = images[activeIndex];

  useEffect(() => {
    if (!activeImage) return undefined;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (event) => {
      if (event.key === "Escape") onClose();
      if (event.key === "ArrowLeft") onPrevious();
      if (event.key === "ArrowRight") onNext();
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [activeImage, onClose, onPrevious, onNext]);

  if (!activeImage) return null;

  return (
    <motion.div
      className="media-lightbox"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: reduceMotion ? 0.01 : 0.2 }}
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) {
          onClose();
        }
      }}
      role="dialog"
      aria-modal="true"
      aria-label="Fullscreen image viewer"
    >
      <motion.div
        className="media-lightbox__panel"
        initial={{
          opacity: 0,
          scale: reduceMotion ? 1 : 0.975,
        }}
        animate={{
          opacity: 1,
          scale: 1,
        }}
        exit={{
          opacity: 0,
          scale: reduceMotion ? 1 : 0.985,
        }}
        transition={{
          duration: reduceMotion ? 0.01 : 0.32,
          ease: premiumEase,
        }}
      >
        <button
          type="button"
          className="media-lightbox__close"
          onClick={onClose}
          aria-label="Close fullscreen image"
        >
          ×
        </button>

        <button
          type="button"
          className="media-lightbox__arrow media-lightbox__arrow--left"
          onClick={onPrevious}
          aria-label="Previous fullscreen image"
        >
          ‹
        </button>

        <AnimatePresence mode="wait" initial={false}>
          <motion.img
            key={activeImage.id}
            src={activeImage.image}
            alt={activeImage.title}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{
              duration: reduceMotion ? 0.01 : 0.24,
            }}
          />
        </AnimatePresence>

        <button
          type="button"
          className="media-lightbox__arrow media-lightbox__arrow--right"
          onClick={onNext}
          aria-label="Next fullscreen image"
        >
          ›
        </button>

        <div className="media-lightbox__footer">
          <span>{activeImage.title}</span>

          <strong>
            {String(activeIndex + 1).padStart(2, "0")} /{" "}
            {String(images.length).padStart(2, "0")}
          </strong>
        </div>
      </motion.div>
    </motion.div>
  );
}

function Media() {
  const reduceMotion = useReducedMotion();

  const [activeTab, setActiveTab] = useState("screenshots");
  const [activeIndex, setActiveIndex] = useState(0);

  /*
   * 1  = next image:     1 -> 2 -> 3
   * -1 = previous image: 3 -> 2 -> 1
   */
  const [autoDirection, setAutoDirection] = useState(1);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [isFullscreen, setIsFullscreen] = useState(false);

  const thumbnailRefs = useRef([]);
  const thumbnailContainerRef = useRef(null);

  const collections = useMemo(
    () => ({
      screenshots,
      wallpapers,
      conceptArt,
    }),
    []
  );

  const activeImages = collections[activeTab] || [];
  const activeImage = activeImages[activeIndex];

  const moveByDirection = useCallback(
    (currentIndex, requestedDirection) => {
      if (activeImages.length <= 1) {
        return {
          index: 0,
          direction: requestedDirection,
        };
      }

      let nextDirection = requestedDirection;
      let nextIndex = currentIndex + requestedDirection;

      /*
       * Ping-pong behavior:
       * 1 -> 2 -> ... -> 32 -> 31 -> ... -> 1
       */
      if (nextIndex >= activeImages.length) {
        nextDirection = -1;
        nextIndex = activeImages.length - 2;
      }

      if (nextIndex < 0) {
        nextDirection = 1;
        nextIndex = 1;
      }

      return {
        index: nextIndex,
        direction: nextDirection,
      };
    },
    [activeImages.length]
  );

  useEffect(() => {
    setActiveIndex(0);
    setAutoDirection(1);
    setIsAutoPlaying(activeImages.length > 1);
    setIsFullscreen(false);
  }, [activeTab, activeImages.length]);

  useEffect(() => {
    if (
      reduceMotion ||
      !isAutoPlaying ||
      isFullscreen ||
      activeImages.length <= 1
    ) {
      return undefined;
    }

    const timer = window.setInterval(() => {
      setActiveIndex((currentIndex) => {
        const result = moveByDirection(
          currentIndex,
          autoDirection
        );

        setAutoDirection(result.direction);
        return result.index;
      });
    }, AUTO_SLIDE_DELAY);

    return () => window.clearInterval(timer);
  }, [
    activeImages.length,
    autoDirection,
    isAutoPlaying,
    isFullscreen,
    moveByDirection,
    reduceMotion,
  ]);

  useEffect(() => {
    const container = thumbnailContainerRef.current;
    const activeThumbnail = thumbnailRefs.current[activeIndex];

    if (!container || !activeThumbnail) {
      return;
    }

    /*
     * IMPORTANT:
     * Do not use element.scrollIntoView() here.
     * scrollIntoView can move the complete website vertically and
     * make the browser jump from Home directly to the Media section.
     *
     * This calculation scrolls only the horizontal thumbnail strip.
     */
    const thumbnailCenter =
      activeThumbnail.offsetLeft +
      activeThumbnail.offsetWidth / 2;

    const nextScrollLeft =
      thumbnailCenter - container.clientWidth / 2;

    container.scrollTo({
      left: Math.max(0, nextScrollLeft),
      behavior: reduceMotion ? "auto" : "smooth",
    });
  }, [activeIndex, activeTab, reduceMotion]);

  const handleLeftArrow = useCallback(() => {
    if (!activeImages.length) return;

    /*
     * Left arrow:
     * move toward the previous image and continue auto-sliding
     * in the same direction.
     */
    setAutoDirection(-1);
    setIsAutoPlaying(true);

    setActiveIndex((currentIndex) => {
      if (currentIndex <= 0) {
        return activeImages.length - 1;
      }

      return currentIndex - 1;
    });
  }, [activeImages.length]);

  const handleRightArrow = useCallback(() => {
    if (!activeImages.length) return;

    /*
     * Right arrow:
     * move toward the next image and continue auto-sliding
     * in the same direction.
     */
    setAutoDirection(1);
    setIsAutoPlaying(true);

    setActiveIndex((currentIndex) => {
      if (currentIndex >= activeImages.length - 1) {
        return 0;
      }

      return currentIndex + 1;
    });
  }, [activeImages.length]);

  const handleThumbnailClick = (index) => {
    setActiveIndex(index);

    /*
     * Thumbnail selection changes only the middle image.
     * Auto-slide continues from the selected image.
     */
    setIsAutoPlaying(true);
  };

  const openFullscreen = () => {
    /*
     * Clicking the large middle image:
     * stop auto-slide and open fullscreen.
     */
    setIsAutoPlaying(false);
    setIsFullscreen(true);
  };

  const closeFullscreen = () => {
    /*
     * Keep auto-slide stopped after closing fullscreen.
     * Clicking a left/right arrow starts it again.
     */
    setIsFullscreen(false);
  };

  return (
  <main
    id="media"
    className="media-page"
  >
      <div className="media-page__texture" aria-hidden="true" />

      <motion.section
        className="media-gallery"
        initial={{
          opacity: 0,
          y: reduceMotion ? 0 : 18,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: reduceMotion ? 0.01 : 0.65,
          ease: premiumEase,
        }}
      >
        <nav
          className="media-tabs"
          aria-label="Media categories"
        >
          {mediaTabs.map((tab) => {
            const isActive = activeTab === tab.id;

            return (
              <button
                key={tab.id}
                type="button"
                className={isActive ? "active" : ""}
                onClick={() => setActiveTab(tab.id)}
              >
                {isActive && (
                  <motion.span
                    className="media-tabs__active"
                    layoutId="active-media-tab"
                    transition={{
                      duration: reduceMotion ? 0.01 : 0.3,
                      ease: premiumEase,
                    }}
                  />
                )}

                <span>{tab.label}</span>
              </button>
            );
          })}
        </nav>

        {activeImages.length > 0 ? (
          <section className="media-stage">
            <div className="media-stage__viewer">
              <button
                type="button"
                className="media-stage__arrow media-stage__arrow--left"
                onClick={handleLeftArrow}
                aria-label="Previous image and continue left direction"
              >
                <i />
              </button>

              <button
                type="button"
                className="media-stage__main-image"
                onClick={openFullscreen}
                aria-label={`Open ${activeImage.title} fullscreen`}
              >
                <AnimatePresence
                  mode="wait"
                  initial={false}
                >
                  <motion.img
                    key={activeImage.id}
                    src={activeImage.image}
                    alt={activeImage.title}
                    initial={{
                      opacity: 0,
                      x:
                        reduceMotion
                          ? 0
                          : autoDirection * 28,
                    }}
                    animate={{
                      opacity: 1,
                      x: 0,
                    }}
                    exit={{
                      opacity: 0,
                      x:
                        reduceMotion
                          ? 0
                          : autoDirection * -24,
                    }}
                    transition={{
                      duration: reduceMotion ? 0.01 : 0.42,
                      ease: premiumEase,
                    }}
                  />
                </AnimatePresence>

                <span
                  className="media-stage__image-shade"
                  aria-hidden="true"
                />

                <span className="media-stage__open">
                  Click to view fullscreen
                </span>
              </button>

              <button
                type="button"
                className="media-stage__arrow media-stage__arrow--right"
                onClick={handleRightArrow}
                aria-label="Next image and continue right direction"
              >
                <i />
              </button>

              <div className="media-stage__caption">
                <span>{activeImage.title}</span>

                <strong>
                  {activeIndex + 1} / {activeImages.length}
                </strong>
              </div>

              <div className="media-stage__playback">
                <span
                  className={
                    isAutoPlaying && !isFullscreen
                      ? "running"
                      : "stopped"
                  }
                />

                {isAutoPlaying && !isFullscreen
                  ? "Auto slide · 2s"
                  : "Auto slide stopped"}
              </div>
            </div>

            <div
              ref={thumbnailContainerRef}
              className="media-thumbnails"
            >
              {activeImages.map((item, index) => (
                <button
                  key={item.id}
                  ref={(element) => {
                    thumbnailRefs.current[index] = element;
                  }}
                  type="button"
                  className={
                    index === activeIndex ? "active" : ""
                  }
                  onClick={() =>
                    handleThumbnailClick(index)
                  }
                  aria-label={`Show ${item.title}`}
                  aria-current={
                    index === activeIndex
                      ? "true"
                      : undefined
                  }
                >
                  <img
                    src={item.image}
                    alt=""
                    loading="lazy"
                  />

                  <span
                    className="media-thumbnails__shade"
                    aria-hidden="true"
                  />

                  <span className="media-thumbnails__number">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  {index === activeIndex && (
                    <motion.span
                      className="media-thumbnails__active"
                      layoutId="active-media-thumbnail"
                      transition={{
                        duration: reduceMotion
                          ? 0.01
                          : 0.25,
                        ease: premiumEase,
                      }}
                    />
                  )}
                </button>
              ))}
            </div>
          </section>
        ) : (
          <div className="media-empty">
            <span>影</span>

            <h2>
              {
                mediaTabs.find(
                  (tab) => tab.id === activeTab
                )?.label
              }
            </h2>

            <p>
              Add images for this category inside
              <code> mediaData.js</code>.
            </p>
          </div>
        )}
      </motion.section>

      <AnimatePresence>
        {isFullscreen && (
          <FullscreenViewer
            images={activeImages}
            activeIndex={activeIndex}
            onClose={closeFullscreen}
            onPrevious={handleLeftArrow}
            onNext={handleRightArrow}
            reduceMotion={reduceMotion}
          />
        )}
      </AnimatePresence>
    </main>
  );
}

export default Media;

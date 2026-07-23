import {
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";

import {
  AnimatePresence,
  motion,
  useReducedMotion,
} from "framer-motion";

import "./Overview.css";

const AUTO_SCROLL_DELAY = 1500;

const overviewPages = [
  {
    id: "diverse-levels",
    title: "DIVERSE LEVELS",

    description: (
      <>
        Explore a{" "}
        <em>Land of Vast Wonders</em>
        <br />

        Relive the tale of{" "}
        <em>Journey to the West</em>,
        rewriting a mythical legend
      </>
    ),

    background:
      "/images/overview/deverse-levels-bg.png",

    character:
      "/images/overview/deverse-levels.png",

    youtubeId: "7eS7schhJ8k",

    contentSide: "left",
    characterSide: "right",
  },

  {
    id: "tough-yaoguais",
    title: "TOUGH YAOGUAIS",

    description: (
      <>
        <em>Confront Mighty Foes</em>,
        Old and New
        <br />

        Challenge{" "}
        <em>extraordinary adversaries</em>,
        <br />

        clash with legends of yore
      </>
    ),

    background:
      "/images/overview/tough-yaoguais-bg.png",

    character:
      "/images/overview/tough-yaoguais.png",

    youtubeId: "rPPwsqfoy0w",

    contentSide: "left",
    characterSide: "center",
  },

  {
    id: "vast-variations",
    title: "VAST VARIATIONS",

    description: (
      <>
        Combine Your{" "}
        <em>Spells and Abilities</em>
        <br />

        Tailor your{" "}
        <em>Talents</em>
        and unleash your potential
      </>
    ),

    background:
      "/images/overview/vast-varistions-bg.png",

    character:
      "/images/overview/vast-varistions.png",

  youtubeId: "bzyMLoSwYvk",

    contentSide: "right",
    characterSide: "left",
  },

  {
    id: "a-tale-retold",
    title: "A TALE RETOLD",

    description: (
      <>
        Discover{" "}
        <em>Heartfelt Tales</em>
        Behind Every Facade
        <br />

        Taste the love, hate, greed, and fury
        <br />

        <em>they</em>
        {" "}once held and still carry within
      </>
    ),

    background:
      "/images/overview/a-tale-retold-bg.png",

    character:
      "/images/overview/a-tale-retold.png",
    youtubeId: "AedjfaOlkPs",

    contentSide: "left",
    characterSide: "right",
  },
];

const premiumEase = [
  0.16,
  1,
  0.3,
  1,
];

/*
|--------------------------------------------------------------------------
| Fullscreen Video Modal
|--------------------------------------------------------------------------
*/

function VideoModal({
  page,
  onClose,
}) {
  useEffect(() => {
    if (!page) {
      return undefined;
    }

    const previousOverflow =
      document.body.style.overflow;

    document.body.style.overflow =
      "hidden";

    function handleEscape(event) {
      if (event.key === "Escape") {
        onClose();
      }
    }

    window.addEventListener(
      "keydown",
      handleEscape
    );

    return () => {
      document.body.style.overflow =
        previousOverflow;

      window.removeEventListener(
        "keydown",
        handleEscape
      );
    };
  }, [
    page,
    onClose,
  ]);

  if (!page) {
    return null;
  }

  const modalVideoUrl =
    `https://www.youtube.com/embed/${page.youtubeId}` +
    `?autoplay=1&mute=0&controls=1&rel=0&playsinline=1` +
    `&modestbranding=1`;

  return (
    <motion.div
      className="overview-modal"
      role="dialog"
      aria-modal="true"
      aria-label={`${page.title} video`}
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      exit={{
        opacity: 0,
      }}
      onMouseDown={(event) => {
        if (
          event.target ===
          event.currentTarget
        ) {
          onClose();
        }
      }}
    >
      <motion.div
        className="overview-modal__dialog"
        initial={{
          opacity: 0,
          scale: 0.94,
          y: 24,
        }}
        animate={{
          opacity: 1,
          scale: 1,
          y: 0,
        }}
        exit={{
          opacity: 0,
          scale: 0.97,
          y: 12,
        }}
        transition={{
          duration: 0.4,
          ease: premiumEase,
        }}
      >
        <header className="overview-modal__header">
          <h2>
            {page.title}
          </h2>

          <button
            type="button"
            onClick={onClose}
            aria-label="Close video"
          >
            ×
          </button>
        </header>

        <div className="overview-modal__video-wrap">
          <iframe
            src={modalVideoUrl}
            title={`${page.title} video`}
            allow="autoplay; encrypted-media; picture-in-picture; fullscreen"
            allowFullScreen
          />
        </div>
      </motion.div>
    </motion.div>
  );
}

/*
|--------------------------------------------------------------------------
| Individual Overview Section
|--------------------------------------------------------------------------
*/

function OverviewSection({
  page,
  index,
  isActive,
  scrollDirection,
  onVideoOpen,
  onSectionClick,
  reduceMotion,
}) {
  const isScrollingDown =
    scrollDirection === "down";

  const imageInitialY = reduceMotion
    ? 0
    : isScrollingDown
      ? 70
      : -70;

  const imageInactiveY = reduceMotion
    ? 0
    : isScrollingDown
      ? -55
      : 55;

  const contentInitialY = reduceMotion
    ? 0
    : isScrollingDown
      ? 38
      : -38;

  const contentInactiveY = reduceMotion
    ? 0
    : isScrollingDown
      ? -28
      : 28;

  return (
    <section
      id={page.id}
      className={[
        "overview-section",

        `overview-section--${page.id}`,

        `overview-section--content-${page.contentSide}`,

        isActive
          ? "overview-section--active"
          : "",
      ]
        .filter(Boolean)
        .join(" ")}
      onClick={onSectionClick}
    >
      {/* Background */}

      <motion.div
        className="overview-section__background"
        style={{
          backgroundImage:
            `url("${page.background}")`,
        }}
        initial={{
          opacity: 0,
          y: imageInitialY,
          scale: reduceMotion
            ? 1
            : 1.06,
        }}
        animate={
          isActive
            ? {
                opacity: 1,
                y: 0,
                scale: 1,
              }
            : {
                opacity: 0.28,
                y: imageInactiveY,
                scale: 1.035,
              }
        }
        transition={{
          opacity: {
            duration: reduceMotion
              ? 0.01
              : 0.72,
          },

          y: {
            duration: reduceMotion
              ? 0.01
              : 1,
            ease: premiumEase,
          },

          scale: {
            duration: reduceMotion
              ? 0.01
              : 1.15,
            ease: premiumEase,
          },
        }}
        aria-hidden="true"
      />

      {/* Film texture */}

      <motion.div
        className="overview-section__film"
        style={{
          backgroundImage:
            'url("/images/overview/flim-card-bg.jpg")',
        }}
        initial={{
          opacity: 0,
          y: imageInitialY,
          scale: reduceMotion
            ? 1
            : 1.05,
        }}
        animate={
          isActive
            ? {
                opacity: 0.62,
                y: 0,
                scale: 1,
              }
            : {
                opacity: 0.25,
                y: imageInactiveY,
                scale: 1.03,
              }
        }
        transition={{
          opacity: {
            duration: reduceMotion
              ? 0.01
              : 0.72,
          },

          y: {
            duration: reduceMotion
              ? 0.01
              : 1,
            ease: premiumEase,
          },

          scale: {
            duration: reduceMotion
              ? 0.01
              : 1.15,
            ease: premiumEase,
          },
        }}
        aria-hidden="true"
      />

      {/* Character */}

      <motion.div
        className={[
          "overview-section__character",

          `overview-section__character--${page.characterSide}`,
        ].join(" ")}
        initial={{
          opacity: 0,

          y: reduceMotion
            ? 0
            : isScrollingDown
              ? 64
              : -64,

          scale: reduceMotion
            ? 1
            : 1.045,
        }}
        animate={
          isActive
            ? {
                opacity: 1,
                y: 0,
                scale: 1,
              }
            : {
                opacity: 0.2,

                y: reduceMotion
                  ? 0
                  : isScrollingDown
                    ? -45
                    : 45,

                scale: 1.025,
              }
        }
        transition={{
          opacity: {
            duration: reduceMotion
              ? 0.01
              : 0.68,
          },

          y: {
            duration: reduceMotion
              ? 0.01
              : 0.95,
            ease: premiumEase,
          },

          scale: {
            duration: reduceMotion
              ? 0.01
              : 1.08,
            ease: premiumEase,
          },
        }}
        aria-hidden="true"
      >
        <img
          src={page.character}
          alt=""
          draggable="false"
        />
      </motion.div>

      <div
        className="overview-section__shade"
        aria-hidden="true"
      />

      <div
        className="overview-section__grain"
        aria-hidden="true"
      />

      {/* Content */}

      <motion.div
        className="overview-section__content"
        initial={{
          opacity: 0,
          y: contentInitialY,
        }}
        animate={
          isActive
            ? {
                opacity: 1,
                y: 0,
              }
            : {
                opacity: 0,
                y: contentInactiveY,
              }
        }
        transition={{
          duration: reduceMotion
            ? 0.01
            : 0.72,

          delay:
            isActive && !reduceMotion
              ? 0.15
              : 0,

          ease: premiumEase,
        }}
      >
        <h2>
          {page.title}
        </h2>

        <div
          className="overview-section__ornament"
          aria-hidden="true"
        >
          <span />
          <i />
          <span />
        </div>

        <p>
          {page.description}
        </p>

        <motion.button
          type="button"
          className="overview-section__video"
          aria-label={`Open ${page.title} video`}
          whileHover={
            reduceMotion
              ? undefined
              : {
                  y: -5,
                  scale: 1.015,
                }
          }
          whileTap={
            reduceMotion
              ? undefined
              : {
                  scale: 0.98,
                }
          }
          onClick={(event) => {
            event.stopPropagation();

            onVideoOpen(page);
          }}
        >
          <iframe
            src={
              `https://www.youtube.com/embed/${page.youtubeId}` +
              `?autoplay=1&mute=1&controls=0&loop=1` +
              `&playlist=${page.youtubeId}&rel=0&playsinline=1` +
              `&modestbranding=1&disablekb=1`
            }
            title={`${page.title} preview`}
            allow="autoplay; encrypted-media; picture-in-picture"
            tabIndex="-1"
          />

          <span className="overview-section__video-overlay" />

          <span className="overview-section__play">
            ▶
          </span>
        </motion.button>
      </motion.div>

      <span className="overview-section__number">
        {String(index + 1).padStart(
          2,
          "0"
        )}
      </span>
    </section>
  );
}

/*
|--------------------------------------------------------------------------
| Main Overview Page
|--------------------------------------------------------------------------
*/

function Overview() {
  const reduceMotion = useReducedMotion();

  const overviewRef = useRef(null);
  const sectionRefs = useRef([]);
  const previousIndexRef = useRef(0);
  const touchStartYRef = useRef(null);

  const [activeIndex, setActiveIndex] =
    useState(0);

  const [autoDirection, setAutoDirection] =
    useState(1);

  const [scrollDirection, setScrollDirection] =
    useState("down");

  const [isOverviewVisible, setIsOverviewVisible] =
    useState(false);

  const [isPaused, setIsPaused] =
    useState(false);

  const [selectedVideo, setSelectedVideo] =
    useState(null);

  useEffect(() => {
    overviewPages.forEach((page) => {
      const background = new Image();
      const character = new Image();

      background.src = page.background;
      character.src = page.character;
    });
  }, []);

  useEffect(() => {
    const overviewElement = overviewRef.current;

    if (!overviewElement) {
      return undefined;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        const visible =
          entry.isIntersecting &&
          entry.intersectionRatio >= 0.2;

        setIsOverviewVisible(visible);

        if (visible) {
          /*
          |--------------------------------------------------------------------------
          | Start auto-scroll immediately when Overview enters the viewport
          |--------------------------------------------------------------------------
          */
          setIsPaused(false);
        } else {
          /*
          |--------------------------------------------------------------------------
          | Stop Overview auto-scroll outside the Overview area
          |--------------------------------------------------------------------------
          */
          setIsPaused(true);
        }
      },
      {
        threshold: [0, 0.2, 0.45],
      }
    );

    observer.observe(overviewElement);

    return () => {
      observer.disconnect();
    };
  }, []);

  const scrollToSection = useCallback(
    (index, behavior = "smooth") => {
      if (!isOverviewVisible) {
        return;
      }

      const section = sectionRefs.current[index];

      if (!section) {
        return;
      }

      setScrollDirection(
        index >= activeIndex ? "down" : "up"
      );

      section.scrollIntoView({
        behavior: reduceMotion ? "auto" : behavior,
        block: "start",
      });

      setActiveIndex(index);
    },
    [activeIndex, isOverviewVisible, reduceMotion]
  );

  useEffect(() => {
    if (
      !isOverviewVisible ||
      isPaused ||
      selectedVideo ||
      overviewPages.length < 2
    ) {
      return undefined;
    }

    const timer = window.setTimeout(() => {
      const lastIndex = overviewPages.length - 1;
      let nextDirection = autoDirection;

      if (
        activeIndex === lastIndex &&
        autoDirection === 1
      ) {
        nextDirection = -1;
        setAutoDirection(-1);
      } else if (
        activeIndex === 0 &&
        autoDirection === -1
      ) {
        nextDirection = 1;
        setAutoDirection(1);
      }

      const nextIndex = activeIndex + nextDirection;

      setScrollDirection(
        nextDirection === 1 ? "down" : "up"
      );

      const section = sectionRefs.current[nextIndex];

      if (!section) {
        return;
      }

      section.scrollIntoView({
        behavior: reduceMotion ? "auto" : "smooth",
        block: "start",
      });

      setActiveIndex(nextIndex);
    }, AUTO_SCROLL_DELAY);

    return () => {
      window.clearTimeout(timer);
    };
  }, [
    activeIndex,
    autoDirection,
    isOverviewVisible,
    isPaused,
    reduceMotion,
    selectedVideo,
  ]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntry = entries
          .filter((entry) => entry.isIntersecting)
          .sort(
            (a, b) =>
              b.intersectionRatio - a.intersectionRatio
          )[0];

        if (!visibleEntry) {
          return;
        }

        const nextIndex = Number(
          visibleEntry.target.dataset.overviewIndex
        );

        if (!Number.isInteger(nextIndex)) {
          return;
        }

        const previousIndex = previousIndexRef.current;

        if (nextIndex > previousIndex) {
          setScrollDirection("down");
        } else if (nextIndex < previousIndex) {
          setScrollDirection("up");
        }

        previousIndexRef.current = nextIndex;
        setActiveIndex(nextIndex);
      },
      {
        threshold: [0.4, 0.6, 0.78],
      }
    );

    sectionRefs.current.forEach((section) => {
      if (section) {
        observer.observe(section);
      }
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    const overviewElement = overviewRef.current;

    if (!overviewElement) {
      return undefined;
    }

    function handleOverviewWheel(event) {
      if (!isOverviewVisible) {
        return;
      }

      const nextDirection =
        event.deltaY >= 0 ? "down" : "up";

      setScrollDirection(nextDirection);
      setAutoDirection(
        nextDirection === "down" ? 1 : -1
      );
      setIsPaused(false);
    }

    overviewElement.addEventListener(
      "wheel",
      handleOverviewWheel,
      { passive: true }
    );

    return () => {
      overviewElement.removeEventListener(
        "wheel",
        handleOverviewWheel
      );
    };
  }, [isOverviewVisible]);

  useEffect(() => {
    const overviewElement = overviewRef.current;

    if (!overviewElement) {
      return undefined;
    }

    function handleTouchStart(event) {
      touchStartYRef.current =
        event.touches[0]?.clientY ?? null;
    }

    function handleTouchMove(event) {
      if (
        !isOverviewVisible ||
        touchStartYRef.current === null
      ) {
        return;
      }

      const currentY = event.touches[0]?.clientY;

      if (typeof currentY !== "number") {
        return;
      }

      const difference =
        touchStartYRef.current - currentY;

      if (Math.abs(difference) < 8) {
        return;
      }

      const nextDirection =
        difference > 0 ? "down" : "up";

      setScrollDirection(nextDirection);
      setAutoDirection(
        nextDirection === "down" ? 1 : -1
      );
      setIsPaused(false);

      touchStartYRef.current = currentY;
    }

    function handleTouchEnd() {
      touchStartYRef.current = null;
    }

    overviewElement.addEventListener(
      "touchstart",
      handleTouchStart,
      { passive: true }
    );

    overviewElement.addEventListener(
      "touchmove",
      handleTouchMove,
      { passive: true }
    );

    overviewElement.addEventListener(
      "touchend",
      handleTouchEnd
    );

    return () => {
      overviewElement.removeEventListener(
        "touchstart",
        handleTouchStart
      );

      overviewElement.removeEventListener(
        "touchmove",
        handleTouchMove
      );

      overviewElement.removeEventListener(
        "touchend",
        handleTouchEnd
      );
    };
  }, [isOverviewVisible]);

  function handleNavigation(index) {
    const nextDirection =
      index > activeIndex ? "down" : "up";

    setScrollDirection(nextDirection);
    setAutoDirection(
      nextDirection === "down" ? 1 : -1
    );
    setIsPaused(true);
    scrollToSection(index);
  }

  function handleOverviewClick(event) {
    if (
      event.target.closest("button, a, video, iframe")
    ) {
      return;
    }

    setIsPaused(true);
  }

  return (
    <main
      id="overview"
      ref={overviewRef}
      className={[
        "overview-page",
        scrollDirection === "down"
          ? "overview-page--scroll-down"
          : "overview-page--scroll-up",
      ].join(" ")}
      onClick={handleOverviewClick}
    >
      <div className="overview-page__sections">
        {overviewPages.map((page, index) => (
          <div
            key={page.id}
            ref={(element) => {
              sectionRefs.current[index] = element;
            }}
            data-overview-index={index}
          >
            <OverviewSection
              page={page}
              index={index}
              isActive={activeIndex === index}
              scrollDirection={scrollDirection}
              reduceMotion={reduceMotion}
              onSectionClick={() =>
                setIsPaused(true)
              }
              onVideoOpen={(selectedPage) => {
                setIsPaused(true);
                setSelectedVideo(selectedPage);
              }}
            />
          </div>
        ))}
      </div>

      {isOverviewVisible && (
        <>
          <nav
            className="overview-nav"
            aria-label="Overview sections"
            onClick={(event) =>
              event.stopPropagation()
            }
          >
            <span className="overview-nav__line" />

            {overviewPages.map((page, index) => (
              <button
                type="button"
                key={page.id}
                className={
                  activeIndex === index
                    ? "active"
                    : ""
                }
                aria-label={`Open ${page.title}`}
                onClick={() =>
                  handleNavigation(index)
                }
              >
                <span />
                <small>{page.title}</small>
              </button>
            ))}
          </nav>

          <div className="overview-progress">
            <strong>
              {String(activeIndex + 1).padStart(
                2,
                "0"
              )}
            </strong>

            <span />

            <small>
              {String(
                overviewPages.length
              ).padStart(2, "0")}
            </small>
          </div>
        </>
      )}

      <AnimatePresence>
        {selectedVideo && (
          <VideoModal
            page={selectedVideo}
            onClose={() =>
              setSelectedVideo(null)
            }
          />
        )}
      </AnimatePresence>
    </main>
  );
}

export default Overview;
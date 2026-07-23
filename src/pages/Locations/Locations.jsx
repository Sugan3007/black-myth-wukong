import {
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";

import {
  AnimatePresence,
  motion,
  useScroll,
  useTransform,
} from "framer-motion";

import { useNavigate } from "react-router-dom";

import Navbar from "../../components/layout/Navbar/Navbar";

import locations, {
  locationChapters,
} from "./locationData";

import RegionCard from "./components/RegionCard";

import "./Locations.css";

function SearchIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <circle
        cx="11"
        cy="11"
        r="6.5"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.4"
      />

      <path
        d="m16 16 4 4"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
      />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path
        d="M6 6l12 12M18 6 6 18"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

function ArrowIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path
        d="M5 12h13M13 6l6 6-6 6"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function Locations() {
  const pageRef = useRef(null);
  const navigate = useNavigate();

  const [
    activeChapter,
    setActiveChapter,
  ] = useState("All Chapters");

  const [
    searchTerm,
    setSearchTerm,
  ] = useState("");

  const [
    selectedLocation,
    setSelectedLocation,
  ] = useState(null);

  const { scrollYProgress } = useScroll({
    target: pageRef,
    offset: ["start start", "end end"],
  });

  const heroOpacity = useTransform(
    scrollYProgress,
    [0, 0.07, 0.15],
    [1, 1, 0]
  );

  const heroScale = useTransform(
    scrollYProgress,
    [0, 0.15],
    [1, 1.08]
  );

  const heroY = useTransform(
    scrollYProgress,
    [0, 0.15],
    [0, 110]
  );

  const backgroundY = useTransform(
    scrollYProgress,
    [0, 1],
    ["0%", "16%"]
  );

  const filteredLocations = useMemo(() => {
    const normalizedSearch =
      searchTerm.trim().toLowerCase();

    return locations.filter((location) => {
      const matchesChapter =
        activeChapter === "All Chapters" ||
        location.chapter === activeChapter;

      const searchableText = [
        location.name,
        location.title,
        location.chapter,
        location.description,
        location.summary,
        location.theme,

        ...location.places.map(
          (place) => place.name
        ),
      ]
        .filter(Boolean)
        .join(" ")
        .toLowerCase();

      const matchesSearch =
        !normalizedSearch ||
        searchableText.includes(
          normalizedSearch
        );

      return (
        matchesChapter &&
        matchesSearch
      );
    });
  }, [
    activeChapter,
    searchTerm,
  ]);

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "auto",
    });
  }, []);

  useEffect(() => {
    if (selectedLocation) {
      document.body.style.overflow =
        "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [selectedLocation]);

  useEffect(() => {
    function handleKeyDown(event) {
      if (
        event.key === "Escape" &&
        selectedLocation
      ) {
        setSelectedLocation(null);
      }
    }

    window.addEventListener(
      "keydown",
      handleKeyDown
    );

    return () => {
      window.removeEventListener(
        "keydown",
        handleKeyDown
      );
    };
  }, [selectedLocation]);

  const resetFilters = () => {
    setActiveChapter("All Chapters");
    setSearchTerm("");
  };

  return (
    <main
      ref={pageRef}
      className="locations-page"
    >
      <Navbar />

      <motion.div
        className="locations-background"
        style={{
          y: backgroundY,
        }}
        aria-hidden="true"
      >
        <div className="locations-background-image" />
        <div className="locations-background-overlay" />
        <div className="locations-background-texture" />
      </motion.div>

      <section className="locations-hero">
        <motion.div
          className="locations-hero-content"
          style={{
            opacity: heroOpacity,
            scale: heroScale,
            y: heroY,
          }}
        >
          <motion.button
            type="button"
            className="locations-back-button"
            onClick={() =>
              navigate("/#explore")
            }
            initial={{
              opacity: 0,
              x: -30,
            }}
            animate={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: 0.7,
              delay: 0.2,
            }}
          >
            <span aria-hidden="true">
              ←
            </span>

            Return to Explore
          </motion.button>

          <motion.span
            className="locations-kicker"
            initial={{
              opacity: 0,
              y: 25,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.8,
              delay: 0.35,
            }}
          >
            Journey Across the Six Lands
          </motion.span>

          <motion.h1
            initial={{
              opacity: 0,
              y: 65,
              filter: "blur(10px)",
            }}
            animate={{
              opacity: 1,
              y: 0,
              filter: "blur(0px)",
            }}
            transition={{
              duration: 1.1,
              delay: 0.4,
              ease: [
                0.16,
                1,
                0.3,
                1,
              ],
            }}
          >
            World
            <span>Atlas</span>
          </motion.h1>

          <motion.div
            className="locations-title-decoration"
            initial={{
              opacity: 0,
              scaleX: 0,
            }}
            animate={{
              opacity: 1,
              scaleX: 1,
            }}
            transition={{
              duration: 0.9,
              delay: 0.85,
            }}
          >
            <span />
            <i />
            <span />
          </motion.div>

          <motion.p
            initial={{
              opacity: 0,
              y: 25,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.8,
              delay: 0.95,
            }}
          >
            Travel through forests, deserts,
            frozen kingdoms, webbed caverns,
            burning mountains and the sacred
            birthplace of the Great Sage.
          </motion.p>
        </motion.div>

        <div className="locations-hero-scroll">
          <span>Begin the journey</span>
          <i />
        </div>
      </section>

      <section className="locations-archive">
        <div className="locations-container">
          <motion.header
            className="locations-archive-heading"
            initial={{
              opacity: 0,
              y: 55,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
              amount: 0.35,
            }}
            transition={{
              duration: 0.85,
              ease: [
                0.16,
                1,
                0.3,
                1,
              ],
            }}
          >
            <div>
              <span className="locations-kicker">
                Regions of the Journey
              </span>

              <h2>
                Explore the
                <span>six lands</span>
              </h2>
            </div>

            <p>
              Every region contains separate
              places, Keeper&apos;s Shrines,
              enemies, bosses and hidden paths.
            </p>
          </motion.header>

          <div className="locations-filter-panel">
            <div className="locations-filter-group">
              <span className="locations-filter-label">
                Journey Chapter
              </span>

              <div className="locations-filter-buttons">
                {locationChapters.map(
                  (chapter) => (
                    <button
                      type="button"
                      key={chapter}
                      className={
                        activeChapter === chapter
                          ? "location-filter-button location-filter-button--active"
                          : "location-filter-button"
                      }
                      onClick={() =>
                        setActiveChapter(chapter)
                      }
                    >
                      {chapter}
                    </button>
                  )
                )}
              </div>
            </div>

            <label className="locations-search">
              <SearchIcon />

              <input
                type="search"
                value={searchTerm}
                placeholder="Search regions or places"
                onChange={(event) =>
                  setSearchTerm(
                    event.target.value
                  )
                }
              />

              <small>
                {String(
                  filteredLocations.length
                ).padStart(2, "0")}
              </small>
            </label>
          </div>

          <AnimatePresence mode="wait">
            {filteredLocations.length > 0 ? (
              <motion.div
                className="locations-region-grid"
                key={`${activeChapter}-${searchTerm}`}
                variants={{
                  hidden: {},

                  visible: {
                    transition: {
                      staggerChildren: 0.1,
                    },
                  },
                }}
                initial="hidden"
                animate="visible"
                exit={{
                  opacity: 0,
                }}
              >
                {filteredLocations.map(
                  (location) => (
                    <RegionCard
                      key={location.id}
                      location={location}
                      onOpen={
                        setSelectedLocation
                      }
                    />
                  )
                )}
              </motion.div>
            ) : (
              <motion.div
                className="locations-empty"
                initial={{
                  opacity: 0,
                  y: 25,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                exit={{
                  opacity: 0,
                }}
              >
                <span>界</span>

                <h3>
                  No region discovered
                </h3>

                <p>
                  Change the selected chapter
                  or search term.
                </p>

                <button
                  type="button"
                  onClick={resetFilters}
                >
                  Reset atlas
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      <AnimatePresence>
        {selectedLocation && (
          <motion.div
            className="location-modal"
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            exit={{
              opacity: 0,
            }}
            onClick={() =>
              setSelectedLocation(null)
            }
          >
            <motion.article
              className="location-modal-panel"
              initial={{
                opacity: 0,
                y: 65,
                scale: 0.96,
              }}
              animate={{
                opacity: 1,
                y: 0,
                scale: 1,
              }}
              exit={{
                opacity: 0,
                y: 35,
                scale: 0.97,
              }}
              transition={{
                duration: 0.5,
                ease: [
                  0.16,
                  1,
                  0.3,
                  1,
                ],
              }}
              onClick={(event) =>
                event.stopPropagation()
              }
            >
              <button
                type="button"
                className="location-modal-close"
                aria-label="Close location"
                onClick={() =>
                  setSelectedLocation(null)
                }
              >
                <CloseIcon />
              </button>

              <div className="location-modal-hero">
                <img
                  src={
                    selectedLocation.heroImage ||
                    selectedLocation.image
                  }
                  alt={selectedLocation.name}
                />

                <div className="location-modal-hero-overlay" />

                <span
                  className="location-modal-symbol"
                  aria-hidden="true"
                >
                  {selectedLocation.symbol}
                </span>

                <div className="location-modal-hero-copy">
                  <span>
                    {selectedLocation.chapter}
                  </span>

                  <h2>
                    {selectedLocation.name}
                  </h2>

                  <p>
                    {selectedLocation.title}
                  </p>
                </div>
              </div>

              <div className="location-modal-content">
                <div className="location-modal-scroll">
                  <span className="locations-kicker">
                    Region Record
                  </span>

                  <div className="location-modal-meta">
                    <div>
                      <span>Chapter</span>

                      <strong>
                        {
                          selectedLocation.chapter
                        }
                      </strong>
                    </div>

                    <div>
                      <span>Places</span>

                      <strong>
                        {
                          selectedLocation
                            .places.length
                        }
                      </strong>
                    </div>

                    <div>
                      <span>Environment</span>

                      <strong>
                        {
                          selectedLocation.theme
                        }
                      </strong>
                    </div>
                  </div>

                  <section className="location-modal-description">
                    <h3>Region overview</h3>

                    <p>
                      {
                        selectedLocation
                          .description
                      }
                    </p>
                  </section>

                  <section className="location-modal-places">
                    <div className="location-modal-section-heading">
                      <span>
                        Travel Destinations
                      </span>

                      <h3>
                        Places within the region
                      </h3>
                    </div>

                    <div className="location-place-list">
                      {selectedLocation.places.map(
                        (place) => (
                          <article
                            className="location-place-item"
                            key={place.id}
                          >
                            <img
                              src={place.image}
                              alt={place.name}
                            />

                            <div className="location-place-item-overlay" />

                            <span className="location-place-number">
                              {place.number}
                            </span>

                            <div className="location-place-copy">
                              <h4>
                                {place.name}
                              </h4>

                              <p>
                                {
                                  place.description
                                }
                              </p>

                              <div className="location-place-meta">
                                <span>
                                  {
                                    place.shrines
                                      .length
                                  }{" "}
                                  Shrines
                                </span>

                                <ArrowIcon />
                              </div>
                            </div>
                          </article>
                        )
                      )}
                    </div>
                  </section>
                </div>
              </div>
            </motion.article>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}

export default Locations;
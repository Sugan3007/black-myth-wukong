import {
  useCallback,
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

import enemies, {
  enemyLocations,
  enemyTypes,
} from "./enemyData";

import EnemyCard from "./components/EnemyCard";
import EnemyModal from "./components/EnemyModal";

import "./Enemies.css";

function Enemies() {
  const pageRef = useRef(null);
  const navigate = useNavigate();

  const [activeType, setActiveType] =
    useState("All");

  const [
    activeLocation,
    setActiveLocation,
  ] = useState("All Locations");

  const [searchTerm, setSearchTerm] =
    useState("");

  const [
    selectedEnemy,
    setSelectedEnemy,
  ] = useState(null);

  const { scrollYProgress } = useScroll({
    target: pageRef,
    offset: ["start start", "end end"],
  });

  const heroOpacity = useTransform(
    scrollYProgress,
    [0, 0.06, 0.14],
    [1, 1, 0]
  );

  const heroScale = useTransform(
    scrollYProgress,
    [0, 0.14],
    [1, 1.08]
  );

  const heroY = useTransform(
    scrollYProgress,
    [0, 0.14],
    [0, 110]
  );

  const backgroundY = useTransform(
    scrollYProgress,
    [0, 1],
    ["0%", "14%"]
  );

  const filteredEnemies = useMemo(() => {
    const normalizedSearch =
      searchTerm.trim().toLowerCase();

    return enemies.filter((enemy) => {
      const matchesType =
        activeType === "All" ||
        enemy.type === activeType;

      const matchesLocation =
        activeLocation === "All Locations" ||
        enemy.location === activeLocation;

      const searchableText = [
        enemy.name,
        enemy.title,
        enemy.type,
        enemy.location,
        enemy.chapter,
        enemy.summary,
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
        matchesType &&
        matchesLocation &&
        matchesSearch
      );
    });
  }, [
    activeType,
    activeLocation,
    searchTerm,
  ]);

  const changeEnemy = useCallback(
    (direction) => {
      if (
        !selectedEnemy ||
        filteredEnemies.length === 0
      ) {
        return;
      }

      const currentIndex =
        filteredEnemies.findIndex(
          (enemy) =>
            enemy.id === selectedEnemy.id
        );

      if (currentIndex === -1) {
        return;
      }

      const nextIndex =
        (
          currentIndex +
          direction +
          filteredEnemies.length
        ) % filteredEnemies.length;

      setSelectedEnemy(
        filteredEnemies[nextIndex]
      );
    },
    [
      selectedEnemy,
      filteredEnemies,
    ]
  );

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "auto",
    });
  }, []);

  useEffect(() => {
    if (selectedEnemy) {
      document.body.style.overflow =
        "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [selectedEnemy]);

  useEffect(() => {
    function handleKeyDown(event) {
      if (!selectedEnemy) {
        return;
      }

      if (event.key === "Escape") {
        setSelectedEnemy(null);
      }

      if (event.key === "ArrowLeft") {
        changeEnemy(-1);
      }

      if (event.key === "ArrowRight") {
        changeEnemy(1);
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
  }, [
    selectedEnemy,
    changeEnemy,
  ]);

  const resetFilters = () => {
    setActiveType("All");
    setActiveLocation("All Locations");
    setSearchTerm("");
  };

  return (
    <main
      ref={pageRef}
      className="enemies-page"
    >
      <Navbar />

      <motion.div
        className="enemies-background"
        style={{
          y: backgroundY,
        }}
        aria-hidden="true"
      >
        <div className="enemies-background-image" />
        <div className="enemies-background-overlay" />
        <div className="enemies-background-texture" />
      </motion.div>

      <section className="enemies-hero">
        <motion.div
          className="enemies-hero-content"
          style={{
            opacity: heroOpacity,
            scale: heroScale,
            y: heroY,
          }}
        >
          <motion.button
            type="button"
            className="enemies-back-button"
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
            className="enemies-kicker"
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
            Yaoguai of the Six Lands
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
            Enemy
            <span>Archive</span>
          </motion.h1>

          <motion.div
            className="enemies-title-decoration"
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
            Explore Yaoguai Kings, Yaoguai
            Chiefs and lesser creatures from
            all six regions of the Destined
            One&apos;s journey.
          </motion.p>
        </motion.div>

        <div className="enemies-hero-scroll">
          <span>
            Enter the bestiary
          </span>

          <i />
        </div>
      </section>

      <section className="enemies-archive">
        <div className="enemies-container">
          <motion.header
            className="enemies-archive-heading"
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
              <span className="enemies-kicker">
                Complete Bestiary
              </span>

              <h2>
                Creatures of
                <span>the journey</span>
              </h2>
            </div>

            <p>
              Filter the archive by enemy
              classification and region, or
              search for a specific Yaoguai.
            </p>
          </motion.header>

          <div className="enemies-filter-panel">
            <div className="enemies-filter-group">
              <span className="enemies-filter-label">
                Classification
              </span>

              <div className="enemies-filter-buttons">
                {enemyTypes.map((type) => (
                  <button
                    type="button"
                    key={type}
                    className={
                      activeType === type
                        ? "enemy-filter-button enemy-filter-button--active"
                        : "enemy-filter-button"
                    }
                    onClick={() =>
                      setActiveType(type)
                    }
                  >
                    {type}
                  </button>
                ))}
              </div>
            </div>

            <div className="enemies-filter-group">
              <span className="enemies-filter-label">
                Region
              </span>

              <div className="enemies-filter-buttons enemies-location-filters">
                {enemyLocations.map(
                  (location) => (
                    <button
                      type="button"
                      key={location}
                      className={
                        activeLocation ===
                        location
                          ? "enemy-filter-button enemy-filter-button--active"
                          : "enemy-filter-button"
                      }
                      onClick={() =>
                        setActiveLocation(
                          location
                        )
                      }
                    >
                      {location}
                    </button>
                  )
                )}
              </div>
            </div>

            <label className="enemies-search">
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

              <input
                type="search"
                value={searchTerm}
                placeholder="Search enemies"
                onChange={(event) =>
                  setSearchTerm(
                    event.target.value
                  )
                }
              />

              <small>
                {String(
                  filteredEnemies.length
                ).padStart(3, "0")}
              </small>
            </label>
          </div>

          <AnimatePresence mode="wait">
            {filteredEnemies.length > 0 ? (
              <motion.div
                className="enemies-grid"
                key={`${activeType}-${activeLocation}-${searchTerm}`}
                variants={{
                  hidden: {},
                  visible: {
                    transition: {
                      staggerChildren: 0.035,
                    },
                  },
                }}
                initial="hidden"
                animate="visible"
                exit={{
                  opacity: 0,
                }}
              >
                {filteredEnemies.map(
                  (enemy) => (
                    <EnemyCard
                      key={enemy.id}
                      enemy={enemy}
                      onOpen={
                        setSelectedEnemy
                      }
                    />
                  )
                )}
              </motion.div>
            ) : (
              <motion.div
                className="enemies-empty"
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
                <span>妖</span>

                <h3>
                  No Yaoguai found
                </h3>

                <p>
                  Change the active filters
                  or search term.
                </p>

                <button
                  type="button"
                  onClick={resetFilters}
                >
                  Reset archive
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      <AnimatePresence>
        {selectedEnemy && (
          <EnemyModal
            enemy={selectedEnemy}
            onClose={() =>
              setSelectedEnemy(null)
            }
            onPrevious={() =>
              changeEnemy(-1)
            }
            onNext={() =>
              changeEnemy(1)
            }
          />
        )}
      </AnimatePresence>
    </main>
  );
}

export default Enemies;
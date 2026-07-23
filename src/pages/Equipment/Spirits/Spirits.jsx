import {
  useMemo,
  useState,
} from "react";

import {
  AnimatePresence,
  motion,
  useReducedMotion,
} from "framer-motion";

import { Link } from "react-router-dom";

import "../Equipment.css";
import "./Spirits.css";

import EquipmentCard from "../components/EquipmentCard";
import EquipmentModal from "../components/EquipmentModal";

import {
  spiritData,
} from "../equipmentData";

const spiritLocations = [
  {
    id: "all",
    label: "All Locations",
  },
  {
    id: "black-wind-mountain",
    label: "Black Wind Mountain",
  },
  {
    id: "yellow-wind-ridge",
    label: "Yellow Wind Ridge",
  },
  {
    id: "the-new-west",
    label: "The New West",
  },
  {
    id: "webbed-hollow",
    label: "Webbed Hollow",
  },
  {
    id: "flaming-mountains",
    label: "Flaming Mountains",
  },
];

const premiumEase = [
  0.16,
  1,
  0.3,
  1,
];

function Spirits() {
  const reduceMotion = useReducedMotion();

  const [searchTerm, setSearchTerm] =
    useState("");

  const [activeLocation, setActiveLocation] =
    useState("all");

  const [selectedSpirit, setSelectedSpirit] =
    useState(null);

  const filteredSpirits = useMemo(() => {
    const search =
      searchTerm.trim().toLowerCase();

    return spiritData.filter((spirit) => {
      const matchesLocation =
        activeLocation === "all" ||
        spirit.locationId === activeLocation;

      const matchesSearch =
        !search ||
        [
          spirit.name,
          spirit.location,
          spirit.chapter,
          spirit.categoryLabel,
          spirit.subcategory,
          spirit.description,
          spirit.rarity,
        ]
          .filter(Boolean)
          .join(" ")
          .toLowerCase()
          .includes(search);

      return (
        matchesLocation &&
        matchesSearch
      );
    });
  }, [
    searchTerm,
    activeLocation,
  ]);

  const heroVariants = {
    hidden: {
      opacity: 0,

      scale: reduceMotion
        ? 1
        : 1.025,
    },

    visible: {
      opacity: 1,
      scale: 1,

      transition: {
        duration: reduceMotion
          ? 0.01
          : 0.9,

        ease: premiumEase,
      },
    },
  };

  const heroContentVariants = {
    hidden: {},

    visible: {
      transition: {
        staggerChildren: reduceMotion
          ? 0
          : 0.1,

        delayChildren: reduceMotion
          ? 0
          : 0.12,
      },
    },
  };

  const heroItemVariants = {
    hidden: {
      opacity: 0,

      y: reduceMotion
        ? 0
        : 28,
    },

    visible: {
      opacity: 1,
      y: 0,

      transition: {
        duration: reduceMotion
          ? 0.01
          : 0.62,

        ease: premiumEase,
      },
    },
  };

  const controlsVariants = {
    hidden: {
      opacity: 0,

      y: reduceMotion
        ? 0
        : 24,
    },

    visible: {
      opacity: 1,
      y: 0,

      transition: {
        duration: reduceMotion
          ? 0.01
          : 0.58,

        ease: premiumEase,
      },
    },
  };

  const cardVariants = {
    hidden: {
      opacity: 0,

      y: reduceMotion
        ? 0
        : 34,

      scale: reduceMotion
        ? 1
        : 0.985,
    },

    visible: {
      opacity: 1,
      y: 0,
      scale: 1,

      transition: {
        duration: reduceMotion
          ? 0.01
          : 0.5,

        ease: premiumEase,
      },
    },

    exit: {
      opacity: 0,

      scale: reduceMotion
        ? 1
        : 0.985,

      transition: {
        duration: reduceMotion
          ? 0.01
          : 0.16,

        ease: "easeOut",
      },
    },
  };

  return (
    <main className="spirits-page">
      <motion.section
        className="spirits-page__hero"
        variants={heroVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div
          className="spirits-page__hero-image"
          initial={{
            scale: reduceMotion
              ? 1
              : 1.06,
          }}
          animate={{
            scale: 1,
          }}
          transition={{
            duration: reduceMotion
              ? 0.01
              : 1.35,

            ease: premiumEase,
          }}
          aria-hidden="true"
        />

        <div
          className="spirits-page__hero-overlay"
          aria-hidden="true"
        />

        <div
          className="spirits-page__hero-glow"
          aria-hidden="true"
        />

        <motion.div
          className="spirits-page__hero-content"
          variants={heroContentVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div
            variants={heroItemVariants}
          >
            <Link
              to="/#equipment"
              className="spirits-page__back"
            >
              <span aria-hidden="true">
                ←
              </span>

              Equipment
            </Link>
          </motion.div>

          <motion.span
            variants={heroItemVariants}
          >
            Echoes of Fallen Yaoguai
          </motion.span>

          <motion.h1
            variants={heroItemVariants}
          >
            Spirits
          </motion.h1>

          <motion.p
            variants={heroItemVariants}
          >
            Discover captured spirits from across
            the journey. Channel their strength,
            inherit their passive abilities and
            unleash their unique attacks in combat.
          </motion.p>

          <motion.div
            className="spirits-page__hero-decoration"
            variants={heroItemVariants}
            aria-hidden="true"
          >
            <span />
            <i />
            <span />
          </motion.div>
        </motion.div>
      </motion.section>

      <section className="spirits-page__content">
        <motion.div
          className="spirits-page__controls"
          variants={controlsVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.2,
          }}
        >
          <div className="spirits-page__toolbar">
            <div className="spirits-page__search">
              <span
                className="spirits-page__search-icon"
                aria-hidden="true"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <circle
                    cx="11"
                    cy="11"
                    r="6.5"
                  />

                  <path d="m16 16 4 4" />
                </svg>
              </span>

              <input
                type="search"
                value={searchTerm}
                onChange={(event) =>
                  setSearchTerm(
                    event.target.value
                  )
                }
                placeholder="Search spirits or locations..."
                aria-label="Search spirits"
              />

              <AnimatePresence>
                {searchTerm && (
                  <motion.button
                    type="button"
                    aria-label="Clear search"
                    onClick={() =>
                      setSearchTerm("")
                    }
                    initial={{
                      opacity: 0,
                      scale: 0.8,
                    }}
                    animate={{
                      opacity: 1,
                      scale: 1,
                    }}
                    exit={{
                      opacity: 0,
                      scale: 0.8,
                    }}
                    transition={{
                      duration: reduceMotion
                        ? 0.01
                        : 0.16,
                    }}
                  >
                    ×
                  </motion.button>
                )}
              </AnimatePresence>
            </div>

            <div className="spirits-page__count">
              <AnimatePresence
                mode="wait"
                initial={false}
              >
                <motion.strong
                  key={filteredSpirits.length}
                  initial={{
                    opacity: 0,

                    y: reduceMotion
                      ? 0
                      : -6,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  exit={{
                    opacity: 0,

                    y: reduceMotion
                      ? 0
                      : 6,
                  }}
                  transition={{
                    duration: reduceMotion
                      ? 0.01
                      : 0.16,
                  }}
                >
                  {filteredSpirits.length}
                </motion.strong>
              </AnimatePresence>

              <span>Spirits</span>
            </div>
          </div>

          <div className="spirits-page__filter-section">
            <span className="spirits-page__filter-heading">
              Filter by Location
            </span>

            <div className="spirits-page__filters">
              {spiritLocations.map((location) => {
                const isActive =
                  activeLocation === location.id;

                return (
                  <motion.button
                    type="button"
                    key={location.id}
                    className={
                      isActive
                        ? "active"
                        : ""
                    }
                    onClick={() =>
                      setActiveLocation(
                        location.id
                      )
                    }
                    whileHover={
                      reduceMotion
                        ? undefined
                        : {
                            y: -2,
                          }
                    }
                    whileTap={
                      reduceMotion
                        ? undefined
                        : {
                            scale: 0.97,
                          }
                    }
                    transition={{
                      duration: 0.18,
                    }}
                  >
                    {isActive && (
                      <motion.span
                        className="spirits-page__filter-active"
                        layoutId="spirits-active-location"
                        transition={{
                          duration: reduceMotion
                            ? 0.01
                            : 0.28,

                          ease: premiumEase,
                        }}
                      />
                    )}

                    <span className="spirits-page__filter-label">
                      {location.label}
                    </span>
                  </motion.button>
                );
              })}
            </div>
          </div>
        </motion.div>

        <AnimatePresence
          mode="wait"
          initial={false}
        >
          {filteredSpirits.length > 0 ? (
            <motion.div
              className="spirits-page__grid"
              key={`${activeLocation}-${searchTerm.trim()}`}
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              exit={{
                opacity: 0,
              }}
              transition={{
                duration: reduceMotion
                  ? 0.01
                  : 0.18,
              }}
            >
              {filteredSpirits.map(
                (spirit, index) => (
                  <motion.div
                    className="spirits-page__card-motion"
                    key={spirit.id}
                    variants={cardVariants}
                    initial="hidden"
                    whileInView="visible"
                    exit="exit"
                    viewport={{
                      once: true,
                      amount: 0.08,
                    }}
                    transition={{
                      delay: reduceMotion
                        ? 0
                        : Math.min(
                            index * 0.025,
                            0.2
                          ),
                    }}
                  >
                    <EquipmentCard
                      item={spirit}
                      onOpen={() =>
                        setSelectedSpirit(
                          spirit
                        )
                      }
                    />
                  </motion.div>
                )
              )}
            </motion.div>
          ) : (
            <motion.div
              className="spirits-page__empty"
              key="empty-spirits"
              initial={{
                opacity: 0,

                y: reduceMotion
                  ? 0
                  : 20,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              exit={{
                opacity: 0,
              }}
              transition={{
                duration: reduceMotion
                  ? 0.01
                  : 0.4,

                ease: premiumEase,
              }}
            >
              <span aria-hidden="true">
                魂
              </span>

              <h2>No spirits found</h2>

              <p>
                Change the search term or select
                another location.
              </p>

              <button
                type="button"
                onClick={() => {
                  setSearchTerm("");
                  setActiveLocation("all");
                }}
              >
                Reset Filters
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </section>

      <EquipmentModal
        item={selectedSpirit}
        onClose={() =>
          setSelectedSpirit(null)
        }
      />
    </main>
  );
}

export default Spirits;
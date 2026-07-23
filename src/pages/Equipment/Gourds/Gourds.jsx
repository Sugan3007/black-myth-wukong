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
import "./Gourds.css";

import EquipmentCard from "../components/EquipmentCard";
import EquipmentModal from "../components/EquipmentModal";

import {
  gourdData,
} from "../equipmentData";

const gourdRarities = [
  {
    id: "all",
    label: "All Gourds",
  },
  {
    id: "rare",
    label: "Rare",
  },
  {
    id: "epic",
    label: "Epic",
  },
  {
    id: "legendary",
    label: "Legendary",
  },
];

const premiumEase = [
  0.16,
  1,
  0.3,
  1,
];

function Gourds() {
  const reduceMotion = useReducedMotion();

  const [searchTerm, setSearchTerm] =
    useState("");

  const [activeRarity, setActiveRarity] =
    useState("all");

  const [selectedGourd, setSelectedGourd] =
    useState(null);

  const filteredGourds = useMemo(() => {
    const search =
      searchTerm.trim().toLowerCase();

    return gourdData.filter((gourd) => {
      const matchesRarity =
        activeRarity === "all" ||
        gourd.rarity
          ?.toLowerCase() === activeRarity;

      const matchesSearch =
        !search ||
        [
          gourd.name,
          gourd.categoryLabel,
          gourd.subcategory,
          gourd.description,
          gourd.rarity,
        ]
          .filter(Boolean)
          .join(" ")
          .toLowerCase()
          .includes(search);

      return matchesRarity && matchesSearch;
    });
  }, [
    searchTerm,
    activeRarity,
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
    <main className="gourds-page">
      <motion.section
        className="gourds-page__hero"
        variants={heroVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div
          className="gourds-page__hero-image"
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
          className="gourds-page__hero-overlay"
          aria-hidden="true"
        />

        <motion.div
          className="gourds-page__hero-content"
          variants={heroContentVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div
            variants={heroItemVariants}
          >
            <Link
              to="/#equipment"
              className="gourds-page__back"
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
            Vessels of Restoration
          </motion.span>

          <motion.h1
            variants={heroItemVariants}
          >
            Gourds
          </motion.h1>

          <motion.p
            variants={heroItemVariants}
          >
            Explore sacred healing gourds,
            restorative vessels and mystical
            containers that support the Destined
            One throughout every battle.
          </motion.p>

          <motion.div
            className="gourds-page__hero-decoration"
            variants={heroItemVariants}
            aria-hidden="true"
          >
            <span />
            <i />
            <span />
          </motion.div>
        </motion.div>
      </motion.section>

      <section className="gourds-page__content">
        <motion.div
          className="gourds-page__controls"
          variants={controlsVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.2,
          }}
        >
          <div className="gourds-page__toolbar">
            <div className="gourds-page__search">
              <input
                type="search"
                value={searchTerm}
                onChange={(event) =>
                  setSearchTerm(
                    event.target.value
                  )
                }
                placeholder="Search gourds..."
                aria-label="Search gourds"
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

            <div className="gourds-page__count">
              <AnimatePresence
                mode="wait"
                initial={false}
              >
                <motion.strong
                  key={filteredGourds.length}
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
                  {filteredGourds.length}
                </motion.strong>
              </AnimatePresence>

              <span>Gourds</span>
            </div>
          </div>

          <div className="gourds-page__filters">
            {gourdRarities.map((rarity) => {
              const isActive =
                activeRarity === rarity.id;

              return (
                <motion.button
                  type="button"
                  key={rarity.id}
                  className={
                    isActive
                      ? "active"
                      : ""
                  }
                  onClick={() =>
                    setActiveRarity(
                      rarity.id
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
                      className="gourds-page__filter-active"
                      layoutId="gourds-active-filter"
                      transition={{
                        duration: reduceMotion
                          ? 0.01
                          : 0.28,

                        ease: premiumEase,
                      }}
                    />
                  )}

                  <span className="gourds-page__filter-label">
                    {rarity.label}
                  </span>
                </motion.button>
              );
            })}
          </div>
        </motion.div>

        <AnimatePresence
          mode="wait"
          initial={false}
        >
          {filteredGourds.length > 0 ? (
            <motion.div
              className="gourds-page__grid"
              key={`${activeRarity}-${searchTerm.trim()}`}
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
              {filteredGourds.map(
                (gourd, index) => (
                  <motion.div
                    className="gourds-page__card-motion"
                    key={gourd.id}
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
                      item={gourd}
                      onOpen={() =>
                        setSelectedGourd(
                          gourd
                        )
                      }
                    />
                  </motion.div>
                )
              )}
            </motion.div>
          ) : (
            <motion.div
              className="gourds-page__empty"
              key="empty-gourds"
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
              <h2>No gourds found</h2>

              <p>
                Change the search term or rarity
                filter.
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </section>

      <EquipmentModal
        item={selectedGourd}
        onClose={() =>
          setSelectedGourd(null)
        }
      />
    </main>
  );
}

export default Gourds;
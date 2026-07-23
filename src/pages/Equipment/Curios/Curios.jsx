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
import "./Curios.css";

import EquipmentCard from "../components/EquipmentCard";
import EquipmentModal from "../components/EquipmentModal";

import {
  curiosData,
} from "../equipmentData";

const curiosRarities = [
  {
    id: "all",
    label: "All Curios",
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

function Curios() {
  const reduceMotion = useReducedMotion();

  const [searchTerm, setSearchTerm] =
    useState("");

  const [activeRarity, setActiveRarity] =
    useState("all");

  const [selectedCurio, setSelectedCurio] =
    useState(null);

  const filteredCurios = useMemo(() => {
    const search =
      searchTerm.trim().toLowerCase();

    return curiosData.filter((curio) => {
      const matchesRarity =
        activeRarity === "all" ||
        curio.rarity
          ?.toLowerCase() === activeRarity;

      const matchesSearch =
        !search ||
        [
          curio.name,
          curio.categoryLabel,
          curio.subcategory,
          curio.description,
          curio.rarity,
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
    <main className="curios-page">
      <motion.section
        className="curios-page__hero"
        variants={heroVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div
          className="curios-page__hero-image"
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
          className="curios-page__hero-overlay"
          aria-hidden="true"
        />

        <motion.div
          className="curios-page__hero-content"
          variants={heroContentVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div
            variants={heroItemVariants}
          >
            <Link
              to="/#equipment"
              className="curios-page__back"
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
            Treasures of Hidden Power
          </motion.span>

          <motion.h1
            variants={heroItemVariants}
          >
            Curios
          </motion.h1>

          <motion.p
            variants={heroItemVariants}
          >
            Discover mystical treasures that grant
            passive bonuses, elemental resistance,
            defensive enhancements and powerful
            combat effects.
          </motion.p>

          <motion.div
            className="curios-page__hero-decoration"
            variants={heroItemVariants}
            aria-hidden="true"
          >
            <span />
            <i />
            <span />
          </motion.div>
        </motion.div>
      </motion.section>

      <section className="curios-page__content">
        <motion.div
          className="curios-page__controls"
          variants={controlsVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.2,
          }}
        >
          <div className="curios-page__toolbar">
            <div className="curios-page__search">
              <input
                type="search"
                value={searchTerm}
                onChange={(event) =>
                  setSearchTerm(
                    event.target.value
                  )
                }
                placeholder="Search curios..."
                aria-label="Search curios"
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

            <div className="curios-page__count">
              <AnimatePresence
                mode="wait"
                initial={false}
              >
                <motion.strong
                  key={filteredCurios.length}
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
                  {filteredCurios.length}
                </motion.strong>
              </AnimatePresence>

              <span>Curios</span>
            </div>
          </div>

          <div className="curios-page__filters">
            {curiosRarities.map((rarity) => {
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
                      className="curios-page__filter-active"
                      layoutId="curios-active-filter"
                      transition={{
                        duration: reduceMotion
                          ? 0.01
                          : 0.28,

                        ease: premiumEase,
                      }}
                    />
                  )}

                  <span className="curios-page__filter-label">
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
          {filteredCurios.length > 0 ? (
            <motion.div
              className="curios-page__grid"
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
              {filteredCurios.map(
                (curio, index) => (
                  <motion.div
                    className="curios-page__card-motion"
                    key={curio.id}
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
                      item={curio}
                      onOpen={() =>
                        setSelectedCurio(
                          curio
                        )
                      }
                    />
                  </motion.div>
                )
              )}
            </motion.div>
          ) : (
            <motion.div
              className="curios-page__empty"
              key="empty-curios"
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
              <h2>No curios found</h2>

              <p>
                Change the search term or rarity
                filter.
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </section>

      <EquipmentModal
        item={selectedCurio}
        onClose={() =>
          setSelectedCurio(null)
        }
      />
    </main>
  );
}

export default Curios;
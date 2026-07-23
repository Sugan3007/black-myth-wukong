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
import "./Armor.css";

import EquipmentCard from "../components/EquipmentCard";
import EquipmentModal from "../components/EquipmentModal";

import {
  armorData,
} from "../equipmentData";

/*
|--------------------------------------------------------------------------
| Armor Type Filters
|--------------------------------------------------------------------------
*/

const armorTypes = [
  {
    id: "all",
    label: "All Armor",
  },
  {
    id: "headgear",
    label: "Headgear",
  },
  {
    id: "chest",
    label: "Chest",
  },
  {
    id: "arms",
    label: "Arms",
  },
  {
    id: "legs",
    label: "Legs",
  },
];

/*
|--------------------------------------------------------------------------
| Armor Rarity Filters
|--------------------------------------------------------------------------
*/

const armorRarities = [
  {
    id: "all",
    label: "All Rarities",
  },
  {
    id: "common",
    label: "Common",
  },
  {
    id: "uncommon",
    label: "Uncommon",
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
  {
    id: "mythical",
    label: "Mythical",
  },
];

const premiumEase = [
  0.16,
  1,
  0.3,
  1,
];

function Armor() {
  const reduceMotion = useReducedMotion();

  const [searchTerm, setSearchTerm] =
    useState("");

  const [activeType, setActiveType] =
    useState("all");

  const [activeRarity, setActiveRarity] =
    useState("all");

  const [selectedArmor, setSelectedArmor] =
    useState(null);

  /*
  |--------------------------------------------------------------------------
  | Filtered Armor
  |--------------------------------------------------------------------------
  */

  const filteredArmor = useMemo(() => {
    const search =
      searchTerm.trim().toLowerCase();

    return armorData.filter((armor) => {
      const armorRarity =
        armor.rarity
          ?.trim()
          .toLowerCase() || "";

      const matchesType =
        activeType === "all" ||
        armor.armorType === activeType;

      const matchesRarity =
        activeRarity === "all" ||
        armorRarity === activeRarity;

      const matchesSearch =
        !search ||
        [
          armor.name,
          armor.subcategory,
          armor.armorTypeLabel,
          armor.description,
          armor.rarity,
          armor.setName,
        ]
          .filter(Boolean)
          .join(" ")
          .toLowerCase()
          .includes(search);

      return (
        matchesType &&
        matchesRarity &&
        matchesSearch
      );
    });
  }, [
    searchTerm,
    activeType,
    activeRarity,
  ]);

  /*
  |--------------------------------------------------------------------------
  | Animations
  |--------------------------------------------------------------------------
  */

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

  /*
  |--------------------------------------------------------------------------
  | Reset Filters
  |--------------------------------------------------------------------------
  */

  function resetFilters() {
    setSearchTerm("");
    setActiveType("all");
    setActiveRarity("all");
  }

  const hasActiveFilters =
    searchTerm.trim() !== "" ||
    activeType !== "all" ||
    activeRarity !== "all";

  return (
    <main className="armor-page">
      {/* Hero */}

      <motion.section
        className="armor-page__hero"
        variants={heroVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div
          className="armor-page__hero-image"
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
          className="armor-page__hero-overlay"
          aria-hidden="true"
        />

        <div
          className="armor-page__hero-glow"
          aria-hidden="true"
        />

        <motion.div
          className="armor-page__hero-content"
          variants={heroContentVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div
            variants={heroItemVariants}
          >
            <Link
              to="/#equipment"
              className="armor-page__back"
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
            Garments of Strength
          </motion.span>

          <motion.h1
            variants={heroItemVariants}
          >
            Armor
          </motion.h1>

          <motion.p
            variants={heroItemVariants}
          >
            Explore protective headgear, robes,
            armguards and legwear collected across
            the journey of the Destined One.
          </motion.p>

          <motion.div
            className="armor-page__hero-decoration"
            variants={heroItemVariants}
            aria-hidden="true"
          >
            <span />
            <i />
            <span />
          </motion.div>
        </motion.div>
      </motion.section>

      {/* Content */}

      <section className="armor-page__content">
        <motion.div
          className="armor-page__controls"
          variants={controlsVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.2,
          }}
        >
          {/* Search and Count */}

          <div className="armor-page__toolbar">
            <div className="armor-page__search">
              <span
                className="armor-page__search-icon"
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
                placeholder="Search armor..."
                aria-label="Search armor"
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

            <div className="armor-page__toolbar-right">
              {hasActiveFilters && (
                <motion.button
                  type="button"
                  className="armor-page__reset"
                  onClick={resetFilters}
                  initial={{
                    opacity: 0,
                    scale: 0.9,
                  }}
                  animate={{
                    opacity: 1,
                    scale: 1,
                  }}
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
                          scale: 0.96,
                        }
                  }
                >
                  Reset Filters
                </motion.button>
              )}

              <div className="armor-page__count">
                <AnimatePresence
                  mode="wait"
                  initial={false}
                >
                  <motion.strong
                    key={filteredArmor.length}
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
                    {filteredArmor.length}
                  </motion.strong>
                </AnimatePresence>

                <span>Armor</span>
              </div>
            </div>
          </div>

          {/* Armor Type Filter */}

          <div className="armor-page__filter-section">
            <span className="armor-page__filter-heading">
              Filter by Armor Type
            </span>

            <div className="armor-page__filters">
              {armorTypes.map((type) => {
                const isActive =
                  activeType === type.id;

                return (
                  <motion.button
                    type="button"
                    key={type.id}
                    className={
                      isActive
                        ? "active"
                        : ""
                    }
                    onClick={() =>
                      setActiveType(type.id)
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
                        className="armor-page__filter-active"
                        layoutId="armor-active-type"
                        transition={{
                          duration: reduceMotion
                            ? 0.01
                            : 0.28,

                          ease: premiumEase,
                        }}
                      />
                    )}

                    <span className="armor-page__filter-label">
                      {type.label}
                    </span>
                  </motion.button>
                );
              })}
            </div>
          </div>

          {/* Rarity Filter */}

          <div className="armor-page__filter-section">
            <span className="armor-page__filter-heading">
              Filter by Rarity
            </span>

            <div className="armor-page__filters armor-page__rarity-filters">
              {armorRarities.map((rarity) => {
                const isActive =
                  activeRarity === rarity.id;

                return (
                  <motion.button
                    type="button"
                    key={rarity.id}
                    className={[
                      isActive
                        ? "active"
                        : "",

                      rarity.id !== "all"
                        ? `armor-page__rarity-filter--${rarity.id}`
                        : "",
                    ]
                      .filter(Boolean)
                      .join(" ")}
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
                        className="armor-page__filter-active"
                        layoutId="armor-active-rarity"
                        transition={{
                          duration: reduceMotion
                            ? 0.01
                            : 0.28,

                          ease: premiumEase,
                        }}
                      />
                    )}

                    {rarity.id !== "all" && (
                      <span
                        className={`armor-page__rarity-dot armor-page__rarity-dot--${rarity.id}`}
                        aria-hidden="true"
                      />
                    )}

                    <span className="armor-page__filter-label">
                      {rarity.label}
                    </span>
                  </motion.button>
                );
              })}
            </div>
          </div>
        </motion.div>

        {/* Armor Grid */}

        <AnimatePresence
          mode="wait"
          initial={false}
        >
          {filteredArmor.length > 0 ? (
            <motion.div
              className="armor-page__grid"
              key={`${activeType}-${activeRarity}-${searchTerm.trim()}`}
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
              {filteredArmor.map(
                (armor, index) => (
                  <motion.div
                    className="armor-page__card-motion"
                    key={armor.id}
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
                      item={armor}
                      onOpen={() =>
                        setSelectedArmor(
                          armor
                        )
                      }
                    />
                  </motion.div>
                )
              )}
            </motion.div>
          ) : (
            <motion.div
              className="armor-page__empty"
              key="empty-armor"
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
                甲
              </span>

              <h2>No armor found</h2>

              <p>
                Change the search term, armor type
                or selected rarity.
              </p>

              <button
                type="button"
                onClick={resetFilters}
              >
                Reset Filters
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </section>

      <EquipmentModal
        item={selectedArmor}
        onClose={() =>
          setSelectedArmor(null)
        }
      />
    </main>
  );
}

export default Armor;
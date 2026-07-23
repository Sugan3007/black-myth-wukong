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
import "./Weapons.css";

import EquipmentCard from "../components/EquipmentCard";
import EquipmentModal from "../components/EquipmentModal";

import {
  weaponData,
} from "../equipmentData";

const weaponTypes = [
  {
    id: "all",
    label: "All Weapons",
  },
  {
    id: "staff",
    label: "Staffs",
  },
  {
    id: "spear",
    label: "Spears",
  },
  {
    id: "mallet",
    label: "Mallets",
  },
];

const weaponRarities = [
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

function Weapons() {
  const reduceMotion = useReducedMotion();

  const [searchTerm, setSearchTerm] =
    useState("");

  const [activeType, setActiveType] =
    useState("all");

  const [activeRarity, setActiveRarity] =
    useState("all");

  const [selectedWeapon, setSelectedWeapon] =
    useState(null);

  const filteredWeapons = useMemo(() => {
    const search =
      searchTerm.trim().toLowerCase();

    return weaponData.filter((weapon) => {
      const matchesType =
        activeType === "all" ||
        weapon.subcategory
          ?.toLowerCase() === activeType;

      const matchesRarity =
        activeRarity === "all" ||
        weapon.rarity
          ?.toLowerCase() === activeRarity;

      const matchesSearch =
        !search ||
        [
          weapon.name,
          weapon.subcategory,
          weapon.description,
          weapon.rarity,
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
    <main className="weapons-page">
      <motion.section
        className="weapons-page__hero"
        variants={heroVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div
          className="weapons-page__hero-image"
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
          className="weapons-page__hero-overlay"
          aria-hidden="true"
        />

        <motion.div
          className="weapons-page__hero-content"
          variants={heroContentVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div
            variants={heroItemVariants}
          >
            <Link
              to="/#equipment"
              className="weapons-page__back"
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
            Arms of the Destined One
          </motion.span>

          <motion.h1
            variants={heroItemVariants}
          >
            Weapons
          </motion.h1>

          <motion.p
            variants={heroItemVariants}
          >
            Explore staffs, spears and legendary
            weapons collected throughout the journey.
          </motion.p>

          <motion.div
            className="weapons-page__hero-decoration"
            variants={heroItemVariants}
            aria-hidden="true"
          >
            <span />
            <i />
            <span />
          </motion.div>
        </motion.div>
      </motion.section>

      <section className="weapons-page__content">
        <motion.div
          className="weapons-page__controls"
          variants={controlsVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.2,
          }}
        >
          <div className="weapons-page__toolbar">
            <div className="weapons-page__search">
              <input
                type="search"
                value={searchTerm}
                onChange={(event) =>
                  setSearchTerm(
                    event.target.value
                  )
                }
                placeholder="Search weapons..."
                aria-label="Search weapons"
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

            <div className="weapons-page__count">
              <AnimatePresence
                mode="wait"
                initial={false}
              >
                <motion.strong
                  key={filteredWeapons.length}
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
                  {filteredWeapons.length}
                </motion.strong>
              </AnimatePresence>

              <span>Weapons</span>
            </div>
          </div>

          <div className="weapons-page__filter-groups">
            <div className="weapons-page__filter-group">
              <span className="weapons-page__filter-title">
                Weapon Type
              </span>

              <div className="weapons-page__filters">
                {weaponTypes.map((type) => {
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
                          className="weapons-page__filter-active"
                          layoutId="weapon-active-type-filter"
                          transition={{
                            duration: reduceMotion
                              ? 0.01
                              : 0.28,
                            ease: premiumEase,
                          }}
                        />
                      )}

                      <span className="weapons-page__filter-label">
                        {type.label}
                      </span>
                    </motion.button>
                  );
                })}
              </div>
            </div>

            <div className="weapons-page__filter-group">
              <span className="weapons-page__filter-title">
                Rarity
              </span>

              <div className="weapons-page__filters">
                {weaponRarities.map((rarity) => {
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
                        setActiveRarity(rarity.id)
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
                          className="weapons-page__filter-active"
                          layoutId="weapon-active-rarity-filter"
                          transition={{
                            duration: reduceMotion
                              ? 0.01
                              : 0.28,
                            ease: premiumEase,
                          }}
                        />
                      )}

                      <span className="weapons-page__filter-label">
                        {rarity.label}
                      </span>
                    </motion.button>
                  );
                })}
              </div>
            </div>
          </div>
        </motion.div>

        <AnimatePresence
          mode="wait"
          initial={false}
        >
          {filteredWeapons.length > 0 ? (
            <motion.div
              className="weapons-page__grid"
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
              {filteredWeapons.map(
                (weapon, index) => (
                  <motion.div
                    className="weapons-page__card-motion"
                    key={weapon.id}
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
                      item={weapon}
                      onOpen={() =>
                        setSelectedWeapon(
                          weapon
                        )
                      }
                    />
                  </motion.div>
                )
              )}
            </motion.div>
          ) : (
            <motion.div
              className="weapons-page__empty"
              key="empty-weapons"
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
              <h2>No weapons found</h2>

              <p>
                Change the search term, weapon type or rarity.
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </section>

      <EquipmentModal
        item={selectedWeapon}
        onClose={() =>
          setSelectedWeapon(null)
        }
      />
    </main>
  );
}

export default Weapons;

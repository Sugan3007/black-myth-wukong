import { useEffect, useMemo, useState } from "react";
import {
  AnimatePresence,
  motion,
  useReducedMotion,
} from "framer-motion";
import { Link } from "react-router-dom";

import "./Materials.css";
import {
  materialCategories,
  materialsData,
} from "./materialsData";

const premiumEase = [0.16, 1, 0.3, 1];

function MaterialCard({ material, onOpen, reduceMotion }) {
  return (
    <motion.button
      type="button"
      className="material-card"
      onClick={onOpen}
      whileHover={reduceMotion ? undefined : { y: -7 }}
      whileTap={reduceMotion ? undefined : { scale: 0.985 }}
      transition={{ duration: 0.25, ease: premiumEase }}
      aria-label={`View details for ${material.name}`}
    >
      <span className="material-card__visual">
        <span className="material-card__halo" aria-hidden="true" />

        <img
          src={material.image}
          alt={material.name}
          loading="lazy"
          onError={(event) => {
            event.currentTarget.style.opacity = "0";
          }}
        />

        <span className="material-card__symbol" aria-hidden="true">
          {material.symbol}
        </span>
      </span>

      <span className="material-card__body">
        <span className="material-card__type">
          {material.category}
        </span>

        <strong>{material.name}</strong>

        <span className="material-card__line" aria-hidden="true" />

        <span className="material-card__action">
          View Material <i aria-hidden="true">→</i>
        </span>
      </span>

      <span className="material-card__border" aria-hidden="true" />
    </motion.button>
  );
}

function MaterialModal({ material, onClose, reduceMotion }) {
  useEffect(() => {
    if (!material) return undefined;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [material, onClose]);

  return (
    <AnimatePresence>
      {material && (
        <motion.div
          className="material-modal"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{
            duration: reduceMotion ? 0.01 : 0.22,
          }}
          role="dialog"
          aria-modal="true"
          aria-labelledby="material-modal-title"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) {
              onClose();
            }
          }}
        >
          <motion.div
            className="material-modal__panel"
            initial={{
              opacity: 0,
              y: reduceMotion ? 0 : 28,
              scale: reduceMotion ? 1 : 0.975,
            }}
            animate={{
              opacity: 1,
              y: 0,
              scale: 1,
            }}
            exit={{
              opacity: 0,
              y: reduceMotion ? 0 : 18,
              scale: reduceMotion ? 1 : 0.985,
            }}
            transition={{
              duration: reduceMotion ? 0.01 : 0.4,
              ease: premiumEase,
            }}
          >
            <button
              className="material-modal__close"
              type="button"
              onClick={onClose}
              aria-label="Close material details"
            >
              ×
            </button>

            <div className="material-modal__image-wrap">
              <span className="material-modal__glow" aria-hidden="true" />

              <span className="material-modal__symbol" aria-hidden="true">
                {material.symbol}
              </span>

              <img
                src={material.image}
                alt={material.name}
              />
            </div>

            <div className="material-modal__content">
              <span>{material.category}</span>

              <h2 id="material-modal-title">
                {material.name}
              </h2>

              <div
                className="material-modal__decoration"
                aria-hidden="true"
              >
                <i />
                <b />
                <i />
              </div>

              <p>{material.description}</p>

              <dl>
                <div>
                  <dt>Collection</dt>
                  <dd>Materials</dd>
                </div>

                <div>
                  <dt>Material Category</dt>
                  <dd>{material.category}</dd>
                </div>
              </dl>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function Materials() {
  const reduceMotion = useReducedMotion();

  const [searchTerm, setSearchTerm] = useState("");
  const [activeCategory, setActiveCategory] = useState("all");
  const [selectedMaterial, setSelectedMaterial] = useState(null);

  const filteredMaterials = useMemo(() => {
    const search = searchTerm.trim().toLowerCase();

    return materialsData.filter((material) => {
      const matchesCategory =
        activeCategory === "all" ||
        material.category === activeCategory;

      const matchesSearch =
        !search ||
        [
          material.name,
          material.category,
          material.description,
        ]
          .join(" ")
          .toLowerCase()
          .includes(search);

      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchTerm]);

  const hasActiveFilters =
    searchTerm.trim() !== "" ||
    activeCategory !== "all";

  const resetFilters = () => {
    setSearchTerm("");
    setActiveCategory("all");
  };

  const heroItemVariants = {
    hidden: {
      opacity: 0,
      y: reduceMotion ? 0 : 28,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: reduceMotion ? 0.01 : 0.62,
        ease: premiumEase,
      },
    },
  };

  const cardVariants = {
    hidden: {
      opacity: 0,
      y: reduceMotion ? 0 : 34,
      scale: reduceMotion ? 1 : 0.985,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: reduceMotion ? 0.01 : 0.5,
        ease: premiumEase,
      },
    },
    exit: {
      opacity: 0,
      scale: reduceMotion ? 1 : 0.985,
      transition: {
        duration: reduceMotion ? 0.01 : 0.16,
      },
    },
  };

  return (
    <main className="materials-page">
      <motion.section
        className="materials-page__hero"
        initial={{
          opacity: 0,
          scale: reduceMotion ? 1 : 1.025,
        }}
        animate={{
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: reduceMotion ? 0.01 : 0.9,
          ease: premiumEase,
        }}
      >
        <motion.div
          className="materials-page__hero-image"
          initial={{
            scale: reduceMotion ? 1 : 1.07,
          }}
          animate={{ scale: 1 }}
          transition={{
            duration: reduceMotion ? 0.01 : 1.35,
            ease: premiumEase,
          }}
          aria-hidden="true"
        />

        <div
          className="materials-page__hero-overlay"
          aria-hidden="true"
        />

        <div
          className="materials-page__hero-glow"
          aria-hidden="true"
        />

        <div
          className="materials-page__hero-grain"
          aria-hidden="true"
        />

        <motion.div
          className="materials-page__hero-content"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: reduceMotion ? 0 : 0.1,
                delayChildren: reduceMotion ? 0 : 0.12,
              },
            },
          }}
        >
          <motion.div variants={heroItemVariants}>
            <Link
              to="/#items"
              className="materials-page__back"
            >
              <span aria-hidden="true">←</span>
              Items
            </Link>
          </motion.div>

          <motion.span variants={heroItemVariants}>
            Relics and Resources
          </motion.span>

          <motion.h1 variants={heroItemVariants}>
            Materials
          </motion.h1>

          <motion.p variants={heroItemVariants}>
            Explore treasured valuables, rare relics, weapon resources, armor materials and special crafting components gathered throughout the journey of the Destined One.
          </motion.p>

          <motion.div
            className="materials-page__hero-decoration"
            variants={heroItemVariants}
            aria-hidden="true"
          >
            <span />
            <i />
            <span />
          </motion.div>
        </motion.div>
      </motion.section>

      <section className="materials-page__content">
        <motion.header
          className="materials-page__intro"
          initial={{
            opacity: 0,
            y: reduceMotion ? 0 : 24,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.3,
          }}
          transition={{
            duration: reduceMotion ? 0.01 : 0.62,
            ease: premiumEase,
          }}
        >
          <span>Materials Compendium</span>

          <h2>Resources of the Journey</h2>

          <p>
            Search the complete materials archive or filter the collection by treasures, rare materials, weapon resources, armor resources and special crafting components.
          </p>
        </motion.header>

        <motion.div
          className="materials-page__controls"
          initial={{
            opacity: 0,
            y: reduceMotion ? 0 : 22,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.2,
          }}
          transition={{
            duration: reduceMotion ? 0.01 : 0.58,
            ease: premiumEase,
          }}
        >
          <div className="materials-page__toolbar">
            <div className="materials-page__search">
              <span
                className="materials-page__search-icon"
                aria-hidden="true"
              >
                <svg viewBox="0 0 24 24" fill="none">
                  <circle cx="11" cy="11" r="6.5" />
                  <path d="m16 16 4 4" />
                </svg>
              </span>

              <input
                type="search"
                value={searchTerm}
                onChange={(event) =>
                  setSearchTerm(event.target.value)
                }
                placeholder="Search treasures, cores, steel or crafting materials..."
                aria-label="Search materials"
              />

              <AnimatePresence>
                {searchTerm && (
                  <motion.button
                    type="button"
                    aria-label="Clear search"
                    onClick={() => setSearchTerm("")}
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
                  >
                    ×
                  </motion.button>
                )}
              </AnimatePresence>
            </div>

            <div className="materials-page__toolbar-right">
              <AnimatePresence>
                {hasActiveFilters && (
                  <motion.button
                    type="button"
                    className="materials-page__reset"
                    onClick={resetFilters}
                    initial={{
                      opacity: 0,
                      scale: 0.9,
                    }}
                    animate={{
                      opacity: 1,
                      scale: 1,
                    }}
                    exit={{
                      opacity: 0,
                      scale: 0.9,
                    }}
                  >
                    Reset Filters
                  </motion.button>
                )}
              </AnimatePresence>

              <div className="materials-page__count">
                <AnimatePresence
                  mode="wait"
                  initial={false}
                >
                  <motion.strong
                    key={filteredMaterials.length}
                    initial={{
                      opacity: 0,
                      y: reduceMotion ? 0 : -6,
                    }}
                    animate={{
                      opacity: 1,
                      y: 0,
                    }}
                    exit={{
                      opacity: 0,
                      y: reduceMotion ? 0 : 6,
                    }}
                  >
                    {filteredMaterials.length}
                  </motion.strong>
                </AnimatePresence>

                <span>Materials</span>
              </div>
            </div>
          </div>

          <div className="materials-page__filter-section">
            <span className="materials-page__filter-heading">
              Filter by Material Category
            </span>

            <div className="materials-page__filters">
              {materialCategories.map((category) => {
                const isActive =
                  activeCategory === category.id;

                return (
                  <motion.button
                    type="button"
                    key={category.id}
                    className={isActive ? "active" : ""}
                    onClick={() =>
                      setActiveCategory(category.id)
                    }
                    whileHover={
                      reduceMotion
                        ? undefined
                        : { y: -2 }
                    }
                    whileTap={
                      reduceMotion
                        ? undefined
                        : { scale: 0.97 }
                    }
                  >
                    {isActive && (
                      <motion.span
                        className="materials-page__filter-active"
                        layoutId="materials-active-category"
                        transition={{
                          duration: reduceMotion
                            ? 0.01
                            : 0.28,
                          ease: premiumEase,
                        }}
                      />
                    )}

                    <span className="materials-page__filter-label">
                      {category.label}
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
          {filteredMaterials.length > 0 ? (
            <motion.div
              className="materials-page__grid"
              key={`${activeCategory}-${searchTerm.trim()}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{
                duration: reduceMotion ? 0.01 : 0.18,
              }}
            >
              {filteredMaterials.map(
                (material, index) => (
                  <motion.div
                    className="materials-page__card-motion"
                    key={material.id}
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
                    <MaterialCard
                      material={material}
                      onOpen={() =>
                        setSelectedMaterial(
                          material
                        )
                      }
                      reduceMotion={reduceMotion}
                    />
                  </motion.div>
                )
              )}
            </motion.div>
          ) : (
            <motion.div
              className="materials-page__empty"
              key="empty-materials"
              initial={{
                opacity: 0,
                y: reduceMotion ? 0 : 20,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              exit={{ opacity: 0 }}
            >
              <span aria-hidden="true">草</span>

              <h2>No materials found</h2>

              <p>
                Change the search term or choose another
                material category.
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

      <MaterialModal
        material={selectedMaterial}
        onClose={() =>
          setSelectedMaterial(null)
        }
        reduceMotion={reduceMotion}
      />
    </main>
  );
}

export default Materials;

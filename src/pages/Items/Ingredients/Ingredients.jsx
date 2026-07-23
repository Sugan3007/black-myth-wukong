import { useEffect, useMemo, useState } from "react";
import {
  AnimatePresence,
  motion,
  useReducedMotion,
} from "framer-motion";
import { Link } from "react-router-dom";

import "./Ingredients.css";
import {
  ingredientCategories,
  ingredientsData,
} from "./ingredientsData";

const premiumEase = [0.16, 1, 0.3, 1];

function IngredientCard({ ingredient, onOpen, reduceMotion }) {
  return (
    <motion.button
      type="button"
      className="ingredient-card"
      onClick={onOpen}
      whileHover={reduceMotion ? undefined : { y: -7 }}
      whileTap={reduceMotion ? undefined : { scale: 0.985 }}
      transition={{ duration: 0.25, ease: premiumEase }}
      aria-label={`View details for ${ingredient.name}`}
    >
      <span className="ingredient-card__visual">
        <span className="ingredient-card__halo" aria-hidden="true" />

        <img
          src={ingredient.image}
          alt={ingredient.name}
          loading="lazy"
          onError={(event) => {
            event.currentTarget.style.opacity = "0";
          }}
        />

        <span className="ingredient-card__symbol" aria-hidden="true">
          {ingredient.symbol}
        </span>
      </span>

      <span className="ingredient-card__body">
        <span className="ingredient-card__type">
          {ingredient.category}
        </span>

        <strong>{ingredient.name}</strong>

        <span className="ingredient-card__line" aria-hidden="true" />

        <span className="ingredient-card__action">
          View Ingredient <i aria-hidden="true">→</i>
        </span>
      </span>

      <span className="ingredient-card__border" aria-hidden="true" />
    </motion.button>
  );
}

function IngredientModal({ ingredient, onClose, reduceMotion }) {
  useEffect(() => {
    if (!ingredient) return undefined;

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
  }, [ingredient, onClose]);

  return (
    <AnimatePresence>
      {ingredient && (
        <motion.div
          className="ingredient-modal"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{
            duration: reduceMotion ? 0.01 : 0.22,
          }}
          role="dialog"
          aria-modal="true"
          aria-labelledby="ingredient-modal-title"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) {
              onClose();
            }
          }}
        >
          <motion.div
            className="ingredient-modal__panel"
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
              className="ingredient-modal__close"
              type="button"
              onClick={onClose}
              aria-label="Close ingredient details"
            >
              ×
            </button>

            <div className="ingredient-modal__image-wrap">
              <span className="ingredient-modal__glow" aria-hidden="true" />

              <span className="ingredient-modal__symbol" aria-hidden="true">
                {ingredient.symbol}
              </span>

              <img
                src={ingredient.image}
                alt={ingredient.name}
              />
            </div>

            <div className="ingredient-modal__content">
              <span>{ingredient.category}</span>

              <h2 id="ingredient-modal-title">
                {ingredient.name}
              </h2>

              <div
                className="ingredient-modal__decoration"
                aria-hidden="true"
              >
                <i />
                <b />
                <i />
              </div>

              <p>{ingredient.description}</p>

              <dl>
                <div>
                  <dt>Collection</dt>
                  <dd>Ingredients</dd>
                </div>

                <div>
                  <dt>Ingredient Type</dt>
                  <dd>{ingredient.category}</dd>
                </div>
              </dl>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function Ingredients() {
  const reduceMotion = useReducedMotion();

  const [searchTerm, setSearchTerm] = useState("");
  const [activeCategory, setActiveCategory] = useState("all");
  const [selectedIngredient, setSelectedIngredient] = useState(null);

  const filteredIngredients = useMemo(() => {
    const search = searchTerm.trim().toLowerCase();

    return ingredientsData.filter((ingredient) => {
      const matchesCategory =
        activeCategory === "all" ||
        ingredient.category === activeCategory;

      const matchesSearch =
        !search ||
        [
          ingredient.name,
          ingredient.category,
          ingredient.description,
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
    <main className="ingredients-page">
      <motion.section
        className="ingredients-page__hero"
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
          className="ingredients-page__hero-image"
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
          className="ingredients-page__hero-overlay"
          aria-hidden="true"
        />

        <div
          className="ingredients-page__hero-glow"
          aria-hidden="true"
        />

        <div
          className="ingredients-page__hero-grain"
          aria-hidden="true"
        />

        <motion.div
          className="ingredients-page__hero-content"
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
              to="/items"
              className="ingredients-page__back"
            >
              <span aria-hidden="true">←</span>
              Items
            </Link>
          </motion.div>

          <motion.span variants={heroItemVariants}>
            Natural Treasures
          </motion.span>

          <motion.h1 variants={heroItemVariants}>
            Ingredients
          </motion.h1>

          <motion.p variants={heroItemVariants}>
            Explore rare herbs, mystical fungi, celestial fruits and
            elemental materials gathered throughout the journey of the
            Destined One.
          </motion.p>

          <motion.div
            className="ingredients-page__hero-decoration"
            variants={heroItemVariants}
            aria-hidden="true"
          >
            <span />
            <i />
            <span />
          </motion.div>
        </motion.div>
      </motion.section>

      <section className="ingredients-page__content">
        <motion.header
          className="ingredients-page__intro"
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
          <span>Ingredient Compendium</span>

          <h2>Essence of the Wild</h2>

          <p>
            Search the complete ingredient archive or filter the
            collection by herbs, flowers, fungi, fruits, minerals and
            rare materials.
          </p>
        </motion.header>

        <motion.div
          className="ingredients-page__controls"
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
          <div className="ingredients-page__toolbar">
            <div className="ingredients-page__search">
              <span
                className="ingredients-page__search-icon"
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
                placeholder="Search herbs, flowers, fungi or minerals..."
                aria-label="Search ingredients"
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

            <div className="ingredients-page__toolbar-right">
              <AnimatePresence>
                {hasActiveFilters && (
                  <motion.button
                    type="button"
                    className="ingredients-page__reset"
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

              <div className="ingredients-page__count">
                <AnimatePresence
                  mode="wait"
                  initial={false}
                >
                  <motion.strong
                    key={filteredIngredients.length}
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
                    {filteredIngredients.length}
                  </motion.strong>
                </AnimatePresence>

                <span>Ingredients</span>
              </div>
            </div>
          </div>

          <div className="ingredients-page__filter-section">
            <span className="ingredients-page__filter-heading">
              Filter by Ingredient Type
            </span>

            <div className="ingredients-page__filters">
              {ingredientCategories.map((category) => {
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
                        className="ingredients-page__filter-active"
                        layoutId="ingredients-active-category"
                        transition={{
                          duration: reduceMotion
                            ? 0.01
                            : 0.28,
                          ease: premiumEase,
                        }}
                      />
                    )}

                    <span className="ingredients-page__filter-label">
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
          {filteredIngredients.length > 0 ? (
            <motion.div
              className="ingredients-page__grid"
              key={`${activeCategory}-${searchTerm.trim()}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{
                duration: reduceMotion ? 0.01 : 0.18,
              }}
            >
              {filteredIngredients.map(
                (ingredient, index) => (
                  <motion.div
                    className="ingredients-page__card-motion"
                    key={ingredient.id}
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
                    <IngredientCard
                      ingredient={ingredient}
                      onOpen={() =>
                        setSelectedIngredient(
                          ingredient
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
              className="ingredients-page__empty"
              key="empty-ingredients"
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

              <h2>No ingredients found</h2>

              <p>
                Change the search term or choose another
                ingredient type.
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

      <IngredientModal
        ingredient={selectedIngredient}
        onClose={() =>
          setSelectedIngredient(null)
        }
        reduceMotion={reduceMotion}
      />
    </main>
  );
}

export default Ingredients;

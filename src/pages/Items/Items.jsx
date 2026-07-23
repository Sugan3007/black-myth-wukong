import {
  motion,
  useReducedMotion,
} from "framer-motion";

import { Link } from "react-router-dom";

import "./Items.css";

/*
|--------------------------------------------------------------------------
| Item Categories
|--------------------------------------------------------------------------
*/

const itemCategories = [
  {
    id: "medicines",

    title: "Medicines",

    subtitle:
      "Remedies of the Journey",

    description:
      "Discover restorative powders, strengthening pellets, celestial pills and treasured formulas used by the Destined One.",

    image:
      "/images/items/medicines.png",

    path:
      "/items/medicines",

    symbol:
      "丹",

    count:
      "7 Types",
  },

  {
    id: "key-items",

    title: "Key Items",

    subtitle:
      "Relics of Destiny",

    description:
      "Explore important objects connected to quests, hidden stories, sacred locations and the unfolding journey.",

    image:
      "/images/items/key-items.png",

    path:
      "/items/key-items",

    symbol:
      "钥",

    count:
      "Quest Items",
  },

  {
    id: "materials",

    title: "Materials",

    subtitle:
      "Crafting Resources",

    description:
      "Browse rare resources gathered from enemies and distant lands for crafting, upgrading and transformation.",

    image:
      "/images/items/materials.png",

    path:
      "/items/materials",

    symbol:
      "材",

    count:
      "Upgrade Items",
  },

  {
    id: "ingredients",

    title: "Ingredients",

    subtitle:
      "Nature's Offerings",

    description:
      "Collect herbs, seeds and uncommon natural treasures used in medicine crafting and spiritual cultivation.",

    image:
      "/images/items/ingredients.png",

    path:
      "/items/ingredients",

    symbol:
      "草",

    count:
      "Crafting Herbs",
  },
];

const premiumEase = [
  0.16,
  1,
  0.3,
  1,
];

function Items() {
  const reduceMotion =
    useReducedMotion();

  /*
  |--------------------------------------------------------------------------
  | Hero Animations
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
        staggerChildren:
          reduceMotion
            ? 0
            : 0.1,

        delayChildren:
          reduceMotion
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
        duration:
          reduceMotion
            ? 0.01
            : 0.62,

        ease:
          premiumEase,
      },
    },
  };

  /*
  |--------------------------------------------------------------------------
  | Card Animations
  |--------------------------------------------------------------------------
  */

  const cardVariants = {
    hidden: {
      opacity: 0,

      y: reduceMotion
        ? 0
        : 38,

      scale: reduceMotion
        ? 1
        : 0.985,
    },

    visible: {
      opacity: 1,

      y: 0,

      scale: 1,

      transition: {
        duration:
          reduceMotion
            ? 0.01
            : 0.62,

        ease:
          premiumEase,
      },
    },
  };

  return (
    <main
      id="items"
      className="items-page"
    >
      {/* Hero */}

      <motion.section
        className="items-page__hero"
        variants={heroVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div
          className="items-page__hero-image"
          initial={{
            scale: reduceMotion
              ? 1
              : 1.08,
          }}
          animate={{
            scale: 1,
          }}
          transition={{
            duration: reduceMotion
              ? 0.01
              : 1.45,

            ease: premiumEase,
          }}
          aria-hidden="true"
        />

        <div
          className="items-page__hero-overlay"
          aria-hidden="true"
        />

        <div
          className="items-page__hero-glow"
          aria-hidden="true"
        />

        <div
          className="items-page__hero-grain"
          aria-hidden="true"
        />

        <motion.div
          className="items-page__hero-content"
          variants={
            heroContentVariants
          }
          initial="hidden"
          animate="visible"
        >
          <motion.span
            variants={
              heroItemVariants
            }
          >
            Treasures of the Journey
          </motion.span>

          <motion.h1
            variants={
              heroItemVariants
            }
          >
            Items
          </motion.h1>

          <motion.p
            variants={
              heroItemVariants
            }
          >
            Explore medicines,
            quest relics, crafting
            materials and rare
            ingredients gathered
            throughout the world of
            Black Myth: Wukong.
          </motion.p>

          <motion.div
            className="items-page__hero-decoration"
            variants={
              heroItemVariants
            }
            aria-hidden="true"
          >
            <span />

            <i />

            <span />
          </motion.div>
        </motion.div>

        <motion.a
          className="items-page__scroll"
          href="#item-categories"
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{
            delay: reduceMotion
              ? 0
              : 0.8,

            duration:
              reduceMotion
                ? 0.01
                : 0.5,
          }}
          aria-label="Scroll to item categories"
        >
          <span>
            Explore
          </span>

          <i aria-hidden="true" />
        </motion.a>
      </motion.section>

      {/* Category Content */}

      <section
        id="item-categories"
        className="items-page__content"
      >
        <motion.header
          className="items-page__section-header"
          initial={{
            opacity: 0,

            y: reduceMotion
              ? 0
              : 24,
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
            duration:
              reduceMotion
                ? 0.01
                : 0.65,

            ease:
              premiumEase,
          }}
        >
          <span>
            Compendium
          </span>

          <h2>
            Choose an Item Category
          </h2>

          <p>
            Select a collection to
            uncover its contents,
            history and uses.
          </p>
        </motion.header>

        {/* Category Grid */}

        <div className="items-page__grid">
          {itemCategories.map(
            (
              category,
              index
            ) => (
              <motion.div
                key={
                  category.id
                }
                className="items-page__card-motion"
                variants={
                  cardVariants
                }
                initial="hidden"
                whileInView="visible"
                viewport={{
                  once: true,

                  amount: 0.14,
                }}
                transition={{
                  delay:
                    reduceMotion
                      ? 0
                      : Math.min(
                          index *
                            0.09,
                          0.27
                        ),
                }}
              >
                <Link
                  to={
                    category.path
                  }
                  className={[
                    "items-page__card",

                    `items-page__card--${category.id}`,
                  ].join(" ")}
                >
                  <div
                    className="items-page__card-image"
                    style={{
                      backgroundImage:
                        `url("${category.image}")`,
                    }}
                    aria-hidden="true"
                  />

                  <div
                    className="items-page__card-overlay"
                    aria-hidden="true"
                  />

                  <div
                    className="items-page__card-glow"
                    aria-hidden="true"
                  />

                  <span
                    className="items-page__card-symbol"
                    aria-hidden="true"
                  >
                    {
                      category.symbol
                    }
                  </span>

                  <div className="items-page__card-top">
                    <span>
                      {String(
                        index + 1
                      ).padStart(
                        2,
                        "0"
                      )}
                    </span>

                    <small>
                      {
                        category.count
                      }
                    </small>
                  </div>

                  <div className="items-page__card-content">
                    <span className="items-page__card-subtitle">
                      {
                        category.subtitle
                      }
                    </span>

                    <h3>
                      {
                        category.title
                      }
                    </h3>

                    <div
                      className="items-page__card-decoration"
                      aria-hidden="true"
                    >
                      <span />

                      <i />
                    </div>

                    <p>
                      {
                        category.description
                      }
                    </p>

                    <div className="items-page__card-action">
                      <span>
                        Explore Collection
                      </span>

                      <i
                        aria-hidden="true"
                      >
                        →
                      </i>
                    </div>
                  </div>

                  <span
                    className="items-page__card-border"
                    aria-hidden="true"
                  />
                </Link>
              </motion.div>
            )
          )}
        </div>
      </section>
    </main>
  );
}

export default Items;
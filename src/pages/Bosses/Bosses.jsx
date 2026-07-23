import {
  motion,
  useReducedMotion,
} from "framer-motion";

import { Link } from "react-router-dom";

import "./Bosses.css";

const categories = [
  {
    id: "final",
    number: "01",
    title: "Final",
    subtitle:
      "Chapter-ending encounters across the six regions.",
    path: "/bosses/final",
    image:
      "/images/bosses/final-bosses.png"
  },
  {
    id: "secert",
    number: "02",
    title: "Secert",
    subtitle:
      "Hidden encounters found beyond the main journey.",
    path: "/bosses/secert",
    image:
      "/images/bosses/secert-bosses.png"
  },
  {
    id: "loong",
    number: "03",
    title: "Loong",
    subtitle:
      "Legendary dragon encounters scattered across the world.",
    path: "/bosses/loong",
    image:
      "/images/bosses/loong-bosses.png"
  },
];

const ease = [0.16, 1, 0.3, 1];

function Bosses() {
  const reduceMotion =
    useReducedMotion();

  const headingVariants = {
    hidden: {
      opacity: 0,
      y: reduceMotion ? 0 : 34,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: reduceMotion
          ? 0.01
          : 0.75,
        ease,
      },
    },
  };

  const gridVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren:
          reduceMotion ? 0 : 0.1,
        delayChildren:
          reduceMotion ? 0 : 0.12,
      },
    },
  };

  const cardVariants = {
    hidden: {
      opacity: 0,
      y: reduceMotion ? 0 : 38,
      scale: reduceMotion ? 1 : 0.985,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: reduceMotion
          ? 0.01
          : 0.62,
        ease,
      },
    },
  };

  return (
    <section
      id="bosses"
      className="bosses"
    >
      <div
        className="bosses__background"
        aria-hidden="true"
      />

      <div className="bosses__container">
        <motion.header
          className="bosses__heading"
          variants={headingVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.35,
          }}
        >
          <span className="bosses__eyebrow">
            Face the greatest trials
          </span>

          <h2>Bosses</h2>

          <div
            className="bosses__divider"
            aria-hidden="true"
          >
            <span />
            <i />
            <span />
          </div>

          <p>
            Explore the major encounters,
            hidden challengers and legendary
            Loongs found throughout the journey.
          </p>
        </motion.header>

        <motion.div
          className="bosses__grid"
          variants={gridVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.15,
          }}
        >
          {categories.map((category) => (
            <motion.div
              key={category.id}
              variants={cardVariants}
              className="bosses__card-wrap"
            >
              <Link
                to={category.path}
                className="bosses__card"
                aria-label={`Open ${category.title}`}
              >
                <div className="bosses__image-wrap">
                  <motion.img
                    src={category.image}
                    alt=""
                    className="bosses__image"
                    whileHover={
                      reduceMotion
                        ? undefined
                        : {
                            scale: 1.055,
                          }
                    }
                    transition={{
                      duration: 0.55,
                      ease,
                    }}
                  />

                  <div
                    className="bosses__image-overlay"
                    aria-hidden="true"
                  />
                </div>

                <div className="bosses__card-content">
                  <span className="bosses__number">
                    {category.number}
                  </span>

                  <h3>{category.title}</h3>

                  <p>
                    {category.subtitle}
                  </p>

                  <span className="bosses__explore">
                    Explore
                    <i aria-hidden="true">
                      →
                    </i>
                  </span>
                </div>

                <div
                  className="bosses__card-frame"
                  aria-hidden="true"
                />
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default Bosses;

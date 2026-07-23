import { motion, useReducedMotion } from "framer-motion";
import { Link } from "react-router-dom";

import "./Equipment.css";
import { equipmentCategories } from "./equipmentCategories";

const ease = [0.16, 1, 0.3, 1];

function ArrowIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path
        d="M5 12h13M13 6l6 6-6 6"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function Equipment() {
  const reduceMotion = useReducedMotion();

  const sectionVariants = {
    hidden: { opacity: 0, y: reduceMotion ? 0 : 90 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: reduceMotion ? 0.01 : 1.1, ease },
    },
  };

  const headingContainer = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: reduceMotion ? 0 : 0.14,
        delayChildren: reduceMotion ? 0 : 0.12,
      },
    },
  };

  const headingItem = {
    hidden: {
      opacity: 0,
      y: reduceMotion ? 0 : 35,
      filter: reduceMotion ? "blur(0px)" : "blur(8px)",
    },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: { duration: reduceMotion ? 0.01 : 0.8, ease },
    },
  };

  const gridVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: reduceMotion ? 0 : 0.12,
        delayChildren: reduceMotion ? 0 : 0.15,
      },
    },
  };

  const cardVariants = {
    hidden: {
      opacity: 0,
      y: reduceMotion ? 0 : 70,
      scale: reduceMotion ? 1 : 0.96,
      filter: reduceMotion ? "blur(0px)" : "blur(7px)",
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      filter: "blur(0px)",
      transition: { duration: reduceMotion ? 0.01 : 0.85, ease },
    },
  };

  return (
    <motion.section
      id="equipment"
      className="equipment-section"
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.04 }}
    >
      <motion.div
        className="equipment-section__background"
        initial={{
          opacity: 0,
          scale: reduceMotion ? 1 : 1.08,
          filter: reduceMotion ? "blur(0px)" : "blur(8px)",
        }}
        whileInView={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
        viewport={{ once: false, amount: 0.03 }}
        transition={{ duration: reduceMotion ? 0.01 : 1.5, ease }}
        aria-hidden="true"
      >
        <div className="equipment-section__background-image" />
        <div className="equipment-section__background-overlay" />
        <div className="equipment-section__texture" />
        <motion.div
          className="equipment-section__orb equipment-section__orb--one"
          animate={
            reduceMotion
              ? undefined
              : { x: [0, 35, 0], y: [0, -25, 0], opacity: [0.22, 0.4, 0.22] }
          }
          transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="equipment-section__orb equipment-section__orb--two"
          animate={
            reduceMotion
              ? undefined
              : { x: [0, -25, 0], y: [0, 30, 0], opacity: [0.18, 0.34, 0.18] }
          }
          transition={{ duration: 11, repeat: Infinity, ease: "easeInOut" }}
        />
      </motion.div>

      <div className="equipment-section__container">
        <motion.header
          className="equipment-section__heading"
          variants={headingContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.35 }}
        >
          <motion.span className="equipment-section__eyebrow" variants={headingItem}>
            Arsenal of the Destined One
          </motion.span>

          <motion.h2 variants={headingItem}>
            Equipment
            <span>Compendium</span>
          </motion.h2>

          <motion.div
            className="equipment-section__decoration"
            variants={headingItem}
            aria-hidden="true"
          >
            <span />
            <i />
            <span />
          </motion.div>

          <motion.p variants={headingItem}>
            Discover legendary weapons, sacred relics, protective armor and
            mystical treasures. Choose a collection to inspect its items,
            attributes, effects and acquisition details.
          </motion.p>

          <motion.div className="equipment-section__collection-label" variants={headingItem}>
            <span>Seven Collections</span>
            <strong>Choose Your Path</strong>
          </motion.div>
        </motion.header>

        <motion.div
          className="equipment-category-grid"
          variants={gridVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.12 }}
        >
          {equipmentCategories.map((category) => (
            <motion.article
              className={`equipment-category-card equipment-category-card--${category.id}`}
              key={category.id}
              variants={cardVariants}
              whileHover={
                reduceMotion
                  ? undefined
                  : { y: -10, transition: { duration: 0.35, ease } }
              }
            >
              <Link
                to={category.path}
                className="equipment-category-card__link"
                aria-label={`Open ${category.title}`}
              >
                <img
                  src={category.image}
                  alt={category.title}
                  className="equipment-category-card__image"
                  loading="lazy"
                />

                <div className="equipment-category-card__overlay" />
                <div className="equipment-category-card__glow" />

                <span className="equipment-category-card__number">
                  {category.number}
                </span>

                <span className="equipment-category-card__symbol" aria-hidden="true">
                  {category.symbol}
                </span>

                <div className="equipment-category-card__content">
                  <span className="equipment-category-card__subtitle">
                    {category.subtitle}
                  </span>

                  <h3>{category.title}</h3>
                  <p>{category.description}</p>

                  <div className="equipment-category-card__action">
                    <span>Enter Collection</span>
                    <ArrowIcon />
                  </div>
                </div>

                <div className="equipment-category-card__border" />
              </Link>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}

export default Equipment;

import {
  AnimatePresence,
  motion,
  useReducedMotion,
} from "framer-motion";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import "./Vessels.css";
import { vessels } from "./vesselsData";

const ease = [0.16, 1, 0.3, 1];

function ArrowIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path
        d="M5 12h14M13 6l6 6-6 6"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function Vessels() {
  const reduceMotion = useReducedMotion();
  const [selectedVessel, setSelectedVessel] = useState(null);

  useEffect(() => {
    const previousOverflow = document.body.style.overflow;

    if (selectedVessel) {
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [selectedVessel]);

  useEffect(() => {
    function handleKeyDown(event) {
      if (event.key === "Escape") {
        setSelectedVessel(null);
      }
    }

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: reduceMotion ? 0 : 0.12,
        delayChildren: reduceMotion ? 0 : 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: reduceMotion ? 0 : 55,
      filter: reduceMotion ? "blur(0px)" : "blur(8px)",
    },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: {
        duration: reduceMotion ? 0.01 : 0.85,
        ease,
      },
    },
  };

  return (
    <main className="vessels-page">
      <div className="vessels-page__background" aria-hidden="true">
        <div className="vessels-page__image" />
        <div className="vessels-page__overlay" />
        <div className="vessels-page__texture" />
        <div className="vessels-page__orb vessels-page__orb--one" />
        <div className="vessels-page__orb vessels-page__orb--two" />
      </div>

      <Link to="/equipment" className="vessels-page__back">
        <span aria-hidden="true">←</span>
        <span>Equipment</span>
      </Link>

      <section className="vessels-hero">
        <motion.div
          className="vessels-hero__content"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.span className="vessels-hero__eyebrow" variants={itemVariants}>
            Ancient Sacred Artifacts
          </motion.span>

          <motion.h1 variants={itemVariants}>
            Vessels
            <span>Compendium</span>
          </motion.h1>

          <motion.div className="vessels-hero__decoration" variants={itemVariants}>
            <span />
            <i />
            <span />
          </motion.div>

          <motion.p variants={itemVariants}>
            Discover four legendary vessels whose powers can resist flame,
            silence tempests, pursue enemies and command heavenly winds.
          </motion.p>

          <motion.div className="vessels-hero__collection" variants={itemVariants}>
            <span>Four Sacred Vessels</span>
            <strong>Choose an Artifact</strong>
          </motion.div>
        </motion.div>
      </section>

      <motion.section
        className="vessels-grid"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.12 }}
      >
        {vessels.map((vessel) => (
          <motion.article
            key={vessel.id}
            className="vessel-card"
            variants={itemVariants}
            whileHover={
              reduceMotion
                ? undefined
                : {
                    y: -12,
                    transition: { duration: 0.35, ease },
                  }
            }
          >
            <button
              type="button"
              className="vessel-card__button"
              onClick={() => setSelectedVessel(vessel)}
            >
              <div className="vessel-card__visual">
                <div className="vessel-card__halo" />
                <img src={vessel.image} alt={vessel.name} />
                <div className="vessel-card__shade" />
                <div className="vessel-card__shine" />
                <div className="vessel-card__border" />

                <span className="vessel-card__number">{vessel.number}</span>
                <span className="vessel-card__chapter">{vessel.chapter}</span>
              </div>

              <div className="vessel-card__content">
                <span>{vessel.subtitle}</span>
                <h2>{vessel.name}</h2>
                <p>{vessel.description}</p>

                <div className="vessel-card__meta">
                  <span>{vessel.element}</span>
                  <strong>{vessel.rarity}</strong>
                </div>

                <div className="vessel-card__action">
                  <span>Explore Vessel</span>
                  <ArrowIcon />
                </div>
              </div>
            </button>
          </motion.article>
        ))}
      </motion.section>

      <AnimatePresence>
        {selectedVessel && (
          <motion.div
            className="vessel-modal"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onMouseDown={() => setSelectedVessel(null)}
          >
            <motion.div
              className="vessel-modal__panel"
              initial={{
                opacity: 0,
                scale: reduceMotion ? 1 : 0.96,
                y: reduceMotion ? 0 : 35,
              }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{
                opacity: 0,
                scale: reduceMotion ? 1 : 0.98,
                y: reduceMotion ? 0 : 20,
              }}
              transition={{
                duration: reduceMotion ? 0.01 : 0.42,
                ease,
              }}
              onMouseDown={(event) => event.stopPropagation()}
            >
              <button
                type="button"
                className="vessel-modal__close"
                onClick={() => setSelectedVessel(null)}
                aria-label="Close vessel details"
              >
                ×
              </button>

              <section className="vessel-modal__visual">
                <div className="vessel-modal__halo" />
                <img src={selectedVessel.image} alt={selectedVessel.name} />
                <div className="vessel-modal__visual-overlay" />

                <span className="vessel-modal__number">
                  {selectedVessel.number}
                </span>

                <div className="vessel-modal__visual-copy">
                  <span>{selectedVessel.subtitle}</span>
                  <h2>{selectedVessel.name}</h2>
                  <strong>{selectedVessel.location}</strong>
                </div>
              </section>

              <section className="vessel-modal__record">
                <header>
                  <div>
                    <span>Vessel Archive</span>
                    <small>Complete artifact information</small>
                  </div>
                  <strong>{selectedVessel.rarity}</strong>
                </header>

                <div className="vessel-modal__facts">
                  <article>
                    <span>Type</span>
                    <strong>{selectedVessel.type}</strong>
                  </article>
                  <article>
                    <span>Element</span>
                    <strong>{selectedVessel.element}</strong>
                  </article>
                  <article>
                    <span>Cooldown</span>
                    <strong>{selectedVessel.cooldown}</strong>
                  </article>
                  <article>
                    <span>Power</span>
                    <strong>{selectedVessel.powerRating}</strong>
                  </article>
                </div>

                <div className="vessel-modal__scroll">
                  <article className="vessel-modal__section">
                    <span>Description</span>
                    <h3>{selectedVessel.name}</h3>
                    <p>{selectedVessel.fullDescription}</p>
                  </article>

                  <article className="vessel-modal__section">
                    <span>Combat Power</span>
                    <div className="vessel-modal__power-grid">
                      <article>
                        <strong>Active Effect</strong>
                        <p>{selectedVessel.active}</p>
                      </article>
                      <article>
                        <strong>Passive Effect</strong>
                        <p>{selectedVessel.passive}</p>
                      </article>
                    </div>
                  </article>

                  <article className="vessel-modal__section">
                    <span>Primary Effects</span>
                    <ul className="vessel-modal__effects">
                      {selectedVessel.effects.map((effect, index) => (
                        <li key={effect}>
                          <small>{String(index + 1).padStart(2, "0")}</small>
                          <p>{effect}</p>
                        </li>
                      ))}
                    </ul>
                  </article>

                  <article className="vessel-modal__section">
                    <span>Acquisition</span>
                    <p>{selectedVessel.acquisition}</p>
                  </article>

                  <article className="vessel-modal__section">
                    <span>Recommended Strategy</span>
                    <p>{selectedVessel.strategy}</p>
                  </article>
                </div>
              </section>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}

export default Vessels;

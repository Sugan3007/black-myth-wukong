import {
  motion,
  useReducedMotion,
} from "framer-motion";

import { Link } from "react-router-dom";

import "./BossGridPage.css";

const ease = [0.16, 1, 0.3, 1];

function BossGridPage({
  eyebrow,
  title,
  description,
  heroImage,
  bosses,
}) {
  const reduceMotion =
    useReducedMotion();

  return (
    <main className="boss-grid-page">
      <section className="boss-grid-page__hero">
        <motion.div
          className="boss-grid-page__hero-image"
          style={{
            backgroundImage:
              `url("${heroImage}")`,
          }}
          initial={{
            opacity: 0,
            scale:
              reduceMotion ? 1 : 1.05,
          }}
          animate={{
            opacity: 1,
            scale: 1,
          }}
          transition={{
            duration:
              reduceMotion ? 0.01 : 0.9,
            ease,
          }}
        />

        <div className="boss-grid-page__hero-overlay" />

        <motion.div
          className="boss-grid-page__hero-content"
          initial={{
            opacity: 0,
            y: reduceMotion ? 0 : 30,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration:
              reduceMotion ? 0.01 : 0.72,
            delay:
              reduceMotion ? 0 : 0.16,
            ease,
          }}
        >
          <Link
            to="/#bosses"
            className="boss-grid-page__back"
          >
            ← Back to Bosses
          </Link>

          <span>{eyebrow}</span>

          <h1>{title}</h1>

          <p>{description}</p>
        </motion.div>
      </section>

      <section className="boss-grid-page__content">
        <motion.div
          className="boss-grid-page__grid"
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.08,
          }}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren:
                  reduceMotion ? 0 : 0.06,
              },
            },
          }}
        >
          {bosses.map((boss, index) => (
            <motion.article
              className="boss-grid-card"
              key={boss.name}
              variants={{
                hidden: {
                  opacity: 0,
                  y:
                    reduceMotion ? 0 : 30,
                  scale:
                    reduceMotion ? 1 : 0.985,
                },
                visible: {
                  opacity: 1,
                  y: 0,
                  scale: 1,
                  transition: {
                    duration:
                      reduceMotion
                        ? 0.01
                        : 0.5,
                    ease,
                  },
                },
              }}
              whileHover={
                reduceMotion
                  ? undefined
                  : {
                      y: -7,
                    }
              }
            >
              <div className="boss-grid-card__image-wrap">
                <motion.img
                  src={boss.image}
                  alt={boss.name}
                  whileHover={
                    reduceMotion
                      ? undefined
                      : {
                          scale: 1.055,
                        }
                  }
                  transition={{
                    duration: 0.45,
                    ease,
                  }}
                />

                <div className="boss-grid-card__overlay" />
              </div>

              <div className="boss-grid-card__content">
                <span>
                  {String(
                    index + 1
                  ).padStart(2, "0")}
                </span>

                <h2>{boss.name}</h2>

                {boss.location && (
                  <p>{boss.location}</p>
                )}
              </div>

              <div className="boss-grid-card__frame" />
            </motion.article>
          ))}
        </motion.div>
      </section>
    </main>
  );
}

export default BossGridPage;

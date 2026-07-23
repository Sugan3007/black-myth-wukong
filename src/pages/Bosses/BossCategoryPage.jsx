import {
  motion,
  useReducedMotion,
} from "framer-motion";

import { Link } from "react-router-dom";

import Navbar from "../../components/layout/Navbar/Navbar";

import "./BossCategoryPage.css";

const ease = [0.16, 1, 0.3, 1];

function BossCategoryPage({
  eyebrow,
  title,
  description,
  background,
}) {
  const reduceMotion =
    useReducedMotion();

  return (
    <main className="boss-category-page">
      <Navbar />

      <section className="boss-category-page__hero">
        <motion.div
          className="boss-category-page__background"
          style={{
            backgroundImage:
              `url("${background}")`,
          }}
          initial={{
            opacity: 0,
            scale: reduceMotion
              ? 1
              : 1.05,
          }}
          animate={{
            opacity: 1,
            scale: 1,
          }}
          transition={{
            duration: reduceMotion
              ? 0.01
              : 0.95,
            ease,
          }}
          aria-hidden="true"
        />

        <div
          className="boss-category-page__overlay"
          aria-hidden="true"
        />

        <motion.div
          className="boss-category-page__content"
          initial={{
            opacity: 0,
            y: reduceMotion
              ? 0
              : 30,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: reduceMotion
              ? 0.01
              : 0.72,
            delay: reduceMotion
              ? 0
              : 0.16,
            ease,
          }}
        >
          <Link
            to="/#bosses"
            className="boss-category-page__back"
          >
            ← Back to Bosses
          </Link>

          <span>
            {eyebrow}
          </span>

          <h1>{title}</h1>

          <p>{description}</p>
        </motion.div>
      </section>

      <section className="boss-category-page__placeholder">
        <motion.div
          initial={{
            opacity: 0,
            y: reduceMotion
              ? 0
              : 22,
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
            duration: reduceMotion
              ? 0.01
              : 0.55,
            ease,
          }}
        >
          <span>Coming next</span>

          <h2>
            Boss collection will be added here
          </h2>

          <p>
            This page is ready for the complete
            boss cards, filters and detail content.
          </p>
        </motion.div>
      </section>
    </main>
  );
}

export default BossCategoryPage;

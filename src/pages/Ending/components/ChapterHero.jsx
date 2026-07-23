import { motion } from "framer-motion";

function ChapterHero({ chapter }) {
  return (
    <section className="ending-chapter-hero">
      <motion.div
        className="ending-chapter-hero-number"
        initial={{
          opacity: 0,
          x: -80,
        }}
        animate={{
          opacity: 1,
          x: 0,
        }}
        transition={{
          duration: 0.8,
        }}
      >
        {chapter.roman}
      </motion.div>

      <motion.div
        className="ending-chapter-hero-content"
        initial={{
          opacity: 0,
          y: 60,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.9,
          delay: 0.1,
          ease: [0.16, 1, 0.3, 1],
        }}
      >
        <span className="ending-section-eyebrow">
          {chapter.chapter}
        </span>

        <h1>{chapter.title}</h1>

        <div className="ending-title-decoration">
          <span />
          <i />
          <span />
        </div>

        <p>{chapter.subtitle}</p>

        <button
          type="button"
          className="ending-watch-button"
          onClick={() => {
            document
              .getElementById("chapter-video")
              ?.scrollIntoView({
                behavior: "smooth",
              });
          }}
        >
          <span className="ending-watch-icon">
            ▶
          </span>

          Watch chapter animation
        </button>
      </motion.div>

      <div className="ending-chapter-scroll-indicator">
        <span>Discover the story</span>
        <i />
      </div>
    </section>
  );
}

export default ChapterHero;
import { motion } from "framer-motion";

function ChapterStory({ chapter }) {
  return (
    <section className="ending-content-section ending-story-section">
      <div className="ending-story-layout">
        <motion.header
          className="ending-story-heading"
          initial={{
            opacity: 0,
            x: -60,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
          }}
          viewport={{
            once: true,
            amount: 0.3,
          }}
          transition={{
            duration: 0.8,
          }}
        >
          <span className="ending-section-eyebrow">
            Chapter Backstory
          </span>

          <h2>The Story</h2>

          <span className="ending-story-chapter-number">
            {chapter.roman}
          </span>
        </motion.header>

        <motion.div
          className="ending-story-copy"
          initial={{
            opacity: 0,
            x: 60,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
          }}
          viewport={{
            once: true,
            amount: 0.2,
          }}
          transition={{
            duration: 0.8,
            delay: 0.1,
          }}
        >
          {chapter.story.map(
            (paragraph, index) => (
              <p key={`${chapter.id}-${index}`}>
                {paragraph}
              </p>
            )
          )}
        </motion.div>
      </div>
    </section>
  );
}

export default ChapterStory;
import { motion } from "framer-motion";

function ChapterCharacters({ chapter }) {
  return (
    <section className="ending-content-section ending-characters-section">
      <header className="ending-section-heading">
        <span className="ending-section-eyebrow">
          Featured Figures
        </span>

        <h2>Characters</h2>
      </header>

      <motion.div
        className="ending-character-grid"
        initial="hidden"
        whileInView="visible"
        viewport={{
          once: true,
          amount: 0.15,
        }}
        variants={{
          hidden: {},
          visible: {
            transition: {
              staggerChildren: 0.08,
            },
          },
        }}
      >
        {chapter.characters.map(
          (character, index) => (
            <motion.article
              className="ending-character-card"
              variants={{
                hidden: {
                  opacity: 0,
                  y: 35,
                },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: {
                    duration: 0.55,
                  },
                },
              }}
              key={character}
            >
              <span>
                {String(index + 1).padStart(
                  2,
                  "0"
                )}
              </span>

              <h3>{character}</h3>

              <i />
            </motion.article>
          )
        )}
      </motion.div>
    </section>
  );
}

export default ChapterCharacters;
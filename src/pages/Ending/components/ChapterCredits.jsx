import { motion } from "framer-motion";

function ChapterCredits({ chapter }) {
  if (!chapter.credits.length) {
    return null;
  }

  return (
    <section className="ending-content-section ending-credits-section">
      <header className="ending-section-heading">
        <span className="ending-section-eyebrow">
          Animation Production
        </span>

        <h2>Staff Credits</h2>
      </header>

      <motion.div
        className="ending-credits-list"
        initial="hidden"
        whileInView="visible"
        viewport={{
          once: true,
          amount: 0.2,
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
        {chapter.credits.map(
          (credit, index) => (
            <motion.div
              className="ending-credit-row"
              variants={{
                hidden: {
                  opacity: 0,
                  x: -30,
                },
                visible: {
                  opacity: 1,
                  x: 0,
                  transition: {
                    duration: 0.5,
                  },
                },
              }}
              key={`${credit.role}-${index}`}
            >
              <span>{credit.role}</span>
              <i />
              <strong>{credit.name}</strong>
            </motion.div>
          )
        )}
      </motion.div>
    </section>
  );
}

export default ChapterCredits;
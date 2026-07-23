import { motion } from "framer-motion";

function ChapterEndingChoices({
  chapter,
}) {
  if (!chapter.finalChapter) {
    return null;
  }

  return (
    <section className="ending-content-section ending-final-section">
      <header className="ending-section-heading">
        <span className="ending-section-eyebrow">
          The Final Journey
        </span>

        <h2>Two Destinies</h2>

        <p>
          The final result is determined by
          whether the Destined One reclaims
          Wukong&apos;s lost memory.
        </p>
      </header>

      <div className="ending-journey-timeline">
        {chapter.journeySteps.map(
          (step, index) => (
            <motion.div
              className="ending-journey-step"
              initial={{
                opacity: 0,
                y: 25,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                delay: index * 0.08,
              }}
              key={step}
            >
              <span>
                {String(index + 1).padStart(
                  2,
                  "0"
                )}
              </span>

              <strong>{step}</strong>

              {index <
                chapter.journeySteps.length -
                  1 && <i />}
            </motion.div>
          )
        )}
      </div>

      <div className="ending-choice-grid">
        {chapter.endings.map(
          (ending, index) => (
            <motion.article
              className={`ending-choice-card ending-choice-card--${ending.id}`}
              initial={{
                opacity: 0,
                y: 60,
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
                duration: 0.7,
                delay: index * 0.14,
              }}
              key={ending.id}
            >
              <span className="ending-choice-label">
                {ending.label}
              </span>

              <span className="ending-choice-symbol">
                {ending.symbol}
              </span>

              <h3>{ending.title}</h3>

              <p>{ending.description}</p>
            </motion.article>
          )
        )}
      </div>

      <div className="ending-after-credits">
        <span>After the credits</span>

        <div>
          <button type="button">
            Continue Journey
          </button>

          <button type="button">
            Start New Game+
          </button>
        </div>
      </div>
    </section>
  );
}

export default ChapterEndingChoices;
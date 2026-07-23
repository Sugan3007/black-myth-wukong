import { motion } from "framer-motion";

function CharacterModal({ character, onClose, onPrevious, onNext }) {
  return (
    <motion.div
      className="character-modal"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <motion.article
        className="character-modal-panel"
        initial={{ opacity: 0, y: 70, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 40, scale: 0.97 }}
        transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
        onClick={(event) => event.stopPropagation()}
      >
        <button
          type="button"
          className="character-modal-close"
          aria-label="Close character details"
          onClick={onClose}
        >
          ×
        </button>

        <div className="character-modal-visual">
          <img src={character.heroImage} alt={character.name} />
          <div className="character-modal-image-overlay" />
          <span className="character-modal-symbol" aria-hidden="true">
            {character.symbol}
          </span>

          <div className="character-modal-visual-copy">
            <span>{character.category}</span>
            <h2>{character.name}</h2>
            <p>{character.title}</p>
          </div>
        </div>

        <div className="character-modal-content">
          <div className="character-modal-scroll">
            <span className="character-section-kicker">
              Character Chronicle
            </span>

            <blockquote>“{character.quote}”</blockquote>

            <div className="character-modal-meta">
              <div>
                <span>Allegiance</span>
                <strong>{character.allegiance}</strong>
              </div>
              <div>
                <span>Known Location</span>
                <strong>{character.location}</strong>
              </div>
            </div>

            <p className="character-modal-summary">
              {character.summary}
            </p>

            <section className="character-modal-section">
              <h3>Biography</h3>
              {character.biography.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </section>

            <section className="character-modal-section">
              <h3>Abilities</h3>
              <div className="character-ability-list">
                {character.abilities.map((ability, index) => (
                  <span key={ability}>
                    <i>{String(index + 1).padStart(2, "0")}</i>
                    {ability}
                  </span>
                ))}
              </div>
            </section>

            <section className="character-modal-section">
              <h3>Connections</h3>
              <div className="character-relation-list">
                {character.relations.map((relation) => (
                  <span key={relation}>{relation}</span>
                ))}
              </div>
            </section>
          </div>

          <footer className="character-modal-controls">
            <button type="button" onClick={onPrevious}>
              <span>←</span> Previous
            </button>
            <span>{character.number}</span>
            <button type="button" onClick={onNext}>
              Next <span>→</span>
            </button>
          </footer>
        </div>
      </motion.article>
    </motion.div>
  );
}

export default CharacterModal;

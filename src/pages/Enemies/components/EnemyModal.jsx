import { motion } from "framer-motion";

export default function EnemyModal({ enemy, onClose, onPrevious, onNext }) {
  return (
    <motion.div className="enemy-modal" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={onClose}>
      <motion.article className="enemy-modal-panel" initial={{ opacity: 0, y: 55, scale: 0.96 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, y: 30, scale: 0.97 }} transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }} onClick={(e) => e.stopPropagation()}>
        <button type="button" className="enemy-modal-close" onClick={onClose} aria-label="Close">×</button>
        <div className="enemy-modal-image-section">
          <img src={enemy.image} alt={enemy.name} />
          <div className="enemy-modal-image-overlay" />
          <span className="enemy-modal-symbol" aria-hidden="true">{enemy.symbol}</span>
          <div className="enemy-modal-image-copy"><span>{enemy.type}</span><h2>{enemy.name}</h2><p>{enemy.location}</p></div>
        </div>
        <div className="enemy-modal-content">
          <div className="enemy-modal-scroll">
            <span className="enemies-kicker">Yaoguai Record</span>
            <div className="enemy-modal-meta">
              <div><span>Classification</span><strong>{enemy.type}</strong></div>
              <div><span>Region</span><strong>{enemy.location}</strong></div>
              <div><span>Journey</span><strong>{enemy.chapter}</strong></div>
            </div>
            <section className="enemy-modal-section"><h3>Description</h3><p>{enemy.summary}</p></section>
            <section className="enemy-modal-section"><h3>Combat Abilities</h3><div className="enemy-ability-list">{enemy.abilities.map((ability, index) => <span key={ability}><i>{String(index + 1).padStart(2, "0")}</i>{ability}</span>)}</div></section>
          </div>
          <footer className="enemy-modal-controls"><button type="button" onClick={onPrevious}>← Previous</button><span>{enemy.number}</span><button type="button" onClick={onNext}>Next →</button></footer>
        </div>
      </motion.article>
    </motion.div>
  );
}

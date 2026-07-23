import { motion } from "framer-motion";

export default function EnemyCard({ enemy, onOpen }) {
  return (
    <motion.article className="enemy-card" variants={{ hidden: { opacity: 0, y: 42 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } } }}>
      <button type="button" className="enemy-card-button" onClick={() => onOpen(enemy)}>
        <img src={enemy.image} alt={enemy.name} className="enemy-card-image" loading="lazy" />
        <div className="enemy-card-overlay" />
        <span className="enemy-card-number">{enemy.number}</span>
        <span className="enemy-card-symbol" aria-hidden="true">{enemy.symbol}</span>
        <div className="enemy-card-content">
          <div className="enemy-card-badges"><span>{enemy.type}</span><span>{enemy.chapter}</span></div>
          <h2>{enemy.name}</h2><p>{enemy.location}</p>
          <div className="enemy-card-action">Open record <i>→</i></div>
        </div>
      </button>
    </motion.article>
  );
}

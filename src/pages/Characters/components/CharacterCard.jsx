import { motion } from "framer-motion";

function CharacterCard({ character, onOpen }) {
  return (
    <motion.article
      className="character-card"
      variants={{
        hidden: { opacity: 0, y: 55 },
        visible: {
          opacity: 1,
          y: 0,
          transition: {
            duration: 0.7,
            ease: [0.16, 1, 0.3, 1],
          },
        },
      }}
    >
      <button
        type="button"
        className="character-card-button"
        onClick={() => onOpen(character)}
      >
        <img
          src={character.image}
          alt={character.name}
          className="character-card-image"
        />

        <div className="character-card-shade" />
        <div className="character-card-glow" />

        <span className="character-card-number">
          {character.number}
        </span>

        <span className="character-card-symbol" aria-hidden="true">
          {character.symbol}
        </span>

        <div className="character-card-copy">
          <span>{character.category}</span>
          <h2>{character.name}</h2>
          <p>{character.title}</p>

          <div className="character-card-action">
            View Chronicle
            <i aria-hidden="true">→</i>
          </div>
        </div>

        <div className="character-card-border" />
      </button>
    </motion.article>
  );
}

export default CharacterCard;

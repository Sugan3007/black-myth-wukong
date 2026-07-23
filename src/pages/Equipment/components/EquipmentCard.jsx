import "./EquipmentComponents.css";
import { motion } from "framer-motion";

function EquipmentCard({ item, onOpen }) {
  const rarityClass = item.rarity
    ? item.rarity.toLowerCase()
    : "unclassified";

  return (
    <motion.article
      className="equipment-card"
      variants={{
        hidden: {
          opacity: 0,
          y: 24,
        },
        visible: {
          opacity: 1,
          y: 0,
        },
      }}
      whileHover={{
        y: -8,
      }}
      transition={{
        duration: 0.35,
      }}
    >
      <button
        type="button"
        className="equipment-card__button"
        onClick={onOpen}
        aria-label={`View ${item.name}`}
      >
        <div className="equipment-card__visual">
          <div className="equipment-card__number">
            {item.number}
          </div>

          <div className="equipment-card__circle" />

          <img
            src={item.image}
            alt={item.name}
            className="equipment-card__image"
            loading="lazy"
          />

          <span
            className={`equipment-card__rarity equipment-card__rarity--${rarityClass}`}
          >
            {item.rarity || "Unclassified"}
          </span>
        </div>

        <div className="equipment-card__content">
          <span className="equipment-card__category">
            {item.categoryLabel || item.category}
          </span>

          <h2>{item.name}</h2>

          <div className="equipment-card__meta">
            <span>{item.subcategory}</span>

            <span className="equipment-card__meta-dot" />

            <span>
              {item.upgradeable
                ? "Upgradeable"
                : "Weapon"}
            </span>
          </div>

          <p>{item.description}</p>

          <div className="equipment-card__footer">
            <span>View Details</span>
            <span aria-hidden="true">↗</span>
          </div>
        </div>
      </button>
    </motion.article>
  );
}

export default EquipmentCard;
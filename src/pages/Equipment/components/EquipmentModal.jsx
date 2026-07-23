import "./EquipmentComponents.css";
import { useEffect } from "react";
import {
  AnimatePresence,
  motion,
} from "framer-motion";

function EquipmentModal({ item, onClose }) {
  useEffect(() => {
    if (!item) {
      return undefined;
    }

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener(
      "keydown",
      handleKeyDown
    );

    const originalOverflow =
      document.body.style.overflow;

    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener(
        "keydown",
        handleKeyDown
      );

      document.body.style.overflow =
        originalOverflow;
    };
  }, [item, onClose]);

  return (
    <AnimatePresence>
      {item && (
        <motion.div
          className="equipment-modal"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onMouseDown={onClose}
          role="presentation"
        >
          <motion.div
            className="equipment-modal__panel"
            initial={{
              opacity: 0,
              scale: 0.94,
              y: 30,
            }}
            animate={{
              opacity: 1,
              scale: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
              scale: 0.96,
              y: 20,
            }}
            transition={{
              duration: 0.3,
              ease: "easeOut",
            }}
            onMouseDown={(event) =>
              event.stopPropagation()
            }
            role="dialog"
            aria-modal="true"
            aria-labelledby="equipment-modal-title"
          >
            <button
              type="button"
              className="equipment-modal__close"
              onClick={onClose}
              aria-label="Close equipment details"
            >
              ×
            </button>

            <div className="equipment-modal__visual">
              <span className="equipment-modal__number">
                {item.number}
              </span>

              <div className="equipment-modal__halo" />

              <img
                src={item.image}
                alt={item.name}
              />
            </div>

            <div className="equipment-modal__content">
              <div className="equipment-modal__labels">
                <span>
                  {item.categoryLabel ||
                    item.category}
                </span>

                <span>{item.subcategory}</span>

                <span>
                  {item.rarity || "Unclassified"}
                </span>
              </div>

              <h2 id="equipment-modal-title">
                {item.name}
              </h2>

              <p className="equipment-modal__description">
                {item.description}
              </p>

              {item.lore && (
                <p className="equipment-modal__lore">
                  {item.lore}
                </p>
              )}

              <div className="equipment-modal__section">
                <h3>Weapon Details</h3>

                <div className="equipment-modal__details">
                  <div>
                    <span>Category</span>
                    <strong>
                      {item.categoryLabel ||
                        item.category}
                    </strong>
                  </div>

                  <div>
                    <span>Weapon Type</span>
                    <strong>
                      {item.subcategory || "Unknown"}
                    </strong>
                  </div>

                  <div>
                    <span>Rarity</span>
                    <strong>
                      {item.rarity || "Not added"}
                    </strong>
                  </div>

                  <div>
                    <span>Upgradeable</span>
                    <strong>
                      {item.upgradeable ? "Yes" : "No"}
                    </strong>
                  </div>
                </div>
              </div>

              {item.stats?.length > 0 && (
                <div className="equipment-modal__section">
                  <h3>Attributes</h3>

                  <div className="equipment-modal__stats">
                    {item.stats.map((stat) => (
                      <div key={stat.label}>
                        <span>{stat.label}</span>
                        <strong>{stat.value}</strong>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {item.effects?.length > 0 && (
                <div className="equipment-modal__section">
                  <h3>Unique Effects</h3>

                  <div className="equipment-modal__effects">
                    {item.effects.map((effect) => (
                      <article key={effect.title}>
                        <strong>{effect.title}</strong>
                        <p>{effect.description}</p>
                      </article>
                    ))}
                  </div>
                </div>
              )}

              {item.obtainedFrom?.length > 0 && (
                <div className="equipment-modal__section">
                  <h3>Obtained From</h3>

                  <ul className="equipment-modal__obtained">
                    {item.obtainedFrom.map(
                      (source) => (
                        <li key={source}>{source}</li>
                      )
                    )}
                  </ul>
                </div>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default EquipmentModal;
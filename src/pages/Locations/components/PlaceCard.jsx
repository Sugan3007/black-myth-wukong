import { motion } from "framer-motion";

function ArrowIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path
        d="M5 12h13M13 6l6 6-6 6"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function PlaceCard({
  place,
  onOpen,
}) {
  return (
    <motion.article
      className="place-card"
      variants={{
        hidden: {
          opacity: 0,
          y: 45,
        },

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
        className="place-card-button"
        onClick={() => onOpen(place)}
      >
        <img
          src={place.image}
          alt={place.name}
          className="place-card-image"
          loading="lazy"
        />

        <div className="place-card-overlay" />
        <div className="place-card-glow" />

        <span className="place-card-number">
          {place.number}
        </span>

        <div className="place-card-content">
          <span className="place-card-label">
            Travel Destination
          </span>

          <h2>{place.name}</h2>

          <p>{place.description}</p>

          <div className="place-card-footer">
            <span>
              {place.shrines.length} Shrines
            </span>

            <div className="place-card-action">
              View place
              <ArrowIcon />
            </div>
          </div>
        </div>

        <div className="place-card-border" />
      </button>
    </motion.article>
  );
}

export default PlaceCard;
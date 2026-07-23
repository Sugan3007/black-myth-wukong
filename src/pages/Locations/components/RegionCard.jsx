import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

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

function RegionCard({ location }) {
  const navigate = useNavigate();

  const openLocation = () => {
    navigate(
      `/explore/locations/${location.id}`
    );
  };

  return (
    <motion.article
      className="location-region-card"
      variants={{
        hidden: {
          opacity: 0,
          y: 55,
        },

        visible: {
          opacity: 1,
          y: 0,

          transition: {
            duration: 0.75,
            ease: [0.16, 1, 0.3, 1],
          },
        },
      }}
    >
      <button
        type="button"
        className="location-region-button"
        onClick={openLocation}
      >
        <img
          src={location.image}
          alt={location.name}
          className="location-region-image"
          loading="lazy"
        />

        <div className="location-region-overlay" />
        <div className="location-region-glow" />

        <span className="location-region-number">
          {location.number}
        </span>

        <span
          className="location-region-symbol"
          aria-hidden="true"
        >
          {location.symbol}
        </span>

        <div className="location-region-content">
          <div className="location-region-meta">
            <span>{location.chapter}</span>

            <span>
              {location.places.length} Places
            </span>
          </div>

          <h2>{location.name}</h2>

          <p>{location.title}</p>

          <div className="location-region-action">
            <span>Explore region</span>
            <ArrowIcon />
          </div>
        </div>

        <div className="location-region-border" />
      </button>
    </motion.article>
  );
}

export default RegionCard;
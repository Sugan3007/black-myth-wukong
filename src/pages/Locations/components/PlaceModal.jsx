import { motion } from "framer-motion";

function CloseIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path
        d="M6 6l12 12M18 6 6 18"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

function ShrineIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path
        d="M12 3 5 8h14l-7-5Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.3"
      />

      <path
        d="M7 9v8M12 9v8M17 9v8M5 18h14"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.3"
        strokeLinecap="round"
      />
    </svg>
  );
}

function PlaceModal({
  place,
  location,
  onClose,
}) {
  return (
    <motion.div
      className="place-modal"
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      exit={{
        opacity: 0,
      }}
      onClick={onClose}
    >
      <motion.article
        className="place-modal-panel"
        initial={{
          opacity: 0,
          y: 60,
          scale: 0.96,
        }}
        animate={{
          opacity: 1,
          y: 0,
          scale: 1,
        }}
        exit={{
          opacity: 0,
          y: 35,
          scale: 0.97,
        }}
        transition={{
          duration: 0.5,
          ease: [0.16, 1, 0.3, 1],
        }}
        onClick={(event) =>
          event.stopPropagation()
        }
      >
        <button
          type="button"
          className="place-modal-close"
          aria-label="Close place"
          onClick={onClose}
        >
          <CloseIcon />
        </button>

        <div className="place-modal-hero">
          <img
            src={place.image}
            alt={place.name}
          />

          <div className="place-modal-hero-overlay" />

          <span className="place-modal-number">
            {place.number}
          </span>

          <div className="place-modal-hero-copy">
            <span>
              {location.name}
            </span>

            <h2>{place.name}</h2>

            <p>{location.chapter}</p>
          </div>
        </div>

        <div className="place-modal-content">
          <div className="place-modal-scroll">
            <span className="location-details-kicker">
              Place Record
            </span>

            <section className="place-modal-description">
              <h3>Place overview</h3>

              <p>
                {place.description}
              </p>
            </section>

            <section className="place-modal-shrines">
              <header>
                <span>
                  Fast Travel Points
                </span>

                <h3>
                  Keeper&apos;s Shrines
                </h3>
              </header>

              {place.shrines.length > 0 ? (
                <div className="place-shrine-list">
                  {place.shrines.map(
                   (shrine) => (
                      <article
                        className="place-shrine-item"
                        key={shrine.id}
                      >
                        <div className="place-shrine-icon">
                          <ShrineIcon />
                        </div>

                        <div>
                         <span>
                           Shrine {shrine.number}
                        </span>

                          <h4>
                            {shrine.name}
                          </h4>
                        </div>
                      </article>
                    )
                  )}
                </div>
              ) : (
                <div className="place-shrines-empty">
                  <ShrineIcon />

                  <h4>
                    Shrine records pending
                  </h4>

                  <p>
                    Keeper&apos;s Shrine
                    information for this place
                    will be added when the
                    complete shrine list is
                    available.
                  </p>
                </div>
              )}
            </section>
          </div>
        </div>
      </motion.article>
    </motion.div>
  );
}

export default PlaceModal;
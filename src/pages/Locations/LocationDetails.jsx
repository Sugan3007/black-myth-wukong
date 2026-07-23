import {
  useEffect,
  useMemo,
  useState,
} from "react";

import {
  AnimatePresence,
  motion,
} from "framer-motion";

import {
  Navigate,
  useNavigate,
  useParams,
} from "react-router-dom";

import Navbar from "../../components/layout/Navbar/Navbar";

import {
  getLocationById,
} from "./locationData";

import PlaceCard from "./components/PlaceCard";
import PlaceModal from "./components/PlaceModal";

import "./LocationDetails.css";

function LocationDetails() {
  const { locationId } = useParams();

  const navigate = useNavigate();

  const [
    selectedPlace,
    setSelectedPlace,
  ] = useState(null);

  const location = useMemo(
    () => getLocationById(locationId),
    [locationId]
  );

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "auto",
    });
  }, [locationId]);

  useEffect(() => {
    if (selectedPlace) {
      document.body.style.overflow =
        "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [selectedPlace]);

  useEffect(() => {
    function handleKeyDown(event) {
      if (
        event.key === "Escape" &&
        selectedPlace
      ) {
        setSelectedPlace(null);
      }
    }

    window.addEventListener(
      "keydown",
      handleKeyDown
    );

    return () => {
      window.removeEventListener(
        "keydown",
        handleKeyDown
      );
    };
  }, [selectedPlace]);

  if (!location) {
    return (
      <Navigate
        to="/explore/locations"
        replace
      />
    );
  }

  const totalShrines =
    location.places.reduce(
      (total, place) =>
        total + place.shrines.length,
      0
    );

  return (
    <main className="location-details-page">
      <Navbar />

      <section className="location-details-hero">
        <img
          src={
            location.heroImage ||
            location.image
          }
          alt={location.name}
          className="location-details-hero-image"
        />

        <div className="location-details-hero-overlay" />
        <div className="location-details-hero-texture" />

        <motion.div
          className="location-details-hero-content"
          initial={{
            opacity: 0,
            y: 55,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 1,
            ease: [0.16, 1, 0.3, 1],
          }}
        >
          <button
            type="button"
            className="location-details-back"
            onClick={() =>
              navigate(
                "/explore/locations"
              )
            }
          >
            ← Return to World Atlas
          </button>

          <span className="location-details-kicker">
            {location.chapter}
          </span>

          <h1>
            {location.name}
          </h1>

          <p className="location-details-title">
            {location.title}
          </p>

          <div className="location-details-decoration">
            <span />
            <i />
            <span />
          </div>

          <p className="location-details-summary">
            {location.summary}
          </p>
        </motion.div>

        <span
          className="location-details-symbol"
          aria-hidden="true"
        >
          {location.symbol}
        </span>
      </section>

      <section className="location-details-overview">
        <div className="location-details-container">
          <motion.div
            className="location-overview-grid"
            initial={{
              opacity: 0,
              y: 45,
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
              duration: 0.8,
            }}
          >
            <div className="location-overview-copy">
              <span className="location-details-kicker">
                Region Overview
              </span>

              <h2>
                Journey through
                <span>
                  {location.name}
                </span>
              </h2>

              <p>
                {location.description}
              </p>
            </div>

            <div className="location-overview-stats">
              <article>
                <span>Chapter</span>
                <strong>
                  {String(
                    location.chapterNumber
                  ).padStart(2, "0")}
                </strong>
              </article>

              <article>
                <span>Places</span>
                <strong>
                  {String(
                    location.places.length
                  ).padStart(2, "0")}
                </strong>
              </article>

              <article>
                <span>Shrines</span>
                <strong>
                  {String(
                    totalShrines
                  ).padStart(2, "0")}
                </strong>
              </article>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="location-places-section">
        <div className="location-details-container">
          <header className="location-places-heading">
            <div>
              <span className="location-details-kicker">
                Travel Destinations
              </span>

              <h2>
                Places within
                <span>the region</span>
              </h2>
            </div>

            <p>
              Select a place to view its
              description and Keeper&apos;s
              Shrine records.
            </p>
          </header>

          <motion.div
            className="location-places-grid"
            variants={{
              hidden: {},

              visible: {
                transition: {
                  staggerChildren: 0.1,
                },
              },
            }}
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
              amount: 0.1,
            }}
          >
            {location.places.map(
              (place) => (
                <PlaceCard
                  key={place.id}
                  place={place}
                  onOpen={
                    setSelectedPlace
                  }
                />
              )
            )}
          </motion.div>
        </div>
      </section>

      <AnimatePresence>
        {selectedPlace && (
          <PlaceModal
            place={selectedPlace}
            location={location}
            onClose={() =>
              setSelectedPlace(null)
            }
          />
        )}
      </AnimatePresence>
    </main>
  );
}

export default LocationDetails;
import { useEffect, useMemo, useState } from "react";
import {
  AnimatePresence,
  motion,
  useReducedMotion,
} from "framer-motion";
import { Link } from "react-router-dom";

import "./Medicines.css";
import {
  medicineTypes,
  medicinesData,
} from "./medicinesData";

const premiumEase = [0.16, 1, 0.3, 1];

function MedicineCard({ medicine, onOpen, reduceMotion }) {
  return (
    <motion.button
      type="button"
      className="medicine-card"
      onClick={onOpen}
      whileHover={reduceMotion ? undefined : { y: -7 }}
      whileTap={reduceMotion ? undefined : { scale: 0.985 }}
      transition={{ duration: 0.25, ease: premiumEase }}
      aria-label={`View details for ${medicine.name}`}
    >
      <span className="medicine-card__visual">
        <span className="medicine-card__halo" aria-hidden="true" />
        <img
          src={medicine.image}
          alt={medicine.name}
          loading="lazy"
          onError={(event) => {
            event.currentTarget.style.opacity = "0";
          }}
        />
        <span className="medicine-card__symbol" aria-hidden="true">
          {medicine.symbol}
        </span>
      </span>

      <span className="medicine-card__body">
        <span className="medicine-card__type">
          {medicine.typeLabel}
        </span>
        <strong>{medicine.name}</strong>
        <span className="medicine-card__line" aria-hidden="true" />
        <span className="medicine-card__action">
          View Medicine <i aria-hidden="true">→</i>
        </span>
      </span>

      <span className="medicine-card__border" aria-hidden="true" />
    </motion.button>
  );
}

function MedicineModal({ medicine, onClose, reduceMotion }) {
  useEffect(() => {
    if (!medicine) return undefined;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (event) => {
      if (event.key === "Escape") onClose();
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [medicine, onClose]);

  return (
    <AnimatePresence>
      {medicine && (
        <motion.div
          className="medicine-modal"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: reduceMotion ? 0.01 : 0.22 }}
          role="dialog"
          aria-modal="true"
          aria-labelledby="medicine-modal-title"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) onClose();
          }}
        >
          <motion.div
            className="medicine-modal__panel"
            initial={{
              opacity: 0,
              y: reduceMotion ? 0 : 28,
              scale: reduceMotion ? 1 : 0.975,
            }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{
              opacity: 0,
              y: reduceMotion ? 0 : 18,
              scale: reduceMotion ? 1 : 0.985,
            }}
            transition={{
              duration: reduceMotion ? 0.01 : 0.4,
              ease: premiumEase,
            }}
          >
            <button
              className="medicine-modal__close"
              type="button"
              onClick={onClose}
              aria-label="Close medicine details"
            >
              ×
            </button>

            <div className="medicine-modal__image-wrap">
              <span className="medicine-modal__glow" aria-hidden="true" />
              <span className="medicine-modal__symbol" aria-hidden="true">
                {medicine.symbol}
              </span>
              <img src={medicine.image} alt={medicine.name} />
            </div>

            <div className="medicine-modal__content">
              <span>{medicine.typeLabel}</span>
              <h2 id="medicine-modal-title">{medicine.name}</h2>
              <div className="medicine-modal__decoration" aria-hidden="true">
                <i />
                <b />
                <i />
              </div>
              <p>{medicine.description}</p>

              <dl>
                <div>
                  <dt>Collection</dt>
                  <dd>{medicine.typeShortLabel}</dd>
                </div>
                <div>
                  <dt>Item Type</dt>
                  <dd>{medicine.type === "formulas" ? "Crafting Formula" : "Medicine"}</dd>
                </div>
              </dl>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function Medicines() {
  const reduceMotion = useReducedMotion();
  const [searchTerm, setSearchTerm] = useState("");
  const [activeType, setActiveType] = useState("all");
  const [selectedMedicine, setSelectedMedicine] = useState(null);

  const filteredMedicines = useMemo(() => {
    const search = searchTerm.trim().toLowerCase();

    return medicinesData.filter((medicine) => {
      const matchesType = activeType === "all" || medicine.type === activeType;
      const matchesSearch =
        !search ||
        [medicine.name, medicine.typeLabel, medicine.description]
          .join(" ")
          .toLowerCase()
          .includes(search);

      return matchesType && matchesSearch;
    });
  }, [activeType, searchTerm]);

  const hasActiveFilters = searchTerm.trim() !== "" || activeType !== "all";

  const resetFilters = () => {
    setSearchTerm("");
    setActiveType("all");
  };

  const heroItemVariants = {
    hidden: { opacity: 0, y: reduceMotion ? 0 : 28 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: reduceMotion ? 0.01 : 0.62,
        ease: premiumEase,
      },
    },
  };

  const cardVariants = {
    hidden: {
      opacity: 0,
      y: reduceMotion ? 0 : 34,
      scale: reduceMotion ? 1 : 0.985,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: reduceMotion ? 0.01 : 0.5,
        ease: premiumEase,
      },
    },
    exit: {
      opacity: 0,
      scale: reduceMotion ? 1 : 0.985,
      transition: { duration: reduceMotion ? 0.01 : 0.16 },
    },
  };

  return (
    <main className="medicines-page">
      <motion.section
        className="medicines-page__hero"
        initial={{ opacity: 0, scale: reduceMotion ? 1 : 1.025 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: reduceMotion ? 0.01 : 0.9,
          ease: premiumEase,
        }}
      >
        <motion.div
          className="medicines-page__hero-image"
          initial={{ scale: reduceMotion ? 1 : 1.07 }}
          animate={{ scale: 1 }}
          transition={{
            duration: reduceMotion ? 0.01 : 1.35,
            ease: premiumEase,
          }}
          aria-hidden="true"
        />
        <div className="medicines-page__hero-overlay" aria-hidden="true" />
        <div className="medicines-page__hero-glow" aria-hidden="true" />
        <div className="medicines-page__hero-grain" aria-hidden="true" />

        <motion.div
          className="medicines-page__hero-content"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: reduceMotion ? 0 : 0.1,
                delayChildren: reduceMotion ? 0 : 0.12,
              },
            },
          }}
        >
          <motion.div variants={heroItemVariants}>
            <Link to="/#items" className="medicines-page__back">
              <span aria-hidden="true">←</span> Items
            </Link>
          </motion.div>
          <motion.span variants={heroItemVariants}>Sacred Remedies</motion.span>
          <motion.h1 variants={heroItemVariants}>Medicines</motion.h1>
          <motion.p variants={heroItemVariants}>
            Discover restorative powders, strengthening pellets, celestial pills
            and treasured formulas carried throughout the journey of the Destined One.
          </motion.p>
          <motion.div
            className="medicines-page__hero-decoration"
            variants={heroItemVariants}
            aria-hidden="true"
          >
            <span />
            <i />
            <span />
          </motion.div>
        </motion.div>
      </motion.section>

      <section className="medicines-page__content">
        <motion.header
          className="medicines-page__intro"
          initial={{ opacity: 0, y: reduceMotion ? 0 : 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{
            duration: reduceMotion ? 0.01 : 0.62,
            ease: premiumEase,
          }}
        >
          <span>Medicine Compendium</span>
          <h2>Seven Paths of Alchemy</h2>
          <p>
            Search the complete medicine archive or select one of the seven
            collections to reveal its powders, pellets, pills, decoctions and formulas.
          </p>
        </motion.header>

        <motion.div
          className="medicines-page__controls"
          initial={{ opacity: 0, y: reduceMotion ? 0 : 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{
            duration: reduceMotion ? 0.01 : 0.58,
            ease: premiumEase,
          }}
        >
          <div className="medicines-page__toolbar">
            <div className="medicines-page__search">
              <span className="medicines-page__search-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none">
                  <circle cx="11" cy="11" r="6.5" />
                  <path d="m16 16 4 4" />
                </svg>
              </span>
              <input
                type="search"
                value={searchTerm}
                onChange={(event) => setSearchTerm(event.target.value)}
                placeholder="Search medicines, pills, powders or formulas..."
                aria-label="Search medicines"
              />
              <AnimatePresence>
                {searchTerm && (
                  <motion.button
                    type="button"
                    aria-label="Clear search"
                    onClick={() => setSearchTerm("")}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                  >
                    ×
                  </motion.button>
                )}
              </AnimatePresence>
            </div>

            <div className="medicines-page__toolbar-right">
              <AnimatePresence>
                {hasActiveFilters && (
                  <motion.button
                    type="button"
                    className="medicines-page__reset"
                    onClick={resetFilters}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                  >
                    Reset Filters
                  </motion.button>
                )}
              </AnimatePresence>

              <div className="medicines-page__count">
                <AnimatePresence mode="wait" initial={false}>
                  <motion.strong
                    key={filteredMedicines.length}
                    initial={{ opacity: 0, y: reduceMotion ? 0 : -6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: reduceMotion ? 0 : 6 }}
                  >
                    {filteredMedicines.length}
                  </motion.strong>
                </AnimatePresence>
                <span>Medicines</span>
              </div>
            </div>
          </div>

          <div className="medicines-page__filter-section">
            <span className="medicines-page__filter-heading">
              Filter by Medicine Type
            </span>
            <div className="medicines-page__filters">
              {medicineTypes.map((type) => {
                const isActive = activeType === type.id;

                return (
                  <motion.button
                    type="button"
                    key={type.id}
                    className={isActive ? "active" : ""}
                    onClick={() => setActiveType(type.id)}
                    whileHover={reduceMotion ? undefined : { y: -2 }}
                    whileTap={reduceMotion ? undefined : { scale: 0.97 }}
                  >
                    {isActive && (
                      <motion.span
                        className="medicines-page__filter-active"
                        layoutId="medicines-active-type"
                        transition={{
                          duration: reduceMotion ? 0.01 : 0.28,
                          ease: premiumEase,
                        }}
                      />
                    )}
                    <span className="medicines-page__filter-label">
                      {type.shortLabel}
                    </span>
                  </motion.button>
                );
              })}
            </div>
          </div>
        </motion.div>

        <AnimatePresence mode="wait" initial={false}>
          {filteredMedicines.length > 0 ? (
            <motion.div
              className="medicines-page__grid"
              key={`${activeType}-${searchTerm.trim()}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: reduceMotion ? 0.01 : 0.18 }}
            >
              {filteredMedicines.map((medicine, index) => (
                <motion.div
                  className="medicines-page__card-motion"
                  key={medicine.id}
                  variants={cardVariants}
                  initial="hidden"
                  whileInView="visible"
                  exit="exit"
                  viewport={{ once: true, amount: 0.08 }}
                  transition={{
                    delay: reduceMotion ? 0 : Math.min(index * 0.025, 0.2),
                  }}
                >
                  <MedicineCard
                    medicine={medicine}
                    onOpen={() => setSelectedMedicine(medicine)}
                    reduceMotion={reduceMotion}
                  />
                </motion.div>
              ))}
            </motion.div>
          ) : (
            <motion.div
              className="medicines-page__empty"
              key="empty-medicines"
              initial={{ opacity: 0, y: reduceMotion ? 0 : 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
            >
              <span aria-hidden="true">丹</span>
              <h2>No medicines found</h2>
              <p>Change the search term or choose another medicine type.</p>
              <button type="button" onClick={resetFilters}>
                Reset Filters
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </section>

      <MedicineModal
        medicine={selectedMedicine}
        onClose={() => setSelectedMedicine(null)}
        reduceMotion={reduceMotion}
      />
    </main>
  );
}

export default Medicines;

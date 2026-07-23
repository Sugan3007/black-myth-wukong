import { useEffect, useMemo, useState } from "react";
import {
  AnimatePresence,
  motion,
  useReducedMotion,
} from "framer-motion";
import { Link } from "react-router-dom";

import "./KeyItems.css";
import {
  keyItemCategories,
  keyItemsData,
} from "./keyItemsData";

const premiumEase = [0.16, 1, 0.3, 1];

function KeyItemCard({ item, onOpen, reduceMotion }) {
  return (
    <motion.button
      type="button"
      className="key-item-card"
      onClick={onOpen}
      whileHover={reduceMotion ? undefined : { y: -7 }}
      whileTap={reduceMotion ? undefined : { scale: 0.985 }}
      transition={{ duration: 0.25, ease: premiumEase }}
      aria-label={`View details for ${item.name}`}
    >
      <span className="key-item-card__visual">
        <span className="key-item-card__halo" aria-hidden="true" />
        <img
          src={item.image}
          alt={item.name}
          loading="lazy"
          onError={(event) => {
            event.currentTarget.style.opacity = "0";
          }}
        />
        <span className="key-item-card__symbol" aria-hidden="true">
          {item.symbol}
        </span>
      </span>

      <span className="key-item-card__body">
        <span className="key-item-card__type">
          {item.category}
        </span>
        <strong>{item.name}</strong>
        <span className="key-item-card__line" aria-hidden="true" />
        <span className="key-item-card__action">
          View Key Item <i aria-hidden="true">→</i>
        </span>
      </span>

      <span className="key-item-card__border" aria-hidden="true" />
    </motion.button>
  );
}

function KeyItemModal({ item, onClose, reduceMotion }) {
  useEffect(() => {
    if (!item) return undefined;

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
  }, [item, onClose]);

  return (
    <AnimatePresence>
      {item && (
        <motion.div
          className="key-item-modal"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: reduceMotion ? 0.01 : 0.22 }}
          role="dialog"
          aria-modal="true"
          aria-labelledby="key-item-modal-title"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) onClose();
          }}
        >
          <motion.div
            className="key-item-modal__panel"
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
              className="key-item-modal__close"
              type="button"
              onClick={onClose}
              aria-label="Close item details"
            >
              ×
            </button>

            <div className="key-item-modal__image-wrap">
              <span className="key-item-modal__glow" aria-hidden="true" />
              <span className="key-item-modal__symbol" aria-hidden="true">
                {item.symbol}
              </span>
              <img src={item.image} alt={item.name} />
            </div>

            <div className="key-item-modal__content">
              <span>{item.category}</span>
              <h2 id="key-item-modal-title">{item.name}</h2>
              <div className="key-item-modal__decoration" aria-hidden="true">
                <i />
                <b />
                <i />
              </div>
              <p>{item.description}</p>

              <dl>
                <div>
                  <dt>Collection</dt>
                  <dd>Key Items</dd>
                </div>
                <div>
                  <dt>Item Type</dt>
                  <dd>{item.category}</dd>
                </div>
              </dl>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function KeyItems() {
  const reduceMotion = useReducedMotion();
  const [searchTerm, setSearchTerm] = useState("");
  const [activeCategory, setActiveCategory] = useState("all");
 const [selectedItem, setSelectedItem] = useState(null);

 const filteredItems = useMemo(() => {
    const search = searchTerm.trim().toLowerCase();

    return keyItemsData.filter((item) => {
      const matchesCategory = activeCategory === "all" || item.category === activeCategory;
      const matchesSearch =
        !search ||
        [item.name, item.category, item.description]
          .join(" ")
          .toLowerCase()
          .includes(search);

      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchTerm]);

  const hasActiveFilters = searchTerm.trim() !== "" || activeCategory !== "all";

  const resetFilters = () => {
    setSearchTerm("");
    setActiveCategory("all");
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
    <main className="key-items-page">
      <motion.section
        className="key-items-page__hero"
        initial={{ opacity: 0, scale: reduceMotion ? 1 : 1.025 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: reduceMotion ? 0.01 : 0.9,
          ease: premiumEase,
        }}
      >
        <motion.div
          className="key-items-page__hero-image"
          initial={{ scale: reduceMotion ? 1 : 1.07 }}
          animate={{ scale: 1 }}
          transition={{
            duration: reduceMotion ? 0.01 : 1.35,
            ease: premiumEase,
          }}
          aria-hidden="true"
        />
        <div className="key-items-page__hero-overlay" aria-hidden="true" />
        <div className="key-items-page__hero-glow" aria-hidden="true" />
        <div className="key-items-page__hero-grain" aria-hidden="true" />

        <motion.div
          className="key-items-page__hero-content"
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
            <Link to="/#items" className="key-items-page__back">
              <span aria-hidden="true">←</span> Items
            </Link>
          </motion.div>
          <motion.span variants={heroItemVariants}>Sacred Relics</motion.span>
          <motion.h1 variants={heroItemVariants}>Key Items</motion.h1>
          <motion.p variants={heroItemVariants}>
            Discover quest relics, captain spirits, Skandhas and mysterious objects that unlock hidden paths throughout the journey.
          </motion.p>
          <motion.div
            className="key-items-page__hero-decoration"
            variants={heroItemVariants}
            aria-hidden="true"
          >
            <span />
            <i />
            <span />
          </motion.div>
        </motion.div>
      </motion.section>

      <section className="key-items-page__content">
        <motion.header
          className="key-items-page__intro"
          initial={{ opacity: 0, y: reduceMotion ? 0 : 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{
            duration: reduceMotion ? 0.01 : 0.62,
            ease: premiumEase,
          }}
        >
          <span>Key Item Compendium</span>
          <h2>Relics of the Journey</h2>
          <p>
            Search the complete archive or filter by Skandhas, relics, essences, quest items and captain spirits.
          </p>
        </motion.header>

        <motion.div
          className="key-items-page__controls"
          initial={{ opacity: 0, y: reduceMotion ? 0 : 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{
            duration: reduceMotion ? 0.01 : 0.58,
            ease: premiumEase,
          }}
        >
          <div className="key-items-page__toolbar">
            <div className="key-items-page__search">
              <span className="key-items-page__search-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none">
                  <circle cx="11" cy="11" r="6.5" />
                  <path d="m16 16 4 4" />
                </svg>
              </span>
              <input
                type="search"
                value={searchTerm}
                onChange={(event) => setSearchTerm(event.target.value)}
                placeholder="Search key items, relics or spirits..."
                aria-label="Search key items"
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

            <div className="key-items-page__toolbar-right">
              <AnimatePresence>
                {hasActiveFilters && (
                  <motion.button
                    type="button"
                    className="key-items-page__reset"
                    onClick={resetFilters}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                  >
                    Reset Filters
                  </motion.button>
                )}
              </AnimatePresence>

              <div className="key-items-page__count">
                <AnimatePresence mode="wait" initial={false}>
                  <motion.strong
                    key={filteredItems.length}
                    initial={{ opacity: 0, y: reduceMotion ? 0 : -6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: reduceMotion ? 0 : 6 }}
                  >
                    {filteredItems.length}
                  </motion.strong>
                </AnimatePresence>
                <span>Key Items</span>
              </div>
            </div>
          </div>

          <div className="key-items-page__filter-section">
            <span className="key-items-page__filter-heading">
              Filter by Key Item Type
            </span>
            <div className="key-items-page__filters">
              {keyItemCategories.map((category) => {
                const isActive = activeCategory === category.id;

                return (
                  <motion.button
                    type="button"
                    key={category.id}
                    className={isActive ? "active" : ""}
                    onClick={() => setActiveCategory(category.id)}
                    whileHover={reduceMotion ? undefined : { y: -2 }}
                    whileTap={reduceMotion ? undefined : { scale: 0.97 }}
                  >
                    {isActive && (
                      <motion.span
                        className="key-items-page__filter-active"
                        layoutId="items-active-type"
                        transition={{
                          duration: reduceMotion ? 0.01 : 0.28,
                          ease: premiumEase,
                        }}
                      />
                    )}
                    <span className="key-items-page__filter-label">
                      {category.label}
                    </span>
                  </motion.button>
                );
              })}
            </div>
          </div>
        </motion.div>

        <AnimatePresence mode="wait" initial={false}>
          {filteredItems.length > 0 ? (
            <motion.div
              className="key-items-page__grid"
              key={`${activeCategory}-${searchTerm.trim()}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: reduceMotion ? 0.01 : 0.18 }}
            >
              {filteredItems.map((item, index) => (
                <motion.div
                  className="key-items-page__card-motion"
                  key={item.id}
                  variants={cardVariants}
                  initial="hidden"
                  whileInView="visible"
                  exit="exit"
                  viewport={{ once: true, amount: 0.08 }}
                  transition={{
                    delay: reduceMotion ? 0 : Math.min(index * 0.025, 0.2),
                  }}
                >
                  <KeyItemCard
                    item={item}
                    onOpen={() => setSelectedItem(item)}
                    reduceMotion={reduceMotion}
                  />
                </motion.div>
              ))}
            </motion.div>
          ) : (
            <motion.div
              className="key-items-page__empty"
              key="empty-items"
              initial={{ opacity: 0, y: reduceMotion ? 0 : 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
            >
              <span aria-hidden="true">丹</span>
              <h2>No items found</h2>
              <p>Change the search term or choose another item type.</p>
              <button type="button" onClick={resetFilters}>
                Reset Filters
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </section>

      <KeyItemModal
        item={selectedItem}
        onClose={() => setSelectedItem(null)}
        reduceMotion={reduceMotion}
      />
    </main>
  );
}

export default KeyItems;

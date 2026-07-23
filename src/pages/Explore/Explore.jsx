import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import "./Explore.css";

const exploreCategories = [
  {
    id: 1,
    number: "01",
    title: "General Information",
    description:
      "Understand combat, Keeper's Shrines, attributes, Four Banes and the endings of the journey.",
    image: "/images/explore/general.jpg",
    path: "/explore/general",
  },
  {
    id: 2,
    number: "02",
    title: "Characters",
    description:
      "Discover the Destined One, Sun Wukong and the mysterious figures connected to his journey.",
    image: "/images/explore/characters.jpg",
    path: "/explore/characters",
  },
  {
    id: 3,
    number: "03",
    title: "Enemies",
    description:
      "Study Yaoguai Kings, chiefs and dangerous creatures encountered across every region.",
    image: "/images/explore/enemies.jpg",
    path: "/explore/enemies",
  },
  {
    id: 4,
    number: "04",
    title: "Locations",
    description:
      "Travel through Black Wind Mountain, Yellow Wind Ridge, the New West and Mount Huaguo.",
    image: "/images/explore/locations.jpg",
    path: "/explore/locations",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.14,
    },
  },
};

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 60,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

function ArrowIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
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

function Explore() {
  return (
    <motion.section
      id="explore"
      className="explore-section"
      initial={{
        opacity: 0,
        y: 90,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: false,
        amount: 0.04,
      }}
      transition={{
        duration: 1.15,
        ease: [0.16, 1, 0.3, 1],
      }}
    >
      <motion.div
        className="explore-background"
        initial={{
          opacity: 0,
          scale: 1.1,
          filter: "blur(8px)",
        }}
        whileInView={{
          opacity: 1,
          scale: 1,
          filter: "blur(0px)",
        }}
        viewport={{
          once: false,
          amount: 0.02,
        }}
        transition={{
          duration: 1.55,
          ease: [0.16, 1, 0.3, 1],
        }}
        aria-hidden="true"
      >
        <div className="explore-background-image" />
        <div className="explore-background-overlay" />
        <div className="explore-background-vignette" />
      </motion.div>

      <div
        className="explore-top-transition"
        aria-hidden="true"
      />

      <div className="explore-section-overlay" />

      <div className="explore-container">
        <motion.header
          className="explore-heading"
          initial={{
            opacity: 0,
            y: 45,
            filter: "blur(5px)",
          }}
          whileInView={{
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
          }}
          viewport={{
            once: false,
            amount: 0.22,
          }}
          transition={{
            duration: 0.95,
            delay: 0.08,
            ease: [0.16, 1, 0.3, 1],
          }}
        >
          <span className="explore-eyebrow">
            The Journey to the West
          </span>

          <h1>Explore</h1>

          <div className="explore-title-decoration">
            <span />
            <i />
            <span />
          </div>

          <p>
            Enter a world shaped by ancient myths,
            dangerous Yaoguais and forgotten legends.
            Discover its warriors, creatures, locations
            and hidden mysteries.
          </p>
        </motion.header>

        <motion.div
          className="explore-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: false,
            amount: 0.12,
          }}
        >
          {exploreCategories.map((category) => (
            <motion.article
              className="explore-card"
              variants={cardVariants}
              key={category.id}
            >
              <Link
                to={category.path}
                className="explore-card-link"
              >
                <img
                  src={category.image}
                  alt={category.title}
                  className="explore-card-image"
                />

                <div className="explore-card-overlay" />
                <div className="explore-card-gradient" />

                <span className="explore-card-number">
                  {category.number}
                </span>

                <div className="explore-card-content">
                  <span className="explore-card-label">
                    Explore Section
                  </span>

                  <h2>{category.title}</h2>

                  <p>{category.description}</p>

                  <div className="explore-card-action">
                    <span>Discover</span>
                    <ArrowIcon />
                  </div>
                </div>

                <div className="explore-card-border" />
              </Link>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}

export default Explore;

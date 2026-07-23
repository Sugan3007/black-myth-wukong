import {
  useEffect,
  useRef,
  useState,
} from "react";

import {
  AnimatePresence,
  motion,
  useScroll,
  useTransform,
} from "framer-motion";

import { useNavigate } from "react-router-dom";

import Navbar from "../../components/layout/Navbar/Navbar";

import "./GeneralInformation.css";

const navigationSections = [
  {
    id: "combat",
    number: "01",
    label: "Combat",
  },
  {
    id: "keepers-shrine",
    number: "02",
    label: "Keeper's Shrine",
  },
  {
    id: "stats-attributes",
    number: "03",
    label: "Stats and Attributes",
  },
  {
    id: "four-banes",
    number: "04",
    label: "Four Banes",
  },
  {
    id: "ending",
    number: "05",
    label: "Ending",
  },
];

const stats = [
  {
    name: "Health",
    shortName: "HP",
    description:
      "Determines the Destined One's total vitality and ability to survive enemy attacks.",
  },
  {
    name: "Mana",
    shortName: "MP",
    description:
      "Consumed when using spells, transformations and other mystical abilities.",
  },
  {
    name: "Stamina",
    shortName: "SP",
    description:
      "Used for dodging, sprinting and performing repeated combat actions.",
  },
  {
    name: "Attack",
    shortName: "ATK",
    description:
      "Influences the physical damage dealt by basic attacks and staff techniques.",
  },
  {
    name: "Defense",
    shortName: "DEF",
    description:
      "Reduces damage received from direct physical attacks.",
  },
  {
    name: "Critical Chance",
    shortName: "CRIT",
    description:
      "Affects the likelihood of dealing increased damage with critical strikes.",
  },
];

const banes = [
  {
    number: "I",
    title: "Burn",
    symbol: "火",
    description:
      "A fire-based condition that inflicts damage over time while the effect remains active.",
  },
  {
    number: "II",
    title: "Frost",
    symbol: "寒",
    description:
      "A cold-based condition that can slow movement and disrupt the rhythm of combat.",
  },
  {
    number: "III",
    title: "Poison",
    symbol: "毒",
    description:
      "A lingering condition that gradually reduces health over an extended duration.",
  },
  {
    number: "IV",
    title: "Shock",
    symbol: "雷",
    description:
      "An electrical condition associated with increased danger and incoming damage.",
  },
];

const shrineActivities = [
  {
    id: "return-of-rivals",
    number: "01",
    title: "Return of Rivals",
    subtitle: "Challenge Former Adversaries",
    image:
      "/images/general/return-of-rivals.jpg",
    description:
      "Face previously encountered opponents once again and test improved builds, spells and combat strategies.",
    features: [
      "Replay selected rival encounters",
      "Test alternative equipment builds",
      "Practice dodging and spell timing",
      "Challenge stronger versions of enemies",
    ],
  },
  {
    id: "gauntlet-of-legends",
    number: "02",
    title: "Gauntlet of Legends",
    subtitle: "Endure Consecutive Battles",
    image:
      "/images/general/gauntlet-of-legends.jpg",
    description:
      "Enter a sequence of demanding encounters where preparation, resource control and combat mastery become essential.",
    features: [
      "Fight multiple opponents in sequence",
      "Limited recovery between encounters",
      "Increasing combat difficulty",
      "Special rewards for completion",
    ],
  },
];

const sectionReveal = {
  hidden: {
    opacity: 0,
    y: 80,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.9,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

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
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

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

function GeneralInformation() {
  const pageRef = useRef(null);
  const navigate = useNavigate();
  useEffect(() => {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "auto",
  });
}, []);

  const [activeSection, setActiveSection] =
    useState("combat");

  const [
    selectedShrineActivity,
    setSelectedShrineActivity,
  ] = useState(null);

  const { scrollYProgress } = useScroll({
    target: pageRef,
    offset: ["start start", "end end"],
  });

  const heroOpacity = useTransform(
    scrollYProgress,
    [0, 0.08, 0.15],
    [1, 1, 0]
  );

  const heroScale = useTransform(
    scrollYProgress,
    [0, 0.15],
    [1, 1.08]
  );

  const heroY = useTransform(
    scrollYProgress,
    [0, 0.15],
    [0, 100]
  );

  const backgroundY = useTransform(
    scrollYProgress,
    [0, 1],
    ["0%", "18%"]
  );

  useEffect(() => {
    const sections = navigationSections
      .map((section) =>
        document.getElementById(section.id)
      )
      .filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSection = entries
          .filter(
            (entry) =>
              entry.isIntersecting
          )
          .sort(
            (first, second) =>
              second.intersectionRatio -
              first.intersectionRatio
          )[0];

        if (visibleSection) {
          setActiveSection(
            visibleSection.target.id
          );
        }
      },
      {
        rootMargin:
          "-30% 0px -55% 0px",
        threshold: [
          0.1,
          0.25,
          0.5,
        ],
      }
    );

    sections.forEach((section) => {
      observer.observe(section);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow =
      selectedShrineActivity
        ? "hidden"
        : "";

    return () => {
      document.body.style.overflow =
        "";
    };
  }, [selectedShrineActivity]);

  const scrollToSection = (sectionId) => {
    const section =
      document.getElementById(sectionId);

    section?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <main
      ref={pageRef}
      className="general-page"
    >
      <Navbar />

      {/* Fixed page background */}
      <motion.div
        className="general-page-background"
        style={{
          y: backgroundY,
        }}
        aria-hidden="true"
      >
        <div className="general-page-background-image" />
        <div className="general-page-background-overlay" />
        <div className="general-page-background-texture" />
      </motion.div>

      {/* Page navigation */}
      <aside
        className="general-side-navigation"
        aria-label="General information sections"
      >
        <div className="general-side-line" />

        {navigationSections.map(
          (section) => (
            <button
              type="button"
              className={`general-side-link ${
                activeSection === section.id
                  ? "general-side-link--active"
                  : ""
              }`}
              onClick={() =>
                scrollToSection(section.id)
              }
              key={section.id}
            >
              <span className="general-side-number">
                {section.number}
              </span>

              <span className="general-side-label">
                {section.label}
              </span>
            </button>
          )
        )}
      </aside>

      {/* Hero */}
      <section className="general-hero">
        <motion.div
          className="general-hero-content"
          style={{
            opacity: heroOpacity,
            scale: heroScale,
            y: heroY,
          }}
        >
          <motion.button
            type="button"
            className="general-back-button"
            onClick={() => navigate("/#explore")}
            initial={{
              opacity: 0,
              x: -30,
            }}
            animate={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: 0.7,
              delay: 0.25,
            }}
          >
            <span aria-hidden="true">←</span>
            Return to Explore
          </motion.button>

          <motion.span
            className="general-hero-eyebrow"
            initial={{
              opacity: 0,
              y: 30,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.8,
              delay: 0.35,
            }}
          >
            Explore the Foundations
          </motion.span>

          <motion.h1
            initial={{
              opacity: 0,
              y: 60,
              filter: "blur(10px)",
            }}
            animate={{
              opacity: 1,
              y: 0,
              filter: "blur(0px)",
            }}
            transition={{
              duration: 1.2,
              delay: 0.45,
              ease: [0.16, 1, 0.3, 1],
            }}
          >
            General
            <span>Information</span>
          </motion.h1>

          <motion.div
            className="general-hero-decoration"
            initial={{
              opacity: 0,
              scaleX: 0,
            }}
            animate={{
              opacity: 1,
              scaleX: 1,
            }}
            transition={{
              duration: 1,
              delay: 0.9,
            }}
          >
            <span />
            <i />
            <span />
          </motion.div>

          <motion.p
            initial={{
              opacity: 0,
              y: 25,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.8,
              delay: 1,
            }}
          >
            Understand the essential systems
            behind the Destined One&apos;s
            journey—from combat and attributes
            to Keeper&apos;s Shrines, elemental
            afflictions and the path toward the
            final ending.
          </motion.p>
        </motion.div>

        <div className="general-hero-scroll">
          <span>Begin the journey</span>
          <i />
        </div>
      </section>

      {/* Combat */}
      <section
        id="combat"
        className="general-content-section combat-section"
      >
        <div className="general-section-container general-split-layout">
          <motion.div
            className="general-section-image-wrapper"
            variants={sectionReveal}
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
              amount: 0.25,
            }}
          >
            <img
              src="/images/general/combat.jpg"
              alt="Black Myth Wukong combat"
              className="general-section-image"
            />

            <div className="general-image-overlay" />

            <span className="general-image-number">
              01
            </span>
          </motion.div>

          <motion.div
            className="general-section-copy"
            initial={{
              opacity: 0,
              x: 80,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
              amount: 0.3,
            }}
            transition={{
              duration: 0.9,
              ease: [0.16, 1, 0.3, 1],
            }}
          >
            <span className="general-section-kicker">
              Master the Staff
            </span>

            <h2>Combat</h2>

            <div className="general-small-decoration">
              <span />
              <i />
            </div>

            <p>
              Combat combines staff attacks,
              precise dodging, charged strikes,
              spells, transformations and spirit
              abilities. Success depends on
              reading enemy movements and
              responding with the correct
              technique.
            </p>

            <p>
              Different stances and abilities
              provide multiple ways to control
              distance, interrupt opponents and
              exploit openings during demanding
              encounters.
            </p>

            <div className="combat-techniques">
              <article>
                <span>01</span>
                <h3>Staff Stances</h3>
                <p>
                  Adapt attacks and charged
                  techniques to different combat
                  situations.
                </p>
              </article>

              <article>
                <span>02</span>
                <h3>Perfect Dodge</h3>
                <p>
                  Avoid attacks at the final
                  moment and create opportunities
                  to counter.
                </p>
              </article>

              <article>
                <span>03</span>
                <h3>Spells</h3>
                <p>
                  Control enemies, enhance combat
                  and alter the flow of battle.
                </p>
              </article>

              <article>
                <span>04</span>
                <h3>Transformations</h3>
                <p>
                  Assume powerful forms with
                  unique attacks and abilities.
                </p>
              </article>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Keeper's Shrine */}
      <section
        id="keepers-shrine"
        className="general-content-section shrine-section"
      >
        <div className="general-section-container">
          <motion.header
            className="general-centered-heading"
            variants={sectionReveal}
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
              amount: 0.35,
            }}
          >
            <span className="general-section-kicker">
              Rest and Preparation
            </span>

            <h2>Keeper&apos;s Shrine</h2>

            <div className="general-centered-decoration">
              <span />
              <i />
              <span />
            </div>

            <p>
              Keeper&apos;s Shrines serve as
              important resting and preparation
              points throughout the journey.
              They allow the player to recover,
              travel and manage essential
              progression systems.
            </p>
          </motion.header>

          <motion.div
            className="shrine-main-panel"
            initial={{
              opacity: 0,
              scale: 0.94,
            }}
            whileInView={{
              opacity: 1,
              scale: 1,
            }}
            viewport={{
              once: true,
              amount: 0.25,
            }}
            transition={{
              duration: 1,
              ease: [0.16, 1, 0.3, 1],
            }}
          >
            <img
              src="/images/general/shrine.jpg"
              alt="Keeper's Shrine"
            />

            <div className="shrine-main-overlay" />

            <div className="shrine-main-content">
              <span>
                Sanctuary of the Keeper
              </span>

              <h3>
                Prepare for the road ahead
              </h3>

              <p>
                Rest, organize equipment,
                configure abilities and return
                to previously discovered
                locations.
              </p>
            </div>
          </motion.div>

          <div className="shrine-subheading">
            <span>Challenge Modes</span>
            <h3>
              Trials available through the
              Keeper&apos;s Shrine
            </h3>
          </div>

          <motion.div
            className="shrine-activity-grid"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
              amount: 0.2,
            }}
          >
            {shrineActivities.map(
              (activity) => (
                <motion.article
                  className="shrine-activity-card"
                  variants={sectionReveal}
                  key={activity.id}
                >
                  <button
                    type="button"
                    className="shrine-activity-button"
                    onClick={() =>
                      setSelectedShrineActivity(
                        activity
                      )
                    }
                  >
                    <img
                      src={activity.image}
                      alt={activity.title}
                    />

                    <div className="shrine-card-overlay" />

                    <span className="shrine-card-number">
                      {activity.number}
                    </span>

                    <div className="shrine-card-content">
                      <span>
                        {activity.subtitle}
                      </span>

                      <h3>
                        {activity.title}
                      </h3>

                      <p>
                        {activity.description}
                      </p>

                      <div className="shrine-card-action">
                        View challenge
                        <ArrowIcon />
                      </div>
                    </div>
                  </button>
                </motion.article>
              )
            )}
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section
        id="stats-attributes"
        className="general-content-section stats-section"
      >
        <div className="general-section-container">
          <motion.header
            className="general-centered-heading"
            variants={sectionReveal}
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
              amount: 0.35,
            }}
          >
            <span className="general-section-kicker">
              Develop the Destined One
            </span>

            <h2>
              Stats and Attributes
            </h2>

            <div className="general-centered-decoration">
              <span />
              <i />
              <span />
            </div>

            <p>
              Attributes define survivability,
              resource limits and combat
              effectiveness. Equipment,
              upgrades and progression choices
              can alter these values.
            </p>
          </motion.header>

          <motion.div
            className="stats-layout"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
              amount: 0.15,
            }}
          >
            <motion.div
              className="stats-character-panel"
              variants={sectionReveal}
            >
              <img
                src="/images/general/stats.jpg"
                alt="Destined One attributes"
              />

              <div className="stats-character-overlay" />

              <div className="stats-character-copy">
                <span>
                  Character Development
                </span>

                <h3>
                  Shape your combat style
                </h3>
              </div>
            </motion.div>

            <div className="stats-grid">
              {stats.map(
                (stat, index) => (
                  <motion.article
                    className="stat-card"
                    variants={sectionReveal}
                    key={stat.name}
                  >
                    <span className="stat-index">
                      {String(index + 1).padStart(
                        2,
                        "0"
                      )}
                    </span>

                    <span className="stat-short-name">
                      {stat.shortName}
                    </span>

                    <h3>{stat.name}</h3>

                    <p>
                      {stat.description}
                    </p>
                  </motion.article>
                )
              )}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Four Banes */}
      <section
        id="four-banes"
        className="general-content-section banes-section"
      >
        <div className="general-section-container">
          <motion.header
            className="general-centered-heading"
            variants={sectionReveal}
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
              amount: 0.35,
            }}
          >
            <span className="general-section-kicker">
              Elemental Afflictions
            </span>

            <h2>The Four Banes</h2>

            <div className="general-centered-decoration">
              <span />
              <i />
              <span />
            </div>

            <p>
              Certain attacks inflict elemental
              conditions known as Banes.
              Understanding their effects and
              preparing the correct resistance
              can greatly improve survival.
            </p>
          </motion.header>

          <motion.div
            className="banes-grid"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
              amount: 0.2,
            }}
          >
            {banes.map((bane) => (
              <motion.article
                className={`bane-card bane-card--${bane.title.toLowerCase()}`}
                variants={sectionReveal}
                key={bane.title}
              >
                <span className="bane-number">
                  {bane.number}
                </span>

                <span className="bane-symbol">
                  {bane.symbol}
                </span>

                <div className="bane-card-line" />

                <h3>{bane.title}</h3>

                <p>
                  {bane.description}
                </p>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Ending */}
      <section
        id="ending"
        className="general-content-section ending-section"
      >
        <motion.div
          className="ending-background"
          initial={{
            opacity: 0,
            scale: 1.1,
          }}
          whileInView={{
            opacity: 1,
            scale: 1,
          }}
          viewport={{
            once: true,
            amount: 0.2,
          }}
          transition={{
            duration: 1.4,
          }}
        >
          <img
            src="/images/general/ending.jpg"
            alt=""
            aria-hidden="true"
          />

          <div className="ending-background-overlay" />
        </motion.div>

        <motion.div
          className="ending-content"
          variants={sectionReveal}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.4,
          }}
        >
          <span className="general-section-kicker">
            The Journey&apos;s Conclusion
          </span>

          <h2>Ending</h2>

          <div className="general-centered-decoration">
            <span />
            <i />
            <span />
          </div>

          <p>
            The conclusion of the Destined
            One&apos;s journey is shaped by the
            trials completed and the secrets
            uncovered along the way.
          </p>

          <p>
            Exploring optional encounters and
            understanding the deeper history of
            Sun Wukong may reveal a different
            perspective on the final chapter.
          </p>

          <button
  type="button"
  className="ending-return-button"
  onClick={() =>
    navigate(
      "/explore/general/ending"
    )
  }
>

            Explore the Journey
           <span aria-hidden="true">→</span>
</button>
        </motion.div>
      </section>

      {/* Keeper activity modal */}
      <AnimatePresence>
        {selectedShrineActivity && (
          <motion.div
            className="shrine-modal"
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            exit={{
              opacity: 0,
            }}
            onClick={() =>
              setSelectedShrineActivity(
                null
              )
            }
          >
            <motion.article
              className="shrine-modal-panel"
              initial={{
                opacity: 0,
                y: 80,
                scale: 0.92,
              }}
              animate={{
                opacity: 1,
                y: 0,
                scale: 1,
              }}
              exit={{
                opacity: 0,
                y: 50,
                scale: 0.95,
              }}
              transition={{
                duration: 0.45,
                ease: [0.16, 1, 0.3, 1],
              }}
              onClick={(event) =>
                event.stopPropagation()
              }
            >
              <button
                type="button"
                className="shrine-modal-close"
                aria-label="Close challenge details"
                onClick={() =>
                  setSelectedShrineActivity(
                    null
                  )
                }
              >
                <CloseIcon />
              </button>

              <div className="shrine-modal-image">
                <img
                  src={
                    selectedShrineActivity.image
                  }
                  alt={
                    selectedShrineActivity.title
                  }
                />

                <div />
              </div>

              <div className="shrine-modal-content">
                <span>
                  {
                    selectedShrineActivity.subtitle
                  }
                </span>

                <h2>
                  {
                    selectedShrineActivity.title
                  }
                </h2>

                <p>
                  {
                    selectedShrineActivity.description
                  }
                </p>

                <ul>
                  {selectedShrineActivity.features.map(
                    (feature) => (
                      <li key={feature}>
                        <span />
                        {feature}
                      </li>
                    )
                  )}
                </ul>
              </div>
            </motion.article>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}

export default GeneralInformation;
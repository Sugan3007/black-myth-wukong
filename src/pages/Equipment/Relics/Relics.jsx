import {
  AnimatePresence,
  motion,
  useReducedMotion,
} from "framer-motion";

import {
  useEffect,
  useRef,
  useState,
} from "react";

import { Link } from "react-router-dom";

import "./Relics.css";

const relics = [
  {
    id: "craving-eyes",
    number: "01",
    chapter: "Chapter One",
    name: "Craving Eyes",
    subtitle: "The Sense of Sight",
    location: "Black Wind Mountain",
    place: "Black Wind Mountain",
    type: "Relic of Sight",
    rarity: "Legendary",
    element: "Perception",
    powerRating: "★★★★★",
    unlockCondition:
      "Complete Chapter One and overcome the final encounter of Black Wind Mountain.",
    image:
      "/images/equipment/relics/craving-eyes.png",
    background:
      "/images/equipment/relics/craving-eyes-bg.jpg",

    shortDescription:
      "A relic formed from the Great Sage's sight, granting heightened perception and sharper combat awareness.",

    fullDescription:
      "Craving Eyes embodies the power of sight and perception. Its awakened force allows the Destined One to observe openings, react to danger and strengthen techniques connected to focus, precision and critical attacks.",

    power:
      "Enhances visual perception, combat awareness and attacks that depend on accurately reading enemy movement.",

    passive:
      "Improves awareness during combat and strengthens selected perception-based bonuses.",

    active:
      "Allows one of several relic talents to be selected, changing how the Destined One gains advantage from precise attacks.",

    effects: [
      {
        name: "Opportune Watcher",
        description:
          "Improves offensive effectiveness when attacks are timed against vulnerable enemies.",
      },
      {
        name: "Eagle Eye",
        description:
          "Supports critical and precision-focused combat styles.",
      },
      {
        name: "Keen Observation",
        description:
          "Strengthens awareness-oriented combat bonuses.",
      },
    ],

    lore:
      "Sight was among the first fragments of the Great Sage's nature to answer the Destined One's journey. It represents the urge to observe, seek and understand the world.",

    howToUse:
      "Choose the talent that best matches your preferred stance, critical build or focus-generation strategy.",

    recommendedBuilds: [
      "Critical-hit build",
      "Focus generation build",
      "Fast stance switching",
    ],
  },

  {
    id: "fuming-ears",
    number: "02",
    chapter: "Chapter Two",
    name: "Fuming Ears",
    subtitle: "The Sense of Hearing",
    location: "Yellow Wind Ridge",
    place: "Yellow Wind Ridge",
    type: "Relic of Hearing",
    rarity: "Legendary",
    element: "Awareness",
    powerRating: "★★★★★",
    unlockCondition:
      "Complete Chapter Two and defeat the ruler of Yellow Wind Ridge.",
    image:
      "/images/equipment/relics/fuming-ears.png",
    background:
      "/images/equipment/relics/fuming-ears-bg.jpg",

    shortDescription:
      "A relic of hearing that sharpens response, defensive timing and awareness of danger.",

    fullDescription:
      "Fuming Ears carries the Great Sage's extraordinary hearing. It represents the ability to recognize threats before they strike and rewards defensive timing, evasion and controlled retaliation.",

    power:
      "Improves defensive awareness and enhances bonuses connected to dodging, countering and responding to enemy attacks.",

    passive:
      "Supports evasive movement and defensive reactions during difficult encounters.",

    active:
      "Unlocks a selectable talent that modifies how defensive actions or perfect reactions benefit the Destined One.",

    effects: [
      {
        name: "Sound as a Bell",
        description:
          "Strengthens defensive responses when attacks are anticipated correctly.",
      },
      {
        name: "Whistling Wind",
        description:
          "Supports mobility and evasive combat.",
      },
      {
        name: "Echoing Strike",
        description:
          "Rewards immediate retaliation after avoiding danger.",
      },
    ],

    lore:
      "The Great Sage could hear changes in wind, movement and intent. This relic preserves that instinct as an inner warning against approaching danger.",

    howToUse:
      "Best used in builds that rely on perfect dodge timing, mobility and rapid retaliation.",

    recommendedBuilds: [
      "Perfect-dodge build",
      "Counterattack build",
      "High-mobility build",
    ],
  },

  {
    id: "hubris-nose",
    number: "03",
    chapter: "Chapter Three",
    name: "Hubris Nose",
    subtitle: "The Sense of Smell",
    location: "The New West",
    place: "The New West",
    type: "Relic of Scent",
    rarity: "Legendary",
    element: "Instinct",
    powerRating: "★★★★★",
    unlockCondition:
      "Complete Chapter Three and escape the illusions of the New West.",
    image:
      "/images/equipment/relics/hubris-nose.png",
    background:
      "/images/equipment/relics/hubris-nose-bg.jpg",

    shortDescription:
      "An instinctive relic that recognizes weakness, opportunity and hidden power.",

    fullDescription:
      "Hubris Nose represents instinct and the ability to sense what cannot be seen. Its power supports transformations, spell combinations and combat styles that take advantage of enemy conditions.",

    power:
      "Strengthens instinctive combat choices and bonuses linked to spells, transformations and enemy conditions.",

    passive:
      "Provides additional value when combining attacks with transformations or mystical techniques.",

    active:
      "Allows a relic talent to be selected to support a preferred magical or transformation-oriented playstyle.",

    effects: [
      {
        name: "In One Breath",
        description:
          "Supports sustained offence following the use of a powerful technique.",
      },
      {
        name: "Lingering Aroma",
        description:
          "Extends the value of selected combat effects.",
      },
      {
        name: "Instinctive Change",
        description:
          "Improves transformation-focused strategies.",
      },
    ],

    lore:
      "Smell guides instinct before thought. The relic reflects the Great Sage's ability to recognize deception, danger and opportunity without hesitation.",

    howToUse:
      "Pair it with spell-heavy or transformation-heavy builds that repeatedly apply combat effects.",

    recommendedBuilds: [
      "Transformation build",
      "Spell combination build",
      "Status-effect build",
    ],
  },

  {
    id: "envious-tongue",
    number: "04",
    chapter: "Chapter Four",
    name: "Envious Tongue",
    subtitle: "The Sense of Taste",
    location: "The Webbed Hollow",
    place: "The Webbed Hollow",
    type: "Relic of Taste",
    rarity: "Legendary",
    element: "Consumption",
    powerRating: "★★★★★",
    unlockCondition:
      "Complete Chapter Four and break free from the Webbed Hollow.",
    image:
      "/images/equipment/relics/envious-tongue.png",
    background:
      "/images/equipment/relics/envious-tongue-bg.jpg",

    shortDescription:
      "A relic connected to taste, consumption and the strengthening of temporary effects.",

    fullDescription:
      "Envious Tongue channels the sense of taste into combat power. It supports medicine, drinks, consumable bonuses and techniques that depend on temporary enhancement.",

    power:
      "Improves selected temporary bonuses and supports builds that rely on medicine, drinks and combat enhancements.",

    passive:
      "Makes preparation and temporary enhancements more valuable during difficult encounters.",

    active:
      "Unlocks a selectable talent that strengthens a chosen category of temporary combat benefit.",

    effects: [
      {
        name: "Refreshing Taste",
        description:
          "Improves selected benefits gained from drinking or recovery.",
      },
      {
        name: "Lingering Flavor",
        description:
          "Supports longer-lasting temporary effects.",
      },
      {
        name: "Bitter Reward",
        description:
          "Provides offensive value from carefully managed consumables.",
      },
    ],

    lore:
      "Taste represents desire and attachment. The relic turns that desire into disciplined preparation, allowing temporary strength to become decisive power.",

    howToUse:
      "Use before major encounters when your build relies on medicines, drinks or temporary enhancements.",

    recommendedBuilds: [
      "Medicine build",
      "Drink-effect build",
      "Boss preparation build",
    ],
  },

  {
    id: "grieved-body",
    number: "05",
    chapter: "Chapter Five",
    name: "Grieved Body",
    subtitle: "The Sense of Touch",
    location: "Flaming Mountains",
    place: "Flaming Mountains",
    type: "Relic of Touch",
    rarity: "Legendary",
    element: "Endurance",
    powerRating: "★★★★★",
    unlockCondition:
      "Complete Chapter Five and survive the final conflict of the Flaming Mountains.",
    image:
      "/images/equipment/relics/grieved-body.png",
    background:
      "/images/equipment/relics/grieved-body-bg.jpg",

    shortDescription:
      "A relic of physical sensation that strengthens endurance, defence and close-range combat.",

    fullDescription:
      "Grieved Body contains the memory of pain, resilience and physical struggle. It supports defensive builds and techniques that allow the Destined One to survive pressure while remaining dangerous at close range.",

    power:
      "Strengthens resilience and supports bonuses related to damage reduction, defence and physical combat.",

    passive:
      "Improves survivability during prolonged or high-pressure encounters.",

    active:
      "Allows a defensive or endurance-focused relic talent to be selected.",

    effects: [
      {
        name: "Impenetrable Skin",
        description:
          "Supports damage reduction and defensive play.",
      },
      {
        name: "Enduring Form",
        description:
          "Improves performance during extended encounters.",
      },
      {
        name: "Pain into Power",
        description:
          "Rewards aggressive action while under pressure.",
      },
    ],

    lore:
      "Touch is the sense through which pain becomes undeniable. This relic preserves the Great Sage's refusal to fall, even when body and spirit are tested.",

    howToUse:
      "Choose it for defensive builds, difficult boss fights or playstyles that remain close to enemies.",

    recommendedBuilds: [
      "Defensive build",
      "Close-range build",
      "Survival build",
    ],
  },

  {
    id: "freed-mind",
    number: "06",
    chapter: "Final Legacy",
    name: "Freed Mind",
    subtitle: "The Sense of Mind",
    location: "Mount Huaguo",
    place: "Mount Huaguo",
    type: "Relic of Mind",
    rarity: "Mythical",
    element: "Enlightenment",
    powerRating: "★★★★★★",
    unlockCondition:
      "Complete the required secret progression, finish the final journey and continue into New Game Plus.",
    image:
      "/images/equipment/relics/freed-mind.png",
    background:
      "/images/equipment/relics/freed-mind-bg.jpg",

    shortDescription:
      "The final relic—the awakened mind that unites perception, instinct, endurance and will.",

    fullDescription:
      "Freed Mind represents consciousness beyond the five physical senses. It is the culmination of the Destined One's journey and symbolizes freedom from the shell of inherited destiny.",

    power:
      "Provides advanced bonuses that complete the relic system and reinforce the Destined One's final form.",

    passive:
      "Combines the experience gained through the previous relics into a final progression path.",

    active:
      "Unlocks powerful late-game talents intended for advanced and New Game Plus builds.",

    effects: [
      {
        name: "Unified Will",
        description:
          "Supports advanced combat styles built from several relic talents.",
      },
      {
        name: "Unbound Thought",
        description:
          "Improves late-game flexibility and combat freedom.",
      },
      {
        name: "Great Sage's Legacy",
        description:
          "Strengthens the final progression of the Destined One.",
      },
    ],

    lore:
      "The mind is not merely another sense. It is the force that interprets every sight, sound, scent, taste and touch. Freed Mind represents a destiny no longer controlled by the past.",

    howToUse:
      "Designed for advanced builds after completing the main relic progression.",

    recommendedBuilds: [
      "New Game Plus build",
      "Great Sage build",
      "Hybrid end-game build",
    ],
  },
];

const cinematicEase = [0.16, 1, 0.3, 1];
const AUTO_SCROLL_DELAY = 1500;

function Relics() {
  const pageRef = useRef(null);
  const reduceMotion = useReducedMotion();

  const [activeRelic, setActiveRelic] =
    useState(0);

  const [selectedRelic, setSelectedRelic] =
    useState(null);
  const [isPaused,setIsPaused]=useState(false);

  useEffect(() => {
    const page = pageRef.current;

    if (!page) {
      return undefined;
    }

    const sections =
      page.querySelectorAll(
        ".relic-panel"
      );

    const observer =
      new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (!entry.isIntersecting) {
              return;
            }

            setActiveRelic(
              Number(
                entry.target.dataset.index
              )
            );
          });
        },
        {
          root: page,
          threshold: 0.58,
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
    function handleKeyDown(event) {
      if (event.key === "Escape") {
        setSelectedRelic(null);
      }

      if (!selectedRelic) {
        return;
      }

      const selectedIndex =
        relics.findIndex(
          (relic) =>
            relic.id ===
            selectedRelic.id
        );

      if (event.key === "ArrowLeft") {
        const previousIndex =
          (selectedIndex -
            1 +
            relics.length) %
          relics.length;

        setSelectedRelic(
          relics[previousIndex]
        );
      }

      if (event.key === "ArrowRight") {
        const nextIndex =
          (selectedIndex + 1) %
          relics.length;

        setSelectedRelic(
          relics[nextIndex]
        );
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
  }, [selectedRelic]);

  useEffect(() => {
    const previousOverflow =
      document.body.style.overflow;

    if (selectedRelic) {
      document.body.style.overflow =
        "hidden";
    }

    return () => {
      document.body.style.overflow =
        previousOverflow;
    };
  }, [selectedRelic]);

  function scrollToRelic(index) {
    const section =
      pageRef.current?.querySelector(
        `[data-index="${index}"]`
      );

    section?.scrollIntoView({
      behavior: reduceMotion
        ? "auto"
        : "smooth",
      block: "start",
    });
  }

  function changeModalRelic(direction) {
    if (!selectedRelic) {
      return;
    }

    const currentIndex =
      relics.findIndex(
        (relic) =>
          relic.id === selectedRelic.id
      );

    const nextIndex =
      (currentIndex +
        direction +
        relics.length) %
      relics.length;

    setSelectedRelic(
      relics[nextIndex]
    );
  }


  useEffect(() => {
    if (selectedRelic || isPaused) return;
    const id = setInterval(() => {
      const next = (activeRelic + 1) % relics.length;
      scrollToRelic(next);
    }, AUTO_SCROLL_DELAY);
    return () => clearInterval(id);
  }, [activeRelic, selectedRelic, isPaused]);

  return (
    <main
      ref={pageRef}
      className="relics-page"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={() => setIsPaused(true)}
      onTouchEnd={() => setIsPaused(false)}
    >
      <Link
        to="/#equipment"
        className="relics-back"
      >
        <span aria-hidden="true">
          ←
        </span>

        <span>Equipment</span>
      </Link>

      <aside
        className="relic-navigation"
        aria-label="Relic navigation"
      >
        <span className="relic-navigation__label">
          Sacred relics
        </span>

        <div className="relic-navigation__line">
          <motion.span
            animate={{
              height: `${
                ((activeRelic + 1) /
                  relics.length) *
                100
              }%`,
            }}
            transition={{
              duration: reduceMotion
                ? 0
                : 0.45,
              ease: cinematicEase,
            }}
          />
        </div>

        <div className="relic-navigation__dots">
          {relics.map(
            (relic, index) => (
              <button
                key={relic.id}
                type="button"
                className={
                  activeRelic === index
                    ? "is-active"
                    : ""
                }
                onClick={() =>
                  scrollToRelic(index)
                }
                aria-label={`View ${relic.name}`}
              >
                <span />

                <small>
                  {relic.number}
                </small>
              </button>
            )
          )}
        </div>
      </aside>

      {relics.map(
        (relic, index) => {
          const reverse =
            index % 2 !== 0;

          return (
            <section
              key={relic.id}
              id={relic.id}
              data-index={index}
              className={[
                "relic-panel",
                reverse
                  ? "relic-panel--reverse"
                  : "",
              ]
                .filter(Boolean)
                .join(" ")}
            >
              <motion.div
                className="relic-panel__background"
                style={{
                  backgroundImage:
                    `url("${relic.background}")`,
                }}
                initial={{
                  opacity: 0,
                  scale: reduceMotion
                    ? 1
                    : 1.12,
                  y: reduceMotion
                    ? 0
                    : 60,
                }}
                whileInView={{
                  opacity: 1,
                  scale: 1.03,
                  y: 0,
                }}
                viewport={{
                  once: false,
                  amount: 0.4,
                }}
                transition={{
                  duration: reduceMotion
                    ? 0
                    : 1.3,
                  ease: cinematicEase,
                }}
              />

              <div className="relic-panel__overlay" />
              <div className="relic-panel__texture" />

              <div className="relic-panel__inner">
                <motion.div
                  className="relic-panel__content"
                  initial={{
                    opacity: 0,
                    x: reduceMotion
                      ? 0
                      : reverse
                        ? 70
                        : -70,
                    y: reduceMotion
                      ? 0
                      : 24,
                  }}
                  whileInView={{
                    opacity: 1,
                    x: 0,
                    y: 0,
                  }}
                  viewport={{
                    once: false,
                    amount: 0.45,
                  }}
                  transition={{
                    duration: reduceMotion
                      ? 0
                      : 0.9,
                    delay: reduceMotion
                      ? 0
                      : 0.22,
                    ease: cinematicEase,
                  }}
                >
                  <span className="relic-panel__ghost-number">
                    {relic.number}
                  </span>

                  <div className="relic-panel__meta">
                    <span>
                      {relic.chapter}
                    </span>

                    <i />

                    <span>
                      {relic.location}
                    </span>
                  </div>

                  <span className="relic-panel__accent">
                    {relic.subtitle}
                  </span>

                  <h1>{relic.name}</h1>

                  <div className="relic-panel__decoration">
                    <span />
                    <i />
                    <span />
                  </div>

                  <p>
                    {
                      relic.shortDescription
                    }
                  </p>

                  <div className="relic-panel__power">
                    <article>
                      <span>Power</span>
                      <strong>
                        {
                          relic.powerRating
                        }
                      </strong>
                    </article>

                    <article>
                      <span>Type</span>
                      <strong>
                        {relic.type}
                      </strong>
                    </article>

                    <article>
                      <span>
                        Element
                      </span>
                      <strong>
                        {relic.element}
                      </strong>
                    </article>
                  </div>

                  <button
                    type="button"
                    className="relic-panel__button"
                    onClick={() =>
                      setSelectedRelic(
                        relic
                      )
                    }
                  >
                    <span>
                      Discover relic
                    </span>

                    <svg
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path
                        d="M5 12h14M13 6l6 6-6 6"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button>
                </motion.div>

                <motion.div
                  className="relic-frame"
                  initial={{
                    opacity: 0,
                    x: reduceMotion
                      ? 0
                      : reverse
                        ? -90
                        : 90,
                    y: reduceMotion
                      ? 0
                      : 35,
                    rotateY: reduceMotion
                      ? 0
                      : reverse
                        ? 8
                        : -8,
                  }}
                  whileInView={{
                    opacity: 1,
                    x: 0,
                    y: 0,
                    rotateY: 0,
                  }}
                  viewport={{
                    once: false,
                    amount: 0.38,
                  }}
                  transition={{
                    duration: reduceMotion
                      ? 0
                      : 1.05,
                    delay: reduceMotion
                      ? 0
                      : 0.18,
                    ease: cinematicEase,
                  }}
                >
                  <div className="relic-frame__outer">
                    <img
                      src={relic.image}
                      alt={relic.name}
                      className="relic-frame__image"
                    />

                    <div className="relic-frame__shade" />
                    <div className="relic-frame__glow" />
                    <div className="relic-frame__shine" />
                    <div className="relic-frame__inner-border" />

                    <span className="relic-frame__corner relic-frame__corner--tl" />
                    <span className="relic-frame__corner relic-frame__corner--tr" />
                    <span className="relic-frame__corner relic-frame__corner--bl" />
                    <span className="relic-frame__corner relic-frame__corner--br" />

                    <div className="relic-frame__top">
                      <span>
                        Sacred Relic
                      </span>

                      <strong>
                        {relic.number}
                      </strong>
                    </div>

                    <div className="relic-frame__bottom">
                      <div>
                        <span>
                          Relic Power
                        </span>

                        <strong>
                          {relic.element}
                        </strong>
                      </div>

                      <button
                        type="button"
                        onClick={() =>
                          setSelectedRelic(
                            relic
                          )
                        }
                        aria-label={`Open ${relic.name}`}
                      >
                        ↗
                      </button>
                    </div>
                  </div>

                  <div className="relic-frame__base">
                    <span />

                    <strong>
                      {relic.name}
                    </strong>

                    <span />
                  </div>
                </motion.div>
              </div>

              <div className="relic-panel__chapter">
                <span>
                  {String(
                    index + 1
                  ).padStart(2, "0")}
                </span>

                <small>
                  {String(
                    relics.length
                  ).padStart(2, "0")}
                </small>
              </div>

              {index <
                relics.length - 1 && (
                <button
                  type="button"
                  className="relic-panel__scroll"
                  onClick={() =>
                    scrollToRelic(
                      index + 1
                    )
                  }
                  aria-label="View next relic"
                >
                  <span>Scroll</span>
                  <i />
                </button>
              )}
            </section>
          );
        }
      )}

      <AnimatePresence>
        {selectedRelic && (
          <motion.div
            className="relic-modal"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{
              duration: 0.25,
            }}
            onMouseDown={() =>
              setSelectedRelic(null)
            }
          >
            <motion.div
              className="relic-modal__content"
              initial={{
                opacity: 0,
                y: reduceMotion
                  ? 0
                  : 38,
                scale: reduceMotion
                  ? 1
                  : 0.97,
              }}
              animate={{
                opacity: 1,
                y: 0,
                scale: 1,
              }}
              exit={{
                opacity: 0,
                y: reduceMotion
                  ? 0
                  : 24,
                scale: reduceMotion
                  ? 1
                  : 0.98,
              }}
              transition={{
                duration: reduceMotion
                  ? 0
                  : 0.42,
                ease: cinematicEase,
              }}
              onMouseDown={(event) =>
                event.stopPropagation()
              }
            >
              <button
                type="button"
                className="relic-modal__close"
                onClick={() =>
                  setSelectedRelic(null)
                }
                aria-label="Close relic details"
              >
                ×
              </button>

              <section className="relic-modal__visual">
                <img
                  src={
                    selectedRelic.image
                  }
                  alt={
                    selectedRelic.name
                  }
                  className="relic-modal__image"
                />

                <div className="relic-modal__visual-overlay" />

                <span className="relic-modal__visual-number">
                  {
                    selectedRelic.number
                  }
                </span>

                <div className="relic-modal__visual-copy">
                  <span>
                    {
                      selectedRelic.subtitle
                    }
                  </span>

                  <h2>
                    {
                      selectedRelic.name
                    }
                  </h2>

                  <strong>
                    {
                      selectedRelic.location
                    }
                  </strong>
                </div>
              </section>

              <section className="relic-modal__record">
                <header className="relic-modal__record-header">
                  <div>
                    <span>
                      Relic Archive
                    </span>

                    <small>
                      Complete relic
                      information
                    </small>
                  </div>

                  <strong>
                    {
                      selectedRelic.rarity
                    }
                  </strong>
                </header>

                <div className="relic-modal__facts">
                  <article>
                    <span>Type</span>
                    <strong>
                      {
                        selectedRelic.type
                      }
                    </strong>
                  </article>

                  <article>
                    <span>Element</span>
                    <strong>
                      {
                        selectedRelic.element
                      }
                    </strong>
                  </article>

                  <article>
                    <span>Power</span>
                    <strong>
                      {
                        selectedRelic.powerRating
                      }
                    </strong>
                  </article>

                  <article>
                    <span>Chapter</span>
                    <strong>
                      {
                        selectedRelic.chapter
                      }
                    </strong>
                  </article>
                </div>

                <div className="relic-modal__scroll-area">
                  <article className="relic-modal__section">
                    <span className="relic-modal__section-label">
                      Relic description
                    </span>

                    <h3>
                      Power of the{" "}
                      {
                        selectedRelic.element
                      }
                    </h3>

                    <p>
                      {
                        selectedRelic.fullDescription
                      }
                    </p>
                  </article>

                  <article className="relic-modal__section">
                    <span className="relic-modal__section-label">
                      Core power
                    </span>

                    <div className="relic-modal__core">
                      <article>
                        <span>
                          Relic Power
                        </span>

                        <p>
                          {
                            selectedRelic.power
                          }
                        </p>
                      </article>

                      <article>
                        <span>
                          Passive Effect
                        </span>

                        <p>
                          {
                            selectedRelic.passive
                          }
                        </p>
                      </article>

                      <article>
                        <span>
                          Active Effect
                        </span>

                        <p>
                          {
                            selectedRelic.active
                          }
                        </p>
                      </article>
                    </div>
                  </article>

                  <article className="relic-modal__section">
                    <span className="relic-modal__section-label">
                      Available powers
                    </span>

                    <div className="relic-modal__abilities">
                      {selectedRelic.effects.map(
                        (
                          effect,
                          effectIndex
                        ) => (
                          <article
                            key={
                              effect.name
                            }
                          >
                            <span>
                              {String(
                                effectIndex +
                                  1
                              ).padStart(
                                2,
                                "0"
                              )}
                            </span>

                            <div>
                              <strong>
                                {
                                  effect.name
                                }
                              </strong>

                              <p>
                                {
                                  effect.description
                                }
                              </p>
                            </div>
                          </article>
                        )
                      )}
                    </div>
                  </article>

                  <article className="relic-modal__section">
                    <span className="relic-modal__section-label">
                      Relic intelligence
                    </span>

                    <div className="relic-modal__intel">
                      <article>
                        <span>Lore</span>
                        <p>
                          {
                            selectedRelic.lore
                          }
                        </p>
                      </article>

                      <article>
                        <span>
                          How to unlock
                        </span>
                        <p>
                          {
                            selectedRelic.unlockCondition
                          }
                        </p>
                      </article>

                      <article>
                        <span>
                          How to use
                        </span>
                        <p>
                          {
                            selectedRelic.howToUse
                          }
                        </p>
                      </article>

                      <article>
                        <span>
                          Recommended
                          builds
                        </span>

                        <ul>
                          {selectedRelic.recommendedBuilds.map(
                            (build) => (
                              <li
                                key={
                                  build
                                }
                              >
                                {build}
                              </li>
                            )
                          )}
                        </ul>
                      </article>
                    </div>
                  </article>
                </div>

                <footer className="relic-modal__footer">
                  <button
                    type="button"
                    onClick={() =>
                      changeModalRelic(
                        -1
                      )
                    }
                  >
                    ← Previous
                  </button>

                  <div>
                    <span>
                      {
                        selectedRelic.number
                      }
                    </span>

                    <i />

                    <small>
                      {String(
                        relics.length
                      ).padStart(
                        2,
                        "0"
                      )}
                    </small>
                  </div>

                  <button
                    type="button"
                    onClick={() =>
                      changeModalRelic(
                        1
                      )
                    }
                  >
                    Next →
                  </button>
                </footer>
              </section>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}

export default Relics;
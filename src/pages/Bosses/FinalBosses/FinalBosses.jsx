import {
  AnimatePresence,
  motion,
  useReducedMotion,
} from "framer-motion";

import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import "./FinalBosses.css";

const finalBosses = [
  {
    id: "black-bear-guai",
    number: "01",
    chapter: "Chapter One",
    name: "Black Bear Guai",
    location: "Black Wind Mountain",
    classification: "Yaoguai King",
    element: "Fire and brute force",
    difficulty: "High",
    description:
      "The transformed master of Black Wind Mountain, wielding immense strength and violent flames.",
    lore:
      "Black Bear Guai guards the summit of Black Wind Mountain. His imposing frame hides surprising speed, and his transformation into black mist lets him reposition before unleashing crushing attacks.",
    encounter:
      "Stay close enough to punish the end of his heavy combinations, but keep stamina available for his mist charges and expanding flame attacks.",
    strengths: ["Heavy impact damage", "Flame pressure", "Mist repositioning"],
    weaknesses: ["Long recovery windows", "Predictable finishers", "Vulnerable after charges"],
    abilities: [
      { number: "01", name: "Crushing Claw", text: "A broad melee chain with delayed final swings." },
      { number: "02", name: "Black Mist Rush", text: "Transforms into mist and charges across the arena." },
      { number: "03", name: "Flame Detonation", text: "Ignites the surrounding area with explosive fire." },
      { number: "04", name: "Bear's Fury", text: "An enraged sequence with greater speed and reach." },
    ],
    image: "/images/bosses/final-bosses/black-bear-guai.jpg",
    background: "/images/bosses/final-bosses/black-bear-guai-bg.jpg",
    accent: "Black Wind",
  },
  {
    id: "yellow-wind-sage",
    number: "02",
    chapter: "Chapter Two",
    name: "Yellow Wind Sage",
    location: "Yellow Wind Ridge",
    classification: "Yaoguai King",
    element: "Wind and sand",
    difficulty: "Very High",
    description:
      "A powerful Yaoguai king who commands devastating winds and controls the sands of the ridge.",
    lore:
      "The Yellow Wind Sage dominates the ridge through violent sandstorms, deceptive movement and attacks that obscure the battlefield.",
    encounter:
      "Read his spear rhythm instead of reacting to the dust alone. Close distance during wind recovery and avoid staying at the arena edge.",
    strengths: ["Long-range pressure", "Vision disruption", "Wide sweeping attacks"],
    weaknesses: ["Open after wind bursts", "Limited tracking at close range", "Readable spear chains"],
    abilities: [
      { number: "01", name: "Sage's Spear", text: "A long-reaching sequence of thrusts and sweeps." },
      { number: "02", name: "Yellow Gale", text: "Creates a damaging storm that controls movement." },
      { number: "03", name: "Sand Phantom", text: "Uses the storm to conceal sudden repositioning." },
      { number: "04", name: "Divine Wind", text: "A large finishing attack covering much of the arena." },
    ],
    image: "/images/bosses/final-bosses/yellow-wind-sage.jpg",
    background: "/images/bosses/final-bosses/yellow-wind-sage-bg.jpg",
    accent: "Yellow Sand",
  },
  {
    id: "yellowbrow",
    number: "03",
    chapter: "Chapter Three",
    name: "Yellowbrow",
    location: "The New West",
    classification: "False Buddha",
    element: "Lightning and illusion",
    difficulty: "Very High",
    description:
      "A false Buddha who bends devotion and illusion to imprison those who enter his domain.",
    lore:
      "Yellowbrow presents himself as an enlightened figure while twisting faith into control. His battle changes rhythm repeatedly through illusions, golden armor and sudden lightning.",
    encounter:
      "Do not waste heavy attacks against his protected state. Preserve resources for the transition phases and punish only after his larger spells end.",
    strengths: ["Phase transitions", "Golden protection", "Lightning control"],
    weaknesses: ["Slow recovery after spells", "Armor breaks under pressure", "Limited mobility while casting"],
    abilities: [
      { number: "01", name: "Golden Shell", text: "Hardens his body and resists direct attacks." },
      { number: "02", name: "False Revelation", text: "Creates deceptive magical pressure around the player." },
      { number: "03", name: "Thunder Sermon", text: "Calls lightning across marked areas of the arena." },
      { number: "04", name: "Temple Collapse", text: "A phase-ending attack with wide environmental danger." },
    ],
    image: "/images/bosses/final-bosses/yellowbrow.jpg",
    background: "/images/bosses/final-bosses/yellowbrow-bg.jpg",
    accent: "False Divinity",
  },
  {
    id: "hundred-eyed-daoist-master",
    number: "04",
    chapter: "Chapter Four",
    name: "Hundred-Eyed Daoist Master",
    location: "The Webbed Hollow",
    classification: "Daoist Master",
    element: "Poison and golden light",
    difficulty: "Extreme",
    description:
      "A sinister Daoist whose golden radiance and many eyes conceal a monstrous true form.",
    lore:
      "The Hundred-Eyed Daoist Master combines disciplined weapon techniques with poisonous influence and a radiant domain that alters the pace of the battle.",
    encounter:
      "Avoid extended trades during his golden domain. Circle away from frontal attacks and use his transformation recovery to deal meaningful damage.",
    strengths: ["Golden domain", "Poison buildup", "Multiple attack ranges"],
    weaknesses: ["Large transformation recovery", "Exposed flanks", "Slow turning during beams"],
    abilities: [
      { number: "01", name: "Daoist Blade", text: "Measured sword attacks with deceptive timing." },
      { number: "02", name: "Venomous Ground", text: "Creates poisonous zones that restrict positioning." },
      { number: "03", name: "Hundred Eyes", text: "Releases radiant attacks from multiple directions." },
      { number: "04", name: "Golden Domain", text: "Transforms the arena and empowers his final phase." },
    ],
    image: "/images/bosses/final-bosses/hundred-eyed-daoist-master.png",
    background: "/images/bosses/final-bosses/hundred-eyed-daoist-master-bg.jpg",
    accent: "Golden Radiance",
  },
  {
    id: "yaksha-king",
    number: "05",
    chapter: "Chapter Five",
    name: "Yaksha King",
    location: "Flaming Mountains",
    classification: "Royal Yaoguai",
    element: "Crimson flame",
    difficulty: "Extreme",
    description:
      "A tragic ruler transformed by rage, fighting with crimson blades and explosive power.",
    lore:
      "The Yaksha King fights with relentless aggression. His crimson blades extend beyond normal reach, turning every opening into a dangerous test of spacing.",
    encounter:
      "Dodge through narrow blade paths rather than retreating repeatedly. His longest combinations end with clear recovery, creating the safest damage windows.",
    strengths: ["Extended blade reach", "Fast pursuit", "Explosive finishers"],
    weaknesses: ["Commits to long strings", "Open after aerial attacks", "Limited defense during rage"],
    abilities: [
      { number: "01", name: "Crimson Edge", text: "Extends blade attacks across a wide horizontal area." },
      { number: "02", name: "Royal Pursuit", text: "Rapidly closes distance with chained strikes." },
      { number: "03", name: "Yaksha Ascension", text: "Launches upward before a violent descending attack." },
      { number: "04", name: "King's Ruin", text: "A destructive rage sequence with explosive blades." },
    ],
    image: "/images/bosses/final-bosses/yaksha-king.png",
    background: "/images/bosses/final-bosses/yaksha-king-bg.jpg",
    accent: "Crimson Fury",
  },
  {
    id: "great-sages-broken-shell",
    number: "06",
    chapter: "Chapter Six",
    name: "The Great Sage's Broken Shell",
    location: "Mount Huaguo",
    classification: "Relic of the Great Sage",
    element: "Adaptive mastery",
    difficulty: "Legendary",
    description:
      "The final remnant of the Great Sage, carrying his skills, memories and immeasurable power.",
    lore:
      "The Broken Shell mirrors the techniques and authority of the Great Sage. It reads familiar habits, counters reckless aggression and shifts between multiple combat disciplines.",
    encounter:
      "Treat every familiar animation as a threat. Maintain patience, avoid repeating the same approach and save powerful resources for the final exchange.",
    strengths: ["Adaptive counters", "Multiple stances", "Exceptional speed"],
    weaknesses: ["Brief stance transitions", "Punishable finishers", "Requires commitment to counter"],
    abilities: [
      { number: "01", name: "Sage's Staff", text: "Masterful staff chains with variable reach and timing." },
      { number: "02", name: "Cloud Step", text: "Disappears and returns from an unexpected direction." },
      { number: "03", name: "Broken Reflection", text: "Uses familiar techniques against the Destined One." },
      { number: "04", name: "Final Legacy", text: "Combines multiple disciplines in the last phase." },
    ],
    image: "/images/bosses/final-bosses/the-great-sage's-broken-shell.jpg",
    background: "/images/bosses/final-bosses/the-great-sage's-broken-shell-bg.jpg",
    accent: "Broken Legacy",
  },
];

const cinematicEase = [0.16, 1, 0.3, 1];

function FinalBosses() {
  const pageRef = useRef(null);
  const reduceMotion = useReducedMotion();
  const [activeBoss, setActiveBoss] = useState(0);
  const [selectedBoss, setSelectedBoss] = useState(null);

  useEffect(() => {
    const page = pageRef.current;
    if (!page) return undefined;

    const sections = page.querySelectorAll(".final-boss-panel");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveBoss(Number(entry.target.dataset.index));
          }
        });
      },
      { root: page, threshold: 0.58 }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") setSelectedBoss(null);
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = selectedBoss ? "hidden" : "";

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [selectedBoss]);


  useEffect(() => {
    const page = pageRef.current;
    if (!page) return;
    let timer;
    let paused = false;
    const scrollNext = () => {
      if (paused || selectedBoss) return;
      const next=(activeBoss+1)%finalBosses.length;
      scrollToBoss(next);
    };
    const start=()=>{clearInterval(timer);timer=setInterval(scrollNext,1500);};
    const stop=()=>clearInterval(timer);
    const enter=()=>{paused=true;stop();};
    const leave=()=>{paused=false;start();};
    page.addEventListener('mouseenter',enter);
    page.addEventListener('mouseleave',leave);
    start();
    return ()=>{
      stop();
      page.removeEventListener('mouseenter',enter);
      page.removeEventListener('mouseleave',leave);
    };
  }, [activeBoss, selectedBoss, reduceMotion]);

  function scrollToBoss(index) {
    const section = pageRef.current?.querySelector(`[data-index="${index}"]`);
    section?.scrollIntoView({
      behavior: reduceMotion ? "auto" : "smooth",
      block: "start",
    });
  }

  function getSelectedBossIndex() {
    return finalBosses.findIndex((boss) => boss.id === selectedBoss?.id);
  }

  function openPreviousBoss() {
    const currentIndex = getSelectedBossIndex();
    const previousIndex =
      (currentIndex - 1 + finalBosses.length) % finalBosses.length;

    setSelectedBoss(finalBosses[previousIndex]);
  }

  function openNextBoss() {
    const currentIndex = getSelectedBossIndex();
    const nextIndex = (currentIndex + 1) % finalBosses.length;

    setSelectedBoss(finalBosses[nextIndex]);
  }

  return (
    <main ref={pageRef} className="final-bosses-page">
      <Link to="/#bosses" className="final-bosses-back">
        <span aria-hidden="true">←</span>
        <span>Bosses</span>
      </Link>

      <aside className="final-boss-navigation" aria-label="Final boss navigation">
        <span className="final-boss-navigation__label">Final encounters</span>

        <div className="final-boss-navigation__line">
          <motion.span
            animate={{
              height: `${((activeBoss + 1) / finalBosses.length) * 100}%`,
            }}
            transition={{
              duration: reduceMotion ? 0 : 0.45,
              ease: cinematicEase,
            }}
          />
        </div>

        <div className="final-boss-navigation__dots">
          {finalBosses.map((boss, index) => (
            <button
              key={boss.id}
              type="button"
              className={activeBoss === index ? "is-active" : ""}
              onClick={() => scrollToBoss(index)}
              aria-label={`View ${boss.name}`}
            >
              <span />
              <small>{boss.number}</small>
            </button>
          ))}
        </div>
      </aside>

      {finalBosses.map((boss, index) => {
        const reverse = index % 2 !== 0;

        return (
          <section
            key={boss.id}
            id={boss.id}
            data-index={index}
            className={`final-boss-panel${reverse ? " final-boss-panel--reverse" : ""}`}
          >
            <motion.div
              className="final-boss-panel__background"
              style={{ backgroundImage: `url("${boss.background}")` }}
              initial={{ opacity: 0, scale: reduceMotion ? 1 : 1.08 }}
              whileInView={{ opacity: 1, scale: 1.02 }}
              viewport={{ once: false, amount: 0.35 }}
              transition={{
                duration: reduceMotion ? 0 : 1.25,
                ease: cinematicEase,
              }}
              aria-hidden="true"
            />

            <div className="final-boss-panel__overlay" aria-hidden="true" />
            <div className="final-boss-panel__texture" aria-hidden="true" />

            <div className="final-boss-panel__inner">
              <motion.div
                className="final-boss-panel__content"
                initial={{
                  opacity: 0,
                  x: reduceMotion ? 0 : reverse ? 80 : -80,
                  y: reduceMotion ? 0 : 25,
                }}
                whileInView={{ opacity: 1, x: 0, y: 0 }}
                viewport={{ once: false, amount: 0.45 }}
                transition={{
                  duration: reduceMotion ? 0 : 0.9,
                  delay: reduceMotion ? 0 : 0.12,
                  ease: cinematicEase,
                }}
              >
                <div className="final-boss-panel__meta">
                  <span>{boss.chapter}</span>
                  <i />
                  <span>{boss.location}</span>
                </div>

                <span className="final-boss-panel__ghost-number">{boss.number}</span>
                <span className="final-boss-panel__accent">{boss.accent}</span>
                <h1>{boss.name}</h1>

                <div className="final-boss-panel__decoration" aria-hidden="true">
                  <span />
                  <i />
                  <span />
                </div>

                <p>{boss.description}</p>

                <button
                  type="button"
                  className="final-boss-panel__button"
                  onClick={() => setSelectedBoss(boss)}
                >
                  <span>Discover encounter</span>
                  <svg viewBox="0 0 24 24" aria-hidden="true">
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

              <motion.article
                className="final-boss-frame"
                initial={{
                  opacity: 0,
                  x: reduceMotion ? 0 : reverse ? -100 : 100,
                  y: reduceMotion ? 0 : 35,
                  rotateY: reduceMotion ? 0 : reverse ? 7 : -7,
                }}
                whileInView={{ opacity: 1, x: 0, y: 0, rotateY: 0 }}
                viewport={{ once: false, amount: 0.42 }}
                transition={{
                  duration: reduceMotion ? 0 : 1.05,
                  delay: reduceMotion ? 0 : 0.18,
                  ease: cinematicEase,
                }}
              >
                <div className="final-boss-frame__outer">
                  <span className="final-boss-frame__corner final-boss-frame__corner--tl" />
                  <span className="final-boss-frame__corner final-boss-frame__corner--tr" />
                  <span className="final-boss-frame__corner final-boss-frame__corner--bl" />
                  <span className="final-boss-frame__corner final-boss-frame__corner--br" />

                  <div
                    className="final-boss-frame__environment"
                    style={{ backgroundImage: `url("${boss.background}")` }}
                    aria-hidden="true"
                  />
                  <div className="final-boss-frame__environment-overlay" aria-hidden="true" />
                  <div className="final-boss-frame__shine" aria-hidden="true" />

                  <motion.img
                    src={boss.image}
                    alt={boss.name}
                    className="final-boss-frame__character"
                    animate={reduceMotion ? undefined : { y: [0, -8, 0] }}
                    transition={{
                      duration: 6,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  />

                  <div className="final-boss-frame__shadow" aria-hidden="true" />

                  <div className="final-boss-frame__top">
                    <span>Final encounter</span>
                    <strong>{boss.number}</strong>
                  </div>

                  <div className="final-boss-frame__bottom">
                    <div>
                      <span>{boss.chapter}</span>
                      <strong>{boss.location}</strong>
                    </div>

                    <button
                      type="button"
                      onClick={() => setSelectedBoss(boss)}
                      aria-label={`Open ${boss.name} details`}
                    >
                      ↗
                    </button>
                  </div>

                  <div className="final-boss-frame__inner-border" aria-hidden="true" />
                </div>

                <div className="final-boss-frame__base">
                  <span />
                  <strong>{boss.name}</strong>
                  <span />
                </div>
              </motion.article>
            </div>

            <motion.div
              className="final-boss-panel__chapter"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: false, amount: 0.6 }}
              transition={{
                delay: reduceMotion ? 0 : 0.65,
                duration: reduceMotion ? 0 : 0.8,
              }}
            >
              <span>{String(index + 1).padStart(2, "0")}</span>
              <small>{String(finalBosses.length).padStart(2, "0")}</small>
            </motion.div>

            {index < finalBosses.length - 1 && (
              <button
                type="button"
                className="final-boss-panel__scroll"
                onClick={() => scrollToBoss(index + 1)}
                aria-label="View next boss"
              >
                <span>Scroll</span>
                <i />
              </button>
            )}
          </section>
        );
      })}

      <AnimatePresence>
        {selectedBoss && (
          <motion.div
            className="boss-modal"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onMouseDown={() => setSelectedBoss(null)}
          >
            <motion.article
              className="boss-modal__content"
              initial={{
                opacity: 0,
                y: reduceMotion ? 0 : 42,
                scale: reduceMotion ? 1 : 0.965,
              }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{
                opacity: 0,
                y: reduceMotion ? 0 : 24,
                scale: reduceMotion ? 1 : 0.98,
              }}
              transition={{
                duration: reduceMotion ? 0 : 0.45,
                ease: cinematicEase,
              }}
              onMouseDown={(event) => event.stopPropagation()}
              aria-label={`${selectedBoss.name} encounter dossier`}
            >
              <button
                type="button"
                className="boss-modal__close"
                onClick={() => setSelectedBoss(null)}
                aria-label="Close boss details"
              >
                ×
              </button>

              <section className="boss-modal__visual">
                <img
                  src={selectedBoss.image}
                  alt={selectedBoss.name}
                  className="boss-modal__character"
                />

                <div className="boss-modal__visual-overlay" />

                <div className="boss-modal__visual-copy">
                  <span>{selectedBoss.classification}</span>
                  <h2>{selectedBoss.name}</h2>
                  <strong>{selectedBoss.location}</strong>
                </div>

                <div className="boss-modal__visual-number">
                  {selectedBoss.number}
                </div>
              </section>

              <section className="boss-modal__record">
                <header className="boss-modal__record-header">
                  <div>
                    <span>Yaoguai record</span>
                    <small>
                      Final encounter · {selectedBoss.chapter}
                    </small>
                  </div>

                  <strong>
                    {selectedBoss.number} /{" "}
                    {String(finalBosses.length).padStart(2, "0")}
                  </strong>
                </header>

                <div className="boss-modal__facts">
                  <article>
                    <span>Classification</span>
                    <strong>{selectedBoss.classification}</strong>
                  </article>

                  <article>
                    <span>Region</span>
                    <strong>{selectedBoss.location}</strong>
                  </article>

                  <article>
                    <span>Journey</span>
                    <strong>{selectedBoss.chapter}</strong>
                  </article>

                  <article>
                    <span>Affinity</span>
                    <strong>{selectedBoss.element}</strong>
                  </article>

                  <article>
                    <span>Threat level</span>
                    <strong>{selectedBoss.difficulty}</strong>
                  </article>
                </div>

                <div className="boss-modal__scroll-area">
                  <section className="boss-modal__section">
                    <span className="boss-modal__section-label">
                      Encounter profile
                    </span>

                    <h3>Description</h3>
                    <p>{selectedBoss.lore}</p>
                  </section>

                  <section className="boss-modal__section">
                    <h3>Combat abilities</h3>

                    <div className="boss-modal__abilities">
                      {selectedBoss.abilities.map((ability) => (
                        <article key={ability.number}>
                          <span>{ability.number}</span>

                          <div>
                            <strong>{ability.name}</strong>
                            <p>{ability.text}</p>
                          </div>
                        </article>
                      ))}
                    </div>
                  </section>

                  <section className="boss-modal__section">
                    <h3>Battle intelligence</h3>

                    <div className="boss-modal__intel">
                      <article>
                        <span>Encounter strategy</span>
                        <p>{selectedBoss.encounter}</p>
                      </article>

                      <article>
                        <span>Primary strengths</span>
                        <ul>
                          {selectedBoss.strengths.map((strength) => (
                            <li key={strength}>{strength}</li>
                          ))}
                        </ul>
                      </article>

                      <article>
                        <span>Exploitable weaknesses</span>
                        <ul>
                          {selectedBoss.weaknesses.map((weakness) => (
                            <li key={weakness}>{weakness}</li>
                          ))}
                        </ul>
                      </article>
                    </div>
                  </section>
                </div>

                <footer className="boss-modal__footer">
                  <button type="button" onClick={openPreviousBoss}>
                    <span>←</span>
                    Previous
                  </button>

                  <div>
                    <span>{selectedBoss.number}</span>
                    <i />
                    <small>
                      {String(finalBosses.length).padStart(2, "0")}
                    </small>
                  </div>

                  <button type="button" onClick={openNextBoss}>
                    Next
                    <span>→</span>
                  </button>
                </footer>
              </section>
            </motion.article>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}

export default FinalBosses;

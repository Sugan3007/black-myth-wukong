import {
  useEffect,
  useMemo,
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

import characters, {
  characterCategories,
} from "./characterData";

import CharacterCard from "./components/CharacterCard";
import CharacterFilters from "./components/CharacterFilters";
import CharacterModal from "./components/CharacterModal";

import "./Characters.css";

function Characters() {
  const pageRef = useRef(null);
  const navigate = useNavigate();

  const [activeCategory, setActiveCategory] =
    useState("All");

  const [searchTerm, setSearchTerm] =
    useState("");

  const [
    selectedCharacter,
    setSelectedCharacter,
  ] = useState(null);

  const { scrollYProgress } = useScroll({
    target: pageRef,
    offset: ["start start", "end end"],
  });

  const heroOpacity = useTransform(
    scrollYProgress,
    [0, 0.07, 0.14],
    [1, 1, 0]
  );

  const heroScale = useTransform(
    scrollYProgress,
    [0, 0.14],
    [1, 1.08]
  );

  const heroY = useTransform(
    scrollYProgress,
    [0, 0.14],
    [0, 100]
  );

  const backgroundY = useTransform(
    scrollYProgress,
    [0, 1],
    ["0%", "15%"]
  );

  const filteredCharacters = useMemo(() => {
    const normalizedSearch =
      searchTerm.trim().toLowerCase();

    return characters.filter((character) => {
      const matchesCategory =
        activeCategory === "All" ||
        character.category === activeCategory;

      const searchableText = [
        character.name,
        character.title,
        character.category,
        character.allegiance,
        character.location,
      ]
        .join(" ")
        .toLowerCase();

      const matchesSearch =
        !normalizedSearch ||
        searchableText.includes(normalizedSearch);

      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchTerm]);

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "auto",
    });
  }, []);

  useEffect(() => {
    document.body.style.overflow =
      selectedCharacter ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [selectedCharacter]);

  const changeCharacter = (direction) => {
    if (!selectedCharacter) {
      return;
    }

    const currentIndex = characters.findIndex(
      (character) =>
        character.id === selectedCharacter.id
    );

    if (currentIndex === -1) {
      return;
    }

    const nextIndex =
      (
        currentIndex +
        direction +
        characters.length
      ) % characters.length;

    setSelectedCharacter(
      characters[nextIndex]
    );
  };

  useEffect(() => {
    function handleKeyDown(event) {
      if (!selectedCharacter) {
        return;
      }

      if (event.key === "Escape") {
        setSelectedCharacter(null);
      }

      if (event.key === "ArrowLeft") {
        changeCharacter(-1);
      }

      if (event.key === "ArrowRight") {
        changeCharacter(1);
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
  }, [selectedCharacter]);

  return (
    <main
      ref={pageRef}
      className="characters-page"
    >
      <Navbar />

      <motion.div
        className="characters-page-background"
        style={{
          y: backgroundY,
        }}
        aria-hidden="true"
      >
        <div className="characters-page-background-image" />
        <div className="characters-page-background-overlay" />
        <div className="characters-page-background-texture" />
      </motion.div>

      <section className="characters-hero">
        <motion.div
          className="characters-hero-content"
          style={{
            opacity: heroOpacity,
            scale: heroScale,
            y: heroY,
          }}
        >
          <motion.button
            type="button"
            className="characters-back-button"
            onClick={() =>
              navigate("/#explore")
            }
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
              delay: 0.2,
            }}
          >
            <span aria-hidden="true">
              ←
            </span>

            Return to Explore
          </motion.button>

          <motion.span
            className="character-section-kicker"
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
              delay: 0.35,
            }}
          >
            Figures of Myth and Destiny
          </motion.span>

          <motion.h1
            initial={{
              opacity: 0,
              y: 65,
              filter: "blur(10px)",
            }}
            animate={{
              opacity: 1,
              y: 0,
              filter: "blur(0px)",
            }}
            transition={{
              duration: 1.15,
              delay: 0.4,
              ease: [0.16, 1, 0.3, 1],
            }}
          >
            Character
            <span>Archive</span>
          </motion.h1>

          <motion.div
            className="characters-title-decoration"
            initial={{
              opacity: 0,
              scaleX: 0,
            }}
            animate={{
              opacity: 1,
              scaleX: 1,
            }}
            transition={{
              duration: 0.9,
              delay: 0.85,
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
              delay: 0.95,
            }}
          >
            Meet the warriors, immortals and
            mysterious companions whose choices
            shaped the legacy of the Great Sage
            and the path of the Destined One.
          </motion.p>
        </motion.div>

        <div className="characters-hero-scroll">
          <span>Enter the archive</span>
          <i />
        </div>
      </section>

      <section className="characters-archive">
        <div className="characters-container">
          <motion.header
            className="characters-archive-heading"
            initial={{
              opacity: 0,
              y: 55,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
              amount: 0.4,
            }}
            transition={{
              duration: 0.85,
              ease: [0.16, 1, 0.3, 1],
            }}
          >
            <div>
              <span className="character-section-kicker">
                Chronicle Index
              </span>

              <h2>
                Those who walk
                <span>the journey</span>
              </h2>
            </div>

            <p>
              Search the archive or filter by
              role to examine each figure&apos;s
              history, abilities and
              connections.
            </p>
          </motion.header>

          <CharacterFilters
            categories={characterCategories}
            activeCategory={activeCategory}
            onCategoryChange={
              setActiveCategory
            }
            searchTerm={searchTerm}
            onSearchChange={setSearchTerm}
            resultCount={
              filteredCharacters.length
            }
          />

          <AnimatePresence mode="wait">
            {filteredCharacters.length > 0 ? (
              <motion.div
                className="characters-grid"
                variants={{
                  hidden: {},
                  visible: {
                    transition: {
                      staggerChildren: 0.1,
                    },
                  },
                }}
                initial="hidden"
                animate="visible"
                exit={{
                  opacity: 0,
                }}
                key={`${activeCategory}-${searchTerm}`}
              >
                {filteredCharacters.map(
                  (character) => (
                    <CharacterCard
                      character={character}
                      onOpen={
                        setSelectedCharacter
                      }
                      key={character.id}
                    />
                  )
                )}
              </motion.div>
            ) : (
              <motion.div
                className="characters-empty-state"
                initial={{
                  opacity: 0,
                  y: 20,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                exit={{
                  opacity: 0,
                }}
              >
                <span>無</span>

                <h3>
                  No chronicle found
                </h3>

                <p>
                  Try another search term or
                  category.
                </p>

                <button
                  type="button"
                  onClick={() => {
                    setSearchTerm("");
                    setActiveCategory("All");
                  }}
                >
                  Reset archive
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      <AnimatePresence>
        {selectedCharacter && (
          <CharacterModal
            character={selectedCharacter}
            onClose={() =>
              setSelectedCharacter(null)
            }
            onPrevious={() =>
              changeCharacter(-1)
            }
            onNext={() =>
              changeCharacter(1)
            }
          />
        )}
      </AnimatePresence>
    </main>
  );
}

export default Characters;
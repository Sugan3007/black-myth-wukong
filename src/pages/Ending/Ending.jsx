import {
  useEffect,
  useMemo,
  useState,
} from "react";

import {
  AnimatePresence,
  motion,
} from "framer-motion";

import { useNavigate } from "react-router-dom";

import Navbar from "../../components/layout/Navbar/Navbar";

import chapters from "./chapters";

import ChapterNavigation from "./components/ChapterNavigation";
import ChapterHero from "./components/ChapterHero";
import ChapterVideo from "./components/ChapterVideo";
import ChapterStory from "./components/ChapterStory";
import ChapterCharacters from "./components/ChapterCharacters";
import ChapterCredits from "./components/ChapterCredits";
import ChapterEndingChoices from "./components/ChapterEndingChoices";

import "./Ending.css";

function Ending() {
  const navigate = useNavigate();

  const [activeChapterId, setActiveChapterId] =
    useState(1);

  const [isNavigationOpen, setIsNavigationOpen] =
    useState(false);

  const activeChapter = useMemo(
    () =>
      chapters.find(
        (chapter) =>
          chapter.id === activeChapterId
      ) ?? chapters[0],
    [activeChapterId]
  );

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [activeChapterId]);

  useEffect(() => {
    document.body.style.overflow =
      isNavigationOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [isNavigationOpen]);

  const selectChapter = (chapterId) => {
    setActiveChapterId(chapterId);
    setIsNavigationOpen(false);
  };

  const changeChapter = (direction) => {
    const currentIndex =
      chapters.findIndex(
        (chapter) =>
          chapter.id === activeChapterId
      );

    const nextIndex =
      direction === "next"
        ? (currentIndex + 1) %
          chapters.length
        : (currentIndex -
            1 +
            chapters.length) %
          chapters.length;

    setActiveChapterId(
      chapters[nextIndex].id
    );
  };

  return (
    <main className="ending-page">
      <Navbar />

      <AnimatePresence mode="wait">
        <motion.div
          className="ending-page-background"
          key={activeChapter.id}
          initial={{
            opacity: 0,
            scale: 1.08,
          }}
          animate={{
            opacity: 1,
            scale: 1,
          }}
          exit={{
            opacity: 0,
            scale: 1.04,
          }}
          transition={{
            duration: 1.1,
          }}
        >
          <img
            src={activeChapter.cover}
            alt=""
            aria-hidden="true"
          />

          <div className="ending-page-background-overlay" />
          <div className="ending-page-background-vignette" />
          <div className="ending-page-background-grain" />
        </motion.div>
      </AnimatePresence>

      <button
        type="button"
        className="ending-back-button"
        onClick={() =>
          navigate("/explore/general")
        }
      >
        <span aria-hidden="true">←</span>
        General Information
      </button>

      <button
        type="button"
        className="ending-mobile-chapter-button"
        onClick={() =>
          setIsNavigationOpen(true)
        }
      >
        <span>
          Chapter {activeChapter.roman}
        </span>

        <strong>
          {activeChapter.title}
        </strong>
      </button>

      <aside className="ending-desktop-navigation">
        <ChapterNavigation
          chapters={chapters}
          activeChapterId={activeChapterId}
          onSelectChapter={selectChapter}
        />
      </aside>

      <AnimatePresence mode="wait">
        <motion.div
          className="ending-active-chapter"
          key={activeChapter.id}
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          exit={{
            opacity: 0,
          }}
          transition={{
            duration: 0.5,
          }}
        >
          <ChapterHero
            chapter={activeChapter}
          />

          <div className="ending-content-wrapper">
            <ChapterVideo
              chapter={activeChapter}
            />

            <ChapterStory
              chapter={activeChapter}
            />

            <ChapterEndingChoices
              chapter={activeChapter}
            />

            <ChapterCharacters
              chapter={activeChapter}
            />

            <ChapterCredits
              chapter={activeChapter}
            />

            <section className="ending-chapter-controls">
              <button
                type="button"
                onClick={() =>
                  changeChapter("previous")
                }
              >
                <span>←</span>

                <div>
                  <small>
                    Previous chapter
                  </small>

                  <strong>
                    {
                      chapters[
                        (chapters.findIndex(
                          (chapter) =>
                            chapter.id ===
                            activeChapterId
                        ) -
                          1 +
                          chapters.length) %
                          chapters.length
                      ].title
                    }
                  </strong>
                </div>
              </button>

              <button
                type="button"
                onClick={() =>
                  changeChapter("next")
                }
              >
                <div>
                  <small>Next chapter</small>

                  <strong>
                    {
                      chapters[
                        (chapters.findIndex(
                          (chapter) =>
                            chapter.id ===
                            activeChapterId
                        ) +
                          1) %
                          chapters.length
                      ].title
                    }
                  </strong>
                </div>

                <span>→</span>
              </button>
            </section>
          </div>
        </motion.div>
      </AnimatePresence>

      <AnimatePresence>
        {isNavigationOpen && (
          <motion.div
            className="ending-mobile-navigation-overlay"
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            exit={{
              opacity: 0,
            }}
          >
            <motion.div
              className="ending-mobile-navigation-panel"
              initial={{
                y: "100%",
              }}
              animate={{
                y: 0,
              }}
              exit={{
                y: "100%",
              }}
              transition={{
                duration: 0.45,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              <header>
                <span>Select chapter</span>

                <button
                  type="button"
                  onClick={() =>
                    setIsNavigationOpen(
                      false
                    )
                  }
                >
                  ×
                </button>
              </header>

              <ChapterNavigation
                chapters={chapters}
                activeChapterId={
                  activeChapterId
                }
                onSelectChapter={
                  selectChapter
                }
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}

export default Ending;
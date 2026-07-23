import { motion } from "framer-motion";

function ChapterNavigation({
  chapters,
  activeChapterId,
  onSelectChapter,
}) {
  return (
    <nav
      className="ending-chapter-navigation"
      aria-label="Ending chapters"
    >
      <div className="ending-chapter-navigation-line" />

      {chapters.map((chapter) => {
        const isActive =
          activeChapterId === chapter.id;

        return (
          <motion.button
            type="button"
            className={`ending-chapter-navigation-button ${
              isActive
                ? "ending-chapter-navigation-button--active"
                : ""
            }`}
            onClick={() =>
              onSelectChapter(chapter.id)
            }
            whileHover={{
              x: 7,
            }}
            whileTap={{
              scale: 0.97,
            }}
            key={chapter.id}
          >
            <span className="ending-chapter-navigation-roman">
              {chapter.roman}
            </span>

            <span className="ending-chapter-navigation-copy">
              <small>{chapter.chapter}</small>
              <strong>{chapter.title}</strong>
            </span>
          </motion.button>
        );
      })}
    </nav>
  );
}

export default ChapterNavigation;
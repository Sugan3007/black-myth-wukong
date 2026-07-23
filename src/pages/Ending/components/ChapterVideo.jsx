import { motion } from "framer-motion";

function ChapterVideo({ chapter }) {
  const hasVideo = Boolean(
    chapter.videoUrl?.trim()
  );

  return (
    <motion.section
      id="chapter-video"
      className="ending-content-section ending-video-section"
      initial={{
        opacity: 0,
        y: 60,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
        amount: 0.2,
      }}
      transition={{
        duration: 0.9,
        ease: [0.16, 1, 0.3, 1],
      }}
    >
      <header className="ending-section-heading">
        <span className="ending-section-eyebrow">
          Original Chapter Animation
        </span>

        <h2>{chapter.animationTitle}</h2>

        <p>
          The cinematic animation concluding{" "}
          {chapter.title}.
        </p>
      </header>

      <div className="ending-video-frame">
        {hasVideo ? (
          <iframe
            src={chapter.videoUrl}
            title={`${chapter.animationTitle} ending animation`}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          />
        ) : (
          <div className="ending-video-placeholder">
            <div className="ending-video-placeholder-icon">
              ▶
            </div>

            <span>Video ready area</span>

            <h3>
              {chapter.animationTitle}
            </h3>

            <p>
              Add the YouTube embed URL inside
              this chapter&apos;s{" "}
              <code>videoUrl</code> property.
            </p>

            <small>
              Search title:{" "}
              {chapter.videoSearchTitle}
            </small>
          </div>
        )}

        <div className="ending-video-corner ending-video-corner--top-left" />
        <div className="ending-video-corner ending-video-corner--top-right" />
        <div className="ending-video-corner ending-video-corner--bottom-left" />
        <div className="ending-video-corner ending-video-corner--bottom-right" />
      </div>
    </motion.section>
  );
}

export default ChapterVideo;
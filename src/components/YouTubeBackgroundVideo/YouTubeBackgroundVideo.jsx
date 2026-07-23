import { useEffect, useRef, useState } from "react";
import "./YouTubeBackgroundVideo.css";

function YouTubeBackgroundVideo({
  videoId,
  title = "Background video",
  overlay = true,
  children,
}) {
  const playerContainerRef = useRef(null);
  const playerRef = useRef(null);

  const [isReady, setIsReady] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);

  useEffect(() => {
    let player = null;

    const createPlayer = () => {
      if (
        !window.YT ||
        !window.YT.Player ||
        !playerContainerRef.current
      ) {
        return;
      }

      player = new window.YT.Player(playerContainerRef.current, {
        videoId,

        playerVars: {
          autoplay: 1,
          mute: 1,
          controls: 0,
          loop: 1,
          playlist: videoId,
          modestbranding: 1,
          rel: 0,
          playsinline: 1,
          disablekb: 1,
          fs: 0,
          iv_load_policy: 3,
        },

        events: {
          onReady: (event) => {
            playerRef.current = event.target;

            event.target.mute();
            event.target.playVideo();

            setIsReady(true);
          },

          onStateChange: (event) => {
            if (
              event.data === window.YT.PlayerState.ENDED
            ) {
              event.target.seekTo(0);
              event.target.playVideo();
            }
          },

          onError: (event) => {
            console.error(
              "YouTube player error:",
              event.data
            );
          },
        },
      });
    };

    if (window.YT && window.YT.Player) {
      createPlayer();
    } else {
      const existingScript = document.querySelector(
        'script[src="https://www.youtube.com/iframe_api"]'
      );

      if (!existingScript) {
        const script = document.createElement("script");

        script.src =
          "https://www.youtube.com/iframe_api";

        script.async = true;

        document.body.appendChild(script);
      }

      const previousCallback =
        window.onYouTubeIframeAPIReady;

      window.onYouTubeIframeAPIReady = () => {
        if (typeof previousCallback === "function") {
          previousCallback();
        }

        createPlayer();
      };
    }

    return () => {
      if (playerRef.current) {
        playerRef.current.destroy();
        playerRef.current = null;
      }

      player = null;
    };
  }, [videoId]);

  useEffect(() => {
    const handleFullscreenChange = () => {
      const fullscreenElement =
        document.fullscreenElement ||
        document.webkitFullscreenElement;

      const fullscreenActive = Boolean(
        fullscreenElement
      );

      setIsFullscreen(fullscreenActive);

      if (!fullscreenActive && playerRef.current) {
        playerRef.current.mute();
        playerRef.current.playVideo();
      }
    };

    document.addEventListener(
      "fullscreenchange",
      handleFullscreenChange
    );

    document.addEventListener(
      "webkitfullscreenchange",
      handleFullscreenChange
    );

    return () => {
      document.removeEventListener(
        "fullscreenchange",
        handleFullscreenChange
      );

      document.removeEventListener(
        "webkitfullscreenchange",
        handleFullscreenChange
      );
    };
  }, []);

  const openFullscreen = async () => {
    const section = playerContainerRef.current?.parentElement;

    if (!section || !playerRef.current) {
      return;
    }

    try {
      playerRef.current.unMute();
      playerRef.current.setVolume(100);
      playerRef.current.playVideo();

      if (section.requestFullscreen) {
        await section.requestFullscreen();
      } else if (section.webkitRequestFullscreen) {
        section.webkitRequestFullscreen();
      }

      setIsFullscreen(true);
    } catch (error) {
      console.error(
        "Fullscreen could not be opened:",
        error
      );
    }
  };

  return (
    <section
      className={`youtube-video-section ${
        isFullscreen
          ? "youtube-video-section--fullscreen"
          : ""
      }`}
    >
      <div className="youtube-video-frame">
        <div ref={playerContainerRef} />
      </div>

      {overlay && (
        <div className="youtube-video-overlay" />
      )}

      {!isReady && (
        <div className="youtube-video-loading">
          Loading video...
        </div>
      )}

      <div className="youtube-video-content">
        {children}
      </div>

      <button
        type="button"
        className="youtube-video-click-layer"
        onClick={openFullscreen}
        aria-label={`Play ${title} in fullscreen with audio`}
      >
        <span className="youtube-video-play-button">
          <span className="youtube-video-play-icon">
            ▶
          </span>

          <span className="youtube-video-play-text">
            Watch with sound
          </span>
        </span>
      </button>

      {isFullscreen && (
        <button
          type="button"
          className="youtube-video-close"
          onClick={() => {
            if (document.exitFullscreen) {
              document.exitFullscreen();
            } else if (
              document.webkitExitFullscreen
            ) {
              document.webkitExitFullscreen();
            }
          }}
          aria-label="Exit fullscreen"
        >
          ×
        </button>
      )}
    </section>
  );
}

export default YouTubeBackgroundVideo;
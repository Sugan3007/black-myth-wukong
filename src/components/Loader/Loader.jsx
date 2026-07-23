import { useEffect, useState } from "react";
import "./Loader.css";

function Loader({ onComplete }) {
  const [isClosing, setIsClosing] = useState(false);

  useEffect(() => {
    const closeTimer = setTimeout(() => {
      setIsClosing(true);
    }, 2500);

    const completeTimer = setTimeout(() => {
      onComplete?.();
    }, 3200);

    return () => {
      clearTimeout(closeTimer);
      clearTimeout(completeTimer);
    };
  }, [onComplete]);

  return (
    <div className={`site-loader ${isClosing ? "site-loader--closing" : ""}`}>
      <div className="site-loader__noise" />

      <div className="site-loader__glow site-loader__glow--one" />
      <div className="site-loader__glow site-loader__glow--two" />

      <div className="site-loader__content">
        <div className="site-loader__logo-wrap">
          <span className="site-loader__ring site-loader__ring--outer" />
          <span className="site-loader__ring site-loader__ring--inner" />

          <img
            src="/images/logo/wukong-logo.png"
            alt="Black Myth Wukong"
            className="site-loader__logo"
          />
        </div>

        <div className="site-loader__title">
          <span>BLACK MYTH</span>
          <strong>WUKONG</strong>
        </div>

        <div className="site-loader__divider">
          <span />
          <i />
          <span />
        </div>

        <p className="site-loader__text">
          The journey to the west begins
        </p>

        <div className="site-loader__progress">
          <span className="site-loader__progress-bar" />
        </div>

        <span className="site-loader__loading-text">
          AWAKENING
        </span>
      </div>
    </div>
  );
}

export default Loader;
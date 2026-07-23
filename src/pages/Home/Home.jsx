import { useEffect, useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
} from "framer-motion";
import { useLocation } from "react-router-dom";

import Navbar from "../../components/layout/Navbar/Navbar";

import Explore from "../Explore/Explore";
import Equipment from "../Equipment/Equipment";
import Bosses from "../Bosses/Bosses";
import Overview from "../Overview/Overview";
import Items from "../Items/Items";
import Media from "../Media/Media";

import "./Home.css";

function Home() {
  const heroScrollRef = useRef(null);
  const location = useLocation();

  const { scrollYProgress: heroProgress } = useScroll({
    target: heroScrollRef,
    offset: ["start start", "end start"],
  });

  /*
   * The video remains visible while a black layer slowly covers it.
   * Near the end, the complete hero fades away into the black bridge.
   */
  const heroOpacity = useTransform(
    heroProgress,
    [0, 0.78, 0.94, 1],
    [1, 1, 0.45, 0]
  );

  const heroScale = useTransform(
    heroProgress,
    [0, 1],
    [1, 1.07]
  );

  const heroBlur = useTransform(
    heroProgress,
    [0, 0.58, 1],
    ["blur(0px)", "blur(1px)", "blur(7px)"]
  );

  const blackFadeOpacity = useTransform(
    heroProgress,
    [0, 0.38, 0.76, 1],
    [0.05, 0.12, 0.82, 1]
  );

  const logoOpacity = useTransform(
    heroProgress,
    [0, 0.38, 0.7],
    [1, 1, 0]
  );

  const logoY = useTransform(
    heroProgress,
    [0, 1],
    [0, -50]
  );

  const scrollIndicatorOpacity = useTransform(
    heroProgress,
    [0, 0.16, 0.38],
    [1, 1, 0]
  );

  useEffect(() => {
    const hash = location.hash.replace("#", "");

    if (!hash) {
      return;
    }

    const timeout = window.setTimeout(() => {
      const section = document.getElementById(hash);

      if (section) {
        section.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    }, 100);

    return () => {
      window.clearTimeout(timeout);
    };
  }, [location.hash]);

  return (
    <main className="home-page">
      <Navbar />

      <section
        ref={heroScrollRef}
        id="home"
        className="home-hero-scroll-area"
      >
        <motion.div
          className="home-hero"
          style={{
            opacity: heroOpacity,
            scale: heroScale,
            filter: heroBlur,
          }}
        >
          <video
            className="home-background-video"
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            poster="/images/home/hero-fallback.jpg"
            aria-hidden="true"
          >
            <source
              src="/videos/home-bg.mp4"
              type="video/mp4"
            />
          </video>

          <div className="home-video-overlay" />
          <div className="home-top-overlay" />
          <div className="home-left-shadow" />
          <div className="home-right-shadow" />
          <div className="home-bottom-shadow" />

          <motion.div
            className="home-black-fade"
            style={{
              opacity: blackFadeOpacity,
            }}
            aria-hidden="true"
          />

          <motion.div
            className="home-logo-wrapper"
            style={{
              opacity: logoOpacity,
              y: logoY,
            }}
            initial={{
              x: 80,
              scale: 0.9,
              filter: "blur(10px)",
            }}
            animate={{
              x: 0,
              scale: 1,
              filter: "blur(0px)",
            }}
            transition={{
              duration: 1.4,
              delay: 0.45,
              ease: [0.16, 1, 0.3, 1],
            }}
          >
            <img
              src="/images/logo/wukong-logo.png"
              alt="Black Myth Wukong"
              className="home-main-logo"
            />

            <motion.div
              className="home-logo-line"
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
                delay: 1.25,
              }}
            >
              <span />
              <i />
              <span />
            </motion.div>
          </motion.div>

          <motion.div
            className="home-scroll-indicator"
            style={{
              opacity: scrollIndicatorOpacity,
            }}
            initial={{
              y: 15,
            }}
            animate={{
              y: 0,
            }}
            transition={{
              duration: 0.8,
              delay: 1.7,
            }}
          >
            <div className="home-scroll-mouse">
              <span />
            </div>

            <p>Scroll to explore</p>

            <div className="home-scroll-line" />
          </motion.div>
        </motion.div>
      </section>

      {/*
       * A separate black bridge gives Home and Explore a clear boundary.
       * It also prevents the navbar active state from switching too quickly.
       */}
      <section
        className="home-black-transition"
        aria-hidden="true"
      >
        <div className="home-black-transition-glow" />
      </section>

      <Explore />
      <Equipment />
      <Bosses />
      <Overview />
      <Items />
      <Media />
    </main>
  );
}

export default Home;

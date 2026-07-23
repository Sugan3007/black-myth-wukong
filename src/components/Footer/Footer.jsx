import { FiGithub, FiLinkedin, FiInstagram, FiArrowUp } from "react-icons/fi";
import { useLocation, useNavigate } from "react-router-dom";
import "./Footer.css";

const quickLinks = [
  { label: "Home", sectionId: "home" },
  { label: "Explore", sectionId: "explore" },
  { label: "Equipment", sectionId: "equipment" },
  { label: "Bosses", sectionId: "bosses" },
  { label: "Overview", sectionId: "overview" },
  { label: "Items", sectionId: "items" },
  { label: "Media", sectionId: "media" },
];

function Footer() {
  const location = useLocation();
  const navigate = useNavigate();

  const scrollToSection = (sectionId) => {
    const performScroll = () => {
      const section = document.getElementById(sectionId);

      if (!section) {
        return false;
      }

      const navbarHeight =
        document.querySelector(".navbar")?.offsetHeight || 80;

      const sectionTop =
        section.getBoundingClientRect().top +
        window.scrollY -
        navbarHeight;

      window.scrollTo({
        top: sectionTop,
        behavior: "smooth",
      });

      return true;
    };

    if (location.pathname === "/") {
      window.history.replaceState(
        null,
        "",
        `/#${sectionId}`
      );

      performScroll();
      return;
    }

    navigate(`/#${sectionId}`);
  };

  const scrollToTop = () => {
    window.history.replaceState(
      null,
      "",
      location.pathname
    );

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="site-footer">
      <div className="site-footer__glow" aria-hidden="true" />

      <div className="site-footer__container">
        <div className="site-footer__top">
          <section className="site-footer__brand">
            <div className="site-footer__logo-row">
              <span
                className="site-footer__symbol"
                aria-hidden="true"
              >
                悟
              </span>

              <h2>Sugan</h2>
            </div>

            <p className="site-footer__role">
             Designer • Developer • Editor
            </p>

            <p className="site-footer__description">
             Turning ideas into digital experiences.
            </p>
          </section>

          <section className="site-footer__links">
            <h3>Quick Links</h3>

            <nav aria-label="Footer navigation">
              {quickLinks.map((item) => (
                <button
                  key={item.sectionId}
                  type="button"
                  onClick={() =>
                    scrollToSection(item.sectionId)
                  }
                >
                  {item.label}
                </button>
              ))}
            </nav>
          </section>

          <section className="site-footer__connect">
            <h3>Connect</h3>

            <div className="site-footer__socials">
              <a
                href="https://github.com/Sugan3007"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
              >
                <FiGithub />
              </a>

              <a
                href="https://www.linkedin.com/in/sugantha-balan-m-0630a9357?utm_source=share_via&utm_content=profile&utm_medium=member_android"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
              >
                <FiLinkedin />
              </a>

              <a
                href="https://www.instagram.com/classy_sugan_?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw%3D%3D"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
              >
                <FiInstagram />
              </a>
            </div>
          </section>
        </div>

        <div className="site-footer__bottom">
          <p>
            © {new Date().getFullYear()} Black Myth: Wukong
            Encyclopedia. All Rights Reserved.
          </p>

          <button
            type="button"
            className="site-footer__top-button"
            onClick={scrollToTop}
            aria-label="Back to top"
          >
            <FiArrowUp />
          </button>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

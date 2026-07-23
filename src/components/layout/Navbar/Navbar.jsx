import {
  useEffect,
  useState,
} from "react";

import {
  NavLink,
  useLocation,
  useNavigate,
} from "react-router-dom";

import {
  AnimatePresence,
  motion,
} from "framer-motion";

import "./Navbar.css";

const navigationItems = [
  {
    title: "Home",
    sectionId: "home",
  },
  {
    title: "Explore",
    sectionId: "explore",
    routePrefix: "/explore",
    children: [
      {
        title: "General Information",
        path: "/explore/general",
      },
      {
        title: "Characters",
        path: "/explore/characters",
      },
      {
        title: "Enemies",
        path: "/explore/enemies",
      },
      {
        title: "Locations",
        path: "/explore/locations",
      },
    ],
  },
  {
    title: "Equipment",
    sectionId: "equipment",
    routePrefix: "/equipment",
    children: [
      {
        title: "Relics",
        path: "/equipment/relics",
      },
      {
        title: "Weapons",
        path: "/equipment/weapons",
      },
      {
        title: "Armors",
        path: "/equipment/armors",
      },
      {
        title: "Gourds",
        path: "/equipment/gourds",
      },
      {
        title: "Curios",
        path: "/equipment/curios",
      },
      {
        title: "Vessels",
        path: "/equipment/vessels",
      },
      {
        title: "Spirits",
        path: "/equipment/spirits",
      },
    ],
  },
  {
  title: "Bosses",
  sectionId: "bosses",
  routePrefix: "/bosses",
  children: [
    {
      title: "Final",
      path: "/bosses/final",
    },
    {
      title: "Secert",
      path: "/bosses/secert",
    },
    {
      title: "Loong",
      path: "/bosses/loong",
    },
  ],
},
  {
    title: "Overview",
    sectionId: "overview",
    routePrefix: "/overview",
  },
  {
    title: "Items",
    sectionId: "items",
    routePrefix: "/items",
    children: [
      {
        title: "Medicines",
        path: "/items/medicines",
      },
      {
        title: "Key Items",
        path: "/items/key-items",
      },
      {
        title: "Materials",
        path: "/items/materials",
      },
      {
        title: "Ingredients",
        path: "/items/ingredients",
      },
    ],
  },
 {
  title: "Media",
  sectionId: "media",
  routePrefix: "/media",
},
];

const sectionIds = navigationItems
  .map((item) => item.sectionId)
  .filter(Boolean);

function ChevronIcon() {
  return (
    <svg
      className="navbar-chevron"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path
        d="M7 10l5 5 5-5"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function SearchIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <circle
        cx="11"
        cy="11"
        r="7"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
      />

      <path
        d="m16.5 16.5 4 4"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
      />
    </svg>
  );
}

function Navbar() {
  const location = useLocation();
  const navigate = useNavigate();

  const [mobileMenuOpen, setMobileMenuOpen] =
    useState(false);

  const [
    openMobileDropdown,
    setOpenMobileDropdown,
  ] = useState(null);

  const [scrolled, setScrolled] =
    useState(false);

  const [activeSection, setActiveSection] =
    useState("home");

  /*
   * Add solid/blur navbar appearance
   * after the user starts scrolling.
   */
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 15);
    };

    handleScroll();

    window.addEventListener(
      "scroll",
      handleScroll,
      {
        passive: true,
      }
    );

    return () => {
      window.removeEventListener(
        "scroll",
        handleScroll
      );
    };
  }, []);

  /*
   * Detect which Home page section is
   * currently visible.
   */
  useEffect(() => {
    if (location.pathname !== "/") {
      return undefined;
    }

    const sections = sectionIds
      .map((sectionId) =>
        document.getElementById(sectionId)
      )
      .filter(Boolean);

    if (!sections.length) {
      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntries = entries
          .filter((entry) => entry.isIntersecting)
          .sort(
            (first, second) =>
              second.intersectionRatio -
              first.intersectionRatio
          );

        if (visibleEntries.length > 0) {
          setActiveSection(
            visibleEntries[0].target.id
          );
        }
      },
      {
        root: null,
        rootMargin: "-30% 0px -55% 0px",
        threshold: [
          0,
          0.1,
          0.25,
          0.5,
          0.75,
        ],
      }
    );

    sections.forEach((section) => {
      observer.observe(section);
    });

    return () => {
      observer.disconnect();
    };
  }, [location.pathname]);

  /*
   * Close mobile navigation whenever
   * the route or hash changes.
   */
  useEffect(() => {
    setMobileMenuOpen(false);
    setOpenMobileDropdown(null);
  }, [
    location.pathname,
    location.hash,
  ]);

  /*
   * Prevent page scrolling while
   * mobile menu is open.
   */
  useEffect(() => {
    const originalOverflow =
      document.body.style.overflow;

    document.body.style.overflow =
      mobileMenuOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow =
        originalOverflow;
    };
  }, [mobileMenuOpen]);

  /*
   * Scroll to a section on the Home page.
   *
   * If currently inside a detail route,
   * first navigate to Home and then scroll.
   */
 const scrollToSection = (sectionId) => {
  setMobileMenuOpen(false);
  setOpenMobileDropdown(null);
  setActiveSection(sectionId);

  const performScroll = () => {
    const section = document.getElementById(sectionId);

    if (!section) {
      return false;
    }

    const navbarHeight =
      document.querySelector(".navbar")?.offsetHeight || 80;

    const sectionPosition =
      section.getBoundingClientRect().top +
      window.scrollY -
      navbarHeight;

    window.scrollTo({
      top: sectionPosition,
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

  /*
   * After returning to Home from a detail
   * route, scroll to the hash section.
   */
  useEffect(() => {
    if (
      location.pathname !== "/" ||
      !location.hash
    ) {
      return undefined;
    }

    const sectionId =
      location.hash.replace("#", "");

    let attempts = 0;
    const maximumAttempts = 20;

    const scrollInterval =
      window.setInterval(() => {
        attempts += 1;

        const section =
          document.getElementById(sectionId);

        if (section) {
          window.clearInterval(
            scrollInterval
          );

          window.requestAnimationFrame(
            () => {
             const navbarHeight =
  document.querySelector(".navbar")?.offsetHeight || 80;

const sectionPosition =
  section.getBoundingClientRect().top +
  window.scrollY -
  navbarHeight;

window.scrollTo({
  top: sectionPosition,
  behavior: "smooth",
});
            }
          );

          setActiveSection(sectionId);
          return;
        }

        if (
          attempts >= maximumAttempts
        ) {
          window.clearInterval(
            scrollInterval
          );
        }
      }, 50);

    return () => {
      window.clearInterval(
        scrollInterval
      );
    };
  }, [
    location.pathname,
    location.hash,
  ]);

  const toggleMobileDropdown = (
    title
  ) => {
    setOpenMobileDropdown((current) =>
      current === title
        ? null
        : title
    );
  };

  const isMainItemActive = (item) => {
   if (item.path === "/media") {
  return location.pathname === "/media";
}

if (location.pathname === "/") {
  return Boolean(
    item.sectionId &&
    activeSection === item.sectionId
  );
}
    if (!item.routePrefix) {
      return false;
    }

    return location.pathname.startsWith(
      item.routePrefix
    );
  };

const handleMainItemClick = (item) => {
  setMobileMenuOpen(false);
  setOpenMobileDropdown(null);

  if (item.path) {
    navigate(item.path);
    return;
  }

  if (item.routePrefix && !item.sectionId) {
    navigate(item.routePrefix);
    return;
  }

  if (item.sectionId) {
    scrollToSection(item.sectionId);
  }
};

  const handleSearchClick = () => {
    /*
     * Search functionality can be connected
     * here later.
     */
    console.log(
      "Open encyclopedia search"
    );
  };

  return (
    <motion.header
      className={[
        "navbar",
        scrolled
          ? "navbar--scrolled"
          : "",
        mobileMenuOpen
          ? "navbar--menu-open"
          : "",
      ]
        .filter(Boolean)
        .join(" ")}
      initial={{
        opacity: 0,
        y: -30,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1],
      }}
    >
      <div className="navbar-container">
        {/* Desktop navigation */}
        <nav
          className="navbar-desktop"
          aria-label="Main navigation"
        >
          {navigationItems.map((item) => {
            const isActive =
              isMainItemActive(item);

            return (
              <div
                className="navbar-item"
                key={item.title}
              >
                <button
                  type="button"
                  className={[
                    "navbar-link",
                    "navbar-scroll-button",
                    isActive
                      ? "navbar-link--active"
                      : "",
                  ]
                    .filter(Boolean)
                    .join(" ")}
                  onClick={() =>
                    handleMainItemClick(item)
                  }
                  aria-current={
                    isActive
                      ? "page"
                      : undefined
                  }
                >
                  <span>
                    {item.title}
                  </span>

                  {item.children && (
                    <ChevronIcon />
                  )}
                </button>

                {item.children && (
                  <div className="navbar-dropdown">
                    <div className="navbar-dropdown-inner">
                      {item.children.map(
                        (child) => (
                          <NavLink
                            to={child.path}
                            className={({
                              isActive:
                                childActive,
                            }) =>
                              [
                                "navbar-dropdown-link",
                                childActive
                                  ? "navbar-dropdown-link--active"
                                  : "",
                              ]
                                .filter(Boolean)
                                .join(" ")
                            }
                            key={child.path}
                          >
                            {child.title}
                          </NavLink>
                        )
                      )}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </nav>

        {/* Search */}
        <button
          className="navbar-search"
          type="button"
          aria-label="Open search"
          onClick={handleSearchClick}
        >
          <SearchIcon />
        </button>

        {/* Mobile menu button */}
        <button
          className={[
            "navbar-toggle",
            mobileMenuOpen
              ? "navbar-toggle--active"
              : "",
          ]
            .filter(Boolean)
            .join(" ")}
          type="button"
          aria-label={
            mobileMenuOpen
              ? "Close navigation menu"
              : "Open navigation menu"
          }
          aria-expanded={
            mobileMenuOpen
          }
          aria-controls="mobile-navigation"
          onClick={() =>
            setMobileMenuOpen(
              (current) => !current
            )
          }
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      {/* Mobile navigation */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            id="mobile-navigation"
            className="mobile-navigation"
            initial={{
              opacity: 0,
              x: "100%",
            }}
            animate={{
              opacity: 1,
              x: 0,
            }}
            exit={{
              opacity: 0,
              x: "100%",
            }}
            transition={{
              duration: 0.35,
              ease: [
                0.22,
                1,
                0.36,
                1,
              ],
            }}
          >
            <nav
              className="mobile-navigation-inner"
              aria-label="Mobile navigation"
            >
              {navigationItems.map(
                (item) => {
                  const isActive =
                    isMainItemActive(item);

                  const isDropdownOpen =
                    openMobileDropdown ===
                    item.title;

                  return (
                    <div
                      className="mobile-navigation-group"
                      key={item.title}
                    >
                      <div className="mobile-navigation-row">
                        <button
                          type="button"
                          className={[
                            "mobile-navigation-link",
                            "mobile-navigation-scroll-button",
                            isActive
                              ? "mobile-navigation-link--active"
                              : "",
                          ]
                            .filter(Boolean)
                            .join(" ")}
                          onClick={() =>
                            handleMainItemClick(item)
                          }
                        >
                          {item.title}
                        </button>

                        {item.children && (
                          <button
                            type="button"
                            className={[
                              "mobile-dropdown-button",
                              isDropdownOpen
                                ? "mobile-dropdown-button--open"
                                : "",
                            ]
                              .filter(Boolean)
                              .join(" ")}
                            aria-label={`Toggle ${item.title} submenu`}
                            aria-expanded={
                              isDropdownOpen
                            }
                            onClick={() =>
                              toggleMobileDropdown(
                                item.title
                              )
                            }
                          >
                            <ChevronIcon />
                          </button>
                        )}
                      </div>

                      <AnimatePresence
                        initial={false}
                      >
                        {item.children &&
                          isDropdownOpen && (
                            <motion.div
                              className="mobile-submenu"
                              initial={{
                                height: 0,
                                opacity: 0,
                              }}
                              animate={{
                                height: "auto",
                                opacity: 1,
                              }}
                              exit={{
                                height: 0,
                                opacity: 0,
                              }}
                              transition={{
                                duration: 0.25,
                                ease: [
                                  0.22,
                                  1,
                                  0.36,
                                  1,
                                ],
                              }}
                            >
                              {item.children.map(
                                (child) => (
                                  <NavLink
                                    to={
                                      child.path
                                    }
                                    className={({
                                      isActive:
                                        childActive,
                                    }) =>
                                      [
                                        "mobile-submenu-link",
                                        childActive
                                          ? "mobile-submenu-link--active"
                                          : "",
                                      ]
                                        .filter(
                                          Boolean
                                        )
                                        .join(
                                          " "
                                        )
                                    }
                                    key={
                                      child.path
                                    }
                                  >
                                    {
                                      child.title
                                    }
                                  </NavLink>
                                )
                              )}
                            </motion.div>
                          )}
                      </AnimatePresence>
                    </div>
                  );
                }
              )}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}

export default Navbar;
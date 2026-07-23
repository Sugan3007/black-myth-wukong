import { Link } from "react-router-dom";

import "./Breadcrumb.css";

function Breadcrumb({ items = [] }) {
  return (
    <nav
      className="breadcrumb"
      aria-label="Breadcrumb"
    >
      <Link
        to="/"
        className="breadcrumb-link"
      >
        Home
      </Link>

      {items.map((item, index) => {
        const isLast = index === items.length - 1;

        return (
          <span
            className="breadcrumb-item"
            key={`${item.label}-${index}`}
          >
            <span className="breadcrumb-separator">
              /
            </span>

            {isLast || !item.path ? (
              <span className="breadcrumb-current">
                {item.label}
              </span>
            ) : (
              <Link
                to={item.path}
                className="breadcrumb-link"
              >
                {item.label}
              </Link>
            )}
          </span>
        );
      })}
    </nav>
  );
}

export default Breadcrumb;
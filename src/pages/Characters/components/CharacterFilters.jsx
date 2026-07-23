function CharacterFilters({
  categories,
  activeCategory,
  onCategoryChange,
  searchTerm,
  onSearchChange,
  resultCount,
}) {
  return (
    <div className="character-toolbar">
      <div
        className="character-filter-list"
        role="group"
        aria-label="Filter characters"
      >
        {categories.map((category) => (
          <button
            type="button"
            className={
              activeCategory === category
                ? "character-filter character-filter--active"
                : "character-filter"
            }
            onClick={() => onCategoryChange(category)}
            key={category}
          >
            {category}
          </button>
        ))}
      </div>

      <label className="character-search">
        <span className="sr-only">Search characters</span>

        <svg viewBox="0 0 24 24" aria-hidden="true">
          <circle
            cx="11"
            cy="11"
            r="6.5"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.4"
          />
          <path
            d="m16 16 4 4"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.4"
            strokeLinecap="round"
          />
        </svg>

        <input
          type="search"
          value={searchTerm}
          onChange={(event) => onSearchChange(event.target.value)}
          placeholder="Search the archive"
        />

        <small>{String(resultCount).padStart(2, "0")}</small>
      </label>
    </div>
  );
}

export default CharacterFilters;

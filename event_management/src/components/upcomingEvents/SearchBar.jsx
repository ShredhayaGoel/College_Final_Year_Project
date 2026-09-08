import React from "react";
import "../../styles/searchBar.css";

import {
  Search,
  SlidersHorizontal,
} from "lucide-react";

const SearchBar = () => {
  return (
    <div className="search-section">

      <div className="search-input">

        <Search size={22} className="search-icon" />

        <input
          type="text"
          placeholder="Search events by name, location..."
        />

      </div>

      <button className="filter-btn">

        <SlidersHorizontal size={20} />

        Filters

      </button>

      <button className="search-btn">

        Search

      </button>

    </div>
  );
};

export default SearchBar;
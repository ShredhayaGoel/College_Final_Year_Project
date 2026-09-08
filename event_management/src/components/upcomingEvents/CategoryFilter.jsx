import React from "react";
import "../../styles/categoryFilter.css";

const categories = [
  "All",
  "Technology",
  "Food & Beverage",
  "Business",
  "Music",
  "Sports",
  "Fashion",
];

const CategoryFilter = ({
  selectedCategory,
  setSelectedCategory,
}) => {
  return (
    <div className="category-section">

      {categories.map((category) => (

        <button
          key={category}
          className={
            selectedCategory === category
              ? "category-btn active"
              : "category-btn"
          }
          onClick={() => setSelectedCategory(category)}
        >
          {category}
        </button>

      ))}

    </div>
  );
};

export default CategoryFilter;
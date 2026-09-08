import React from "react";

import { useNavigate } from "react-router";
import { Star, MapPin, ExternalLink } from "lucide-react";
import shops from "./shopsData"
import "../../styles/shopcard.css"

const ShopsCard = ({shop}) => {
  const navigate = useNavigate();

  return (
    <div className="shop-card" key={shop.id}>
      {/* Top Header Section (Image + Title + External Link) */}
      <div className="shop-header">
        <img className="shop-thumb" src={shop.image} alt={shop.name} />

        <div className="shop-title-area">
          <div className="shop-title-row">
            <h3>{shop.name}</h3>
            <button
              className="icon-link-btn"
              onClick={() => navigate(`/shops/${shop.id}`)}
              aria-label="View Shop Details"
            >
              <ExternalLink size={18} />
            </button>
          </div>

          <span className="category-badge">{shop.category}</span>
        </div>
      </div>

      {/* Body Details (Rating & Location) */}
      <div className="shop-details">
        {/* Rating */}
        <div className="rating-row">
          <div className="stars">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                size={16}
                fill={i < Math.floor(shop.rating) ? "#FFC107" : "none"}
                color="#FFC107"
              />
            ))}
          </div>
          <span className="rating-text">
            {shop.rating} ({shop.reviewsCount} reviews)
          </span>
        </div>

        {/* Location */}
        <div className="location-row">
          <MapPin size={16} />
          <span>{shop.city}</span>
        </div>
      </div>

      {/* Bottom Quote Box */}
      {shop.quote && (
        <div className="quote-box">
          <p>"{shop.quote}"</p>
        </div>
      )}
    </div>
  );
};

export default ShopsCard;
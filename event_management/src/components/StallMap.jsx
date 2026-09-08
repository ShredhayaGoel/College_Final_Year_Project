import React, { useState, useEffect } from "react";
import StallMapSVG from "../assets/StallMap.svg?react";
import "../styles/stallMap.css";

function StallMap({ selectedStalls, setSelectedStalls }) {

  const toggleStall = (id) => {
    setSelectedStalls((prev) =>
      prev.includes(id)
        ? prev.filter((stall) => stall !== id)
        : [...prev, id]
    );
  };

  useEffect(() => {

    const stalls = document.querySelectorAll("rect[id]");

    const handleClick = (e) => {
      toggleStall(e.target.id);
    };

    stalls.forEach((stall) => {
      stall.style.cursor = "pointer";
      stall.addEventListener("click", handleClick);
    });

    return () => {
      stalls.forEach((stall) => {
        stall.removeEventListener("click", handleClick);
      });
    };

  }, []);

  useEffect(() => {

    const stalls = document.querySelectorAll("rect[id]");

    stalls.forEach((stall) => {

      if (selectedStalls.includes(stall.id)) {
        stall.setAttribute("fill", "#FFD700");
      } else {
        stall.setAttribute("fill", "#14AE5C");
      }

    });

  }, [selectedStalls]);

  return (
    <div className="stall-map-container">
      <StallMapSVG className="stall-map" />
    </div>
  );
}

export default StallMap;
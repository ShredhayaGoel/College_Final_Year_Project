import React, { useState } from "react";
import "../styles/home.css";

const Home = () => {
  const [search, setSearch] = useState("");

  return (
    <div className="event-page">

      {/* Hero Section */}
      <section className="hero">
        
        {/* Top Badge */}
        <div className="hero-badge">
          <span>✨ AI-powered event & stall management</span>
        </div>

        {/* Heading & Paragraph */}
        <h1>Find, book & manage events — smarter.</h1>
        <p>
          Browse hundreds of events across India. Book your stall in real-time availability. Let AI guide you to the best opportunities.
        </p>

        {/* Marked Buttons Section */}
        <div className="hero-buttons">
          <button className="btn btn-primary">
            Explore Events <span>→</span>
          </button>
          <button className="btn btn-outline">
            For Vendors
          </button>
        </div>

      </section>

      {/* Marked Bottom Stats Bar Line */}
      <div className="stats-bar">
        <div className="stats-container">
          
          <div className="stat-item">
            <h2>500+</h2>
            <p>Events Listed</p>
          </div>

          <div className="stat-item">
            <h2>12,000+</h2>
            <p>Stalls Booked</p>
          </div>

          <div className="stat-item">
            <h2>95%</h2>
            <p>Satisfaction Rate</p>
          </div>

          <div className="stat-item">
            <h2>200+</h2>
            <p>Cities</p>
          </div>

        </div>
      </div>

    </div>
  );
};

export default Home;
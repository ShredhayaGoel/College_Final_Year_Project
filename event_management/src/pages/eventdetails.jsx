import {React, useState} from "react";
import { useParams, Link } from "react-router-dom";
import "../styles/EventDetails.css";
import Header from "../components/header";
import Contact from "../components/Contact";
import events from "../components/upcomingEvents/eventsData"
import StallMap from "../components/StallMap";

const EventDetails = () => {
  const { id } = useParams();

  const event = events.find((e) => e.id === Number(id));
  if (!event) {
  return <h1>Event not found</h1>;
}


const [selectedStalls, setSelectedStalls] = useState([]);

const stallPrice = event.price;
const totalPrice = selectedStalls.length * stallPrice;


  return (
    <div className="event-details-page">
      {/* ================= NAVBAR ================= */}

      <Header/>
      {/* ================= MAIN CONTENT ================= */}

      <main className="event-main">
        <div className="event-grid">
          {/* ================= LEFT SIDE ================= */}

          <section>
            {/* Event Image */}
            <div className=""></div>

            {/* Category */}
            <span className="event-category">{event.category}</span>

            {/* Event Title */}
            <h1 className="event-title">{event.title}</h1>

            {/* Event Information */}
            <div className="event-info-vendor">
              <span> {event.date} • {event.time}</span>

              <span>{event.venue}, {event.city}</span>

              <span>{event.attendees}/{event.capacity} Attendees</span>
            </div>

            {/* Description */}
            <p className="event-description">
              {event.description}
            </p>

            {/* ================= ORGANIZER ================= */}

            <div className="organizer-card">
              <div className="organizer-label">ORGANISED BY</div>

              <div className="organizer-name">{event.organizer}</div>
{/* 
              <div className="organizer-email">info@techcorp.in</div> */}
            </div>

            {/* ================= STALL MAP ================= */}

            <div className="stall-card">
              <div className="stall-header">
                <div className="stall-title">🏪 Stall Map</div>
                  <StallMap
                    selectedStalls={selectedStalls}
                    setSelectedStalls={setSelectedStalls}
                  />
                <div className="offline">📡 Offline</div>
              </div>

              <div className="stall-count">0 of 0 stalls available</div>

              <div className="stall-status">
                <span>🔵 Available</span>

                <span>ⓧ Booked</span>

                <span>🔒 Reserved</span>
              </div>
            </div>
          </section>

          {/* ================= RIGHT SIDE ================= */}

          <aside>
            <div className="booking-card">
              {/* Entry Fee */}

              <div className="entry-label">ENTRY FEE</div>
                <div className="entry-price">
                  ₹{stallPrice} / Stall
                  <br />
                  Total: ₹{totalPrice}
                </div>
             
              {/* Total Stalls */}

              <div className="booking-row">
                <span>Total stalls</span>

                <span>60</span>
              </div>

              {/* Available Stalls */}

              <div className="booking-row">
                <span>Available</span>

                <span className="available">18</span>
              </div>

              {/* Select Stall */}

              <button className="select-stall-btn">Select a Stall</button>

              {/* Payment Note */}

              <p className="payment-note">
                No charges until you confirm payment.
              </p>
            </div>
          </aside>
        </div>
      </main>

      <Contact/>
    </div>
  );
};

export default EventDetails;

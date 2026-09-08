import React from "react";
import "../../styles/eventCard.css";

import { useNavigate } from "react-router-dom";
import events from "./eventsData";

import { CalendarDays, MapPin, Users, Store, ArrowRight } from "lucide-react";

const EventCard = ({event}) => {


      const navigate = useNavigate();
      const stallsLeft = event.totalStalls - event.stallsBooked;

      const progress = (event.stallsBooked / event.totalStalls) * 100;

      
        return (
          <div className="event-card" key={event.id}>
            {/* Image */}

            <div className="event-image">
              <img src={event.image} alt={event.title} />

              <span className="category-badge">{event.category}</span>
            </div>

            {/* Body */}

            <div className="event-content">
              <h2>{event.title}</h2>

              <div className="event-info">
                <CalendarDays size={18} />
                
                <span>
                  {event.date} • {event.time}
                </span>
              </div>

              <div className="event-info">
                <MapPin size={18} />

                <span>
                  {event.venue}, {event.city}
                </span>
              </div>

              <div className="event-info">
                <Users size={18} />

                <span>
                  {event.attendees}/{event.capacity} Attendees
                </span>
              </div>

              <div className="stall-section">
                <div className="stall-header">
                  <div className="stall-title">
                    <Store size={17} />

                    <span>Stalls Booked</span>
                  </div>

                  <span className="stall-left">{stallsLeft} Left</span>
                </div>

                <div className="progress-bar">
                  <div
                    className="progress-fill"
                    style={{
                      width: `${progress}%`,
                    }}
                  ></div>
                </div>
              </div>

              <div className="card-footer">
                <div className="entry-fee">
                  <p>Entry Fee</p>

                  <h3>{event.price === 0 ? "FREE" : `₹${event.price}`}</h3>
                </div>

                <button
                  className="details-btn"
                  onClick={() => navigate(`/events/${event.id}`)}>
                  View Details
                  <ArrowRight size={18} />
                </button>
              </div>
            </div>
          </div>
        );

      
  
};

export default EventCard;

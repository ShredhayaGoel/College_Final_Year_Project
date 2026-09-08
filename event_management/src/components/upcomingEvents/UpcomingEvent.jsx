import {React, useState} from "react";
import "../../styles/upcomingEvent.css";

import SearchBar from "./SearchBar";

import EventCard from "./EventCards";

import events from "./eventsData";
import CategoryFilter from "./CategoryFilter";
import shops from "./shopsData";
import ShopCard from "./ShopsCard";

const UpcomingEvents = () => {


    const [selectedCategory, setSelectedCategory] =
        useState("All");

    const filteredEvents =
        selectedCategory === "All"
            ? events
            : events.filter(
                  (event) =>
                      event.category === selectedCategory
              );


    return (
        <>
        <section className="upcoming-events" id = "EventSection">

            {/* Header */}

            <div className="events-header">

                <div>

                    <h1>Upcoming Events</h1>

                   
                </div>

                <span className="event-count">

                    {filteredEvents.length} Events Found

                </span>

            </div>


            {/* Search */}

            <SearchBar />


            {/* Categories */}

            <CategoryFilter selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory}/>


            {/* Cards */}

            <div className="events-grid">

                {filteredEvents.map((event) => (

                    <EventCard
                        key={event.id}
                        event={event}
                    />

                ))}

            </div>

        </section>
        
        <section className = "shop-section">

            <div className="shop-header">
                <div>
                    <h1>Featured Vendors</h1>

                </div>

            </div>

          
            <div className="shop-grid">

                {shops.map((shop) => (

                    <ShopCard
                        key={shop.id}
                        shop={shop}
                    />

                ))}

            </div>


        </section>
        </>

    );

};

export default UpcomingEvents;
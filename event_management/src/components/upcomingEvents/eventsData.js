// Images
import techImage from "../../assets/tech.webp";
import foodImage from "../../assets/foodfest.webp";
import businessImage from "../../assets/startup.webp";
import musicImage from "../../assets/music.webp";
import sportsImage from "../../assets/sports.webp";
import fashionImage from "../../assets/fashion.webp";

const events = [
  {
    id: 1,

    title: "Tech Expo 2025",
    category: "Technology",
    image: techImage,

    date: "15 September 2025",
    time: "10:00 AM",

    venue: "Mumbai Convention Center",
    city: "Mumbai",
    state: "Maharashtra",

    organizer: "Tech India Foundation",

    attendees: 234,
    capacity: 500,

    stallsBooked: 42,
    totalStalls: 60,

    price: 500,

    description:
      "India's largest technology exhibition featuring startups, AI innovations, robotics, cybersecurity, cloud computing, and developer communities.",

    tags: ["AI", "Startups", "Cloud", "Networking"],

    featured: true,
  },

  {
    id: 2,

    title: "Food & Culture Fest",
    category: "Food & Beverage",
    image: foodImage,

    date: "2 October 2025",
    time: "11:00 AM",

    venue: "Pragati Maidan",
    city: "New Delhi",
    state: "Delhi",

    organizer: "Delhi Food Society",

    attendees: 510,
    capacity: 1000,

    stallsBooked: 66,
    totalStalls: 100,

    price: 200,

    description:
      "Experience cuisines from across India with live cooking competitions, cultural performances and food stalls.",

    tags: ["Food", "Culture", "Festival"],

    featured: false,
  },

  {
    id: 3,

    title: "Startup Summit 2025",
    category: "Business",
    image: businessImage,

    date: "18 November 2025",
    time: "09:00 AM",

    venue: "HICC",
    city: "Hyderabad",
    state: "Telangana",

    organizer: "Startup India",

    attendees: 87,
    capacity: 300,

    stallsBooked: 18,
    totalStalls: 30,

    price: 1500,

    description:
      "Meet founders, investors and entrepreneurs while exploring funding opportunities and networking sessions.",

    tags: ["Startup", "Funding", "Business"],

    featured: true,
  },

  {
    id: 4,

    title: "Live Music Carnival",
    category: "Music",
    image: musicImage,

    date: "8 December 2025",
    time: "06:30 PM",

    venue: "Jawaharlal Nehru Stadium",
    city: "Delhi",
    state: "Delhi",

    organizer: "Rhythm Events",

    attendees: 380,
    capacity: 700,

    stallsBooked: 52,
    totalStalls: 70,

    price: 999,

    description:
      "Enjoy performances from India's leading bands and independent artists with food courts and merchandise stalls.",

    tags: ["Concert", "Music"],

    featured: false,
  },

  {
    id: 5,

    title: "National Sports Championship",
    category: "Sports",
    image: sportsImage,

    date: "20 January 2026",
    time: "09:30 AM",

    venue: "Kanteerava Stadium",
    city: "Bengaluru",
    state: "Karnataka",

    organizer: "Sports Authority of India",

    attendees: 650,
    capacity: 1200,

    stallsBooked: 85,
    totalStalls: 120,

    price: 300,

    description:
      "National-level sports competition featuring athletics, football, basketball and esports tournaments.",

    tags: ["Sports", "Athletics"],

    featured: false,
  },

  {
    id: 6,

    title: "Fashion Week India",
    category: "Fashion",
    image: fashionImage,

    date: "5 February 2026",
    time: "05:00 PM",

    venue: "BKC Exhibition Centre",
    city: "Mumbai",
    state: "Maharashtra",

    organizer: "Fashion Council of India",

    attendees: 290,
    capacity: 600,

    stallsBooked: 40,
    totalStalls: 55,

    price: 2500,

    description:
      "Witness the latest fashion collections from top designers, emerging brands and celebrity showcases.",

    tags: ["Fashion", "Design"],

    featured: true,
  },
];

export default events;
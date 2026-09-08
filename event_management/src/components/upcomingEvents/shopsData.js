// Images
import foodShopImage from "../../assets/foodfest.webp";
import gadgetShopImage from "../../assets/music.webp";
import artisanShopImage from "../../assets/fashion.webp";


const shops = [
  {
    id: 1,

    name: "Spice Route Kitchen",
    category: "Food & Beverage",
    image: foodShopImage,

    rating: 4.8,
    reviewsCount: 132,

    city: "Mumbai",
    state: "Maharashtra",

    owner: "Chef Rajat Sharma",

    totalProducts: 45,
    stallsAssigned: 3,

    priceRange: "₹200 - ₹800",

    quote: "Authentic regional cuisines crafted fresh daily.",

    description:
      "A premium culinary stall specializing in traditional regional delicacies, street food fusions, and artisanal beverages.",

    tags: ["Food", "Organic", "Snacks", "Beverages"],

    featured: true,
  },

  {
    id: 2,

    name: "GadgetZone",
    category: "Electronics",
    image: gadgetShopImage,

    rating: 4.5,
    reviewsCount: 89,

    city: "Bengaluru",
    state: "Karnataka",

    owner: "TechHub Retailers",

    totalProducts: 120,
    stallsAssigned: 5,

    priceRange: "₹499 - ₹15,000",

    quote: "Latest gadgets at unbeatable expo prices.",

    description:
      "Your one-stop destination for smart home devices, wireless audio gear, gaming accessories, and mobile add-ons.",

    tags: ["Tech", "Gadgets", "Audio", "Smart Devices"],

    featured: true,
  },

  {
    id: 3,

    name: "ArtisanWeave",
    category: "Fashion",
    image: artisanShopImage,

    rating: 4.9,
    reviewsCount: 61,

    city: "Jaipur",
    state: "Rajasthan",

    owner: "Meera Craft Collective",

    totalProducts: 75,
    stallsAssigned: 2,

    priceRange: "₹800 - ₹5,000",

    quote: "Handcrafted textiles straight from the loom.",

    description:
      "Promoting authentic handloom sarees, block-printed apparel, and sustainable ethnic fashion handmade by rural artisans.",

    tags: ["Handloom", "Fashion", "Handmade", "Ethnic"],

    featured: true,
  },

];

export default shops;
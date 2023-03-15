import TourApiCalls from "../api/routes";
import { useState, useEffect } from "react";
import { apiController } from "../api";
const trips = [
  // Kenya
  {
    name: "Masai Mara Safari",
    country: "Kenya",
    start_location: "Nairobi",
    end_location: "Masai Mara",
    distance: 260,
    type: "Drive",
    description:
      "Experience the thrill of a lifetime on a guided safari tour of the Masai Mara, and witness the amazing wildlife and landscapes of the region.",
  },
  {
    name: "Mount Kenya Trek",
    country: "Kenya",
    start_location: "Nairobi",
    end_location: "Mount Kenya",
    distance: 180,
    type: "Drive",
    description:
      "Embark on a challenging trek to the summit of Mount Kenya, and witness its breathtaking views, unique flora and fauna, and the traditional lifestyles of the local communities.",
  },
  {
    name: "Mombasa Beach Vacation",
    country: "Kenya",
    start_location: "Nairobi",
    end_location: "Mombasa",
    distance: 500,
    type: "Drive",
    description:
      "Relax and unwind on the beautiful beaches of Mombasa, and enjoy the warm waters of the Indian Ocean, and explore the rich culture and history of the region.",
  },
  {
    name: "Lake Nakuru Wildlife Tour",
    country: "Kenya",
    start_location: "Nairobi",
    end_location: "Lake Nakuru",
    distance: 160,
    type: "Drive",
    description:
      "Take a guided tour of Lake Nakuru National Park, and witness the amazing wildlife and birdlife of the region, including the famous pink flamingos.",
  },
  {
    name: "Amboseli National Park Safari",
    country: "Kenya",
    start_location: "Nairobi",
    end_location: "Amboseli National Park",
    distance: 240,
    type: "Drive",
    description:
      "Embark on a guided safari tour of Amboseli National Park, and witness the amazing wildlife and landscapes of the region, including the iconic Mount Kilimanjaro in the background.",
  },

  // Namibia
  {
    name: "Damaraland Cultural Tour",
    country: "Namibia",
    start_location: "Windhoek",
    end_location: "Damaraland",
    distance: 450,
    type: "Drive",
    description:
      "Learn about the traditions and cultures of the Himba and Herero tribes on a guided cultural tour of Damaraland, and witness their unique way of life amidst the beautiful landscapes of the region.",
  },
  {
    name: "Skeleton Coast Fly-in Safari",
    country: "Namibia",
    start_location: "Windhoek",
    end_location: "Skeleton Coast",
    distance: 700,
    type: "Flight",
    description:
      "Take a scenic flight to the remote Skeleton Coast and embark on a safari adventure through its rugged landscapes, and spot various wildlife species such as seals, dolphins, and desert-adapted elephants.",
  },
  {
    name: "Luderitz Coastal Road Trip",
    country: "Namibia",
    start_location: "Windhoek",
    end_location: "Luderitz",
    distance: 830,
    type: "Drive",
    description:
      "Embark on a scenic road trip along the rugged coastline of Namibia, and witness the stunning landscapes of the region, including the famous Fish River Canyon.",
  },
  {
    name: "Etosha National Park Safari",
    country: "Namibia",
    start_location: "Windhoek",
    end_location: "Etosha National Park",
    distance: 435,
    type: "Drive",
    description:
      "Take a guided safari tour of Etosha National Park, and witness the amazing wildlife and birdlife of the region, including elephants, lions, cheetahs, and many more.",
  },
  {
    name: "Sossusvlei Dunes Adventure",
    country: "Namibia",
    start_location: "Windhoek",
    end_location: "Sossusvlei",
    distance: 350,
    type: "Drive",
    description:
      "Embark on an adventurous trip to the iconic Sossusvlei dunes, and explore the unique landscapes and geological formations of the region, including Deadvlei and Sesriem Canyon.",
  },
];

const activities = [
  {
    name: "Combi Sundowner drive & cheetah feeding",
    location: "Bagatelle",
    description:"Experience the thrill of feeding cheetahs while taking a scenic Sundowner drive in Bagatelle, Namibia. This unforgettable adventure is priced at only $60 and lasts approximately 2-3 hours. #Namibia #WildlifeEncounter #Safari #Adventure",
    duration_in_hours: 2,
    country: "Namibia",
    price: 60,
  },
  {
    name: "Cheetah Feeding & Sundowner",
    location: "Bagatelle",
    country: "Namibia",
    price: 25,
    duration_in_hours: 2.5,
    description: "Feed the cheetahs at sunset and enjoy a stunning view with a drink in hand. #Namibia #wildlife #safari"
  },
  {
    name: "Sundowner nature drive",
    location: "Bagatelle",
    country: "Namibia",
    price: 45,
    duration_in_hours: 2,
    description: "Explore the stunning scenery of Bagatelle and enjoy a drink while watching the sunset. #Namibia #safari #nature"
  },
  {
    name: "Night Drive",
    location: "Bagatelle",
    country: "Namibia",
    price: 30,
    duration_in_hours: 2,
    description: "Experience the thrill of the night and discover the nocturnal wildlife of Bagatelle. #Namibia #safari #wildlife"
  },
  {
    name: "Morning scenic drive",
    location: "Bagatelle",
    country: "Namibia",
    price: 40,
    duration_in_hours: 3,
    description: "Take in the breathtaking views of Bagatelle in the morning light and spot some wildlife along the way. #Namibia #safari #nature"
  },  
  {
    name: "Horseback safari",
    location: "Bagatelle",
    country: "Namibia",
    price: 50,
    description: "Explore the stunning landscape of Namibia on horseback, guided by expert riders. Experience wildlife up close while taking in the breathtaking views.",
    duration_in_hours: 2,
    },
    {
    name: "Star Safari from Observatory",
    location: "Bagatelle",
    country: "Namibia",
    price: 10,
    description: "Join us for a magical evening under the stars at our observatory. Learn about the constellations from expert guides and enjoy a spectacular view of the night sky.",
    duration_in_hours: 1.5,
    },
    {
    name: "Morning Bushman Walk",
    location: "Bagatelle",
    country: "Namibia",
    price: 30,
    description: "Embark on a guided walk with the indigenous San people, learning about their ancient culture and the local flora and fauna. A unique and unforgettable experience.",
    duration_in_hours: 2,
    },
    {
    name: "1.5hr Horseback riding",
    location: "Büllsport Guestfarm",
    country: "Namibia",
    price: 45,
    description: "Discover the rugged beauty of the Namibian landscape on horseback. Suitable for riders of all levels, with expert guides to ensure your safety and enjoyment.",
    duration_in_hours: 1.5,
    },
    {
      name: "Himba Excursion",
      location: "Camp Aussicht",
      country: "Namibia",
      price: 60,
      duration_in_hours: 4,
      description: "Experience the fascinating culture and customs of the Himba people on a guided excursion.",
    },
    {
      name: "Himba Excursion (child 5-11)",
      location: "Camp Aussicht ",
      country: "Namibia",
      price: 30,
      duration_in_hours: 4,
      description: "Bring your child to learn about the Himba people and their way of life on a guided excursion.",
    },
    {
      name: "Catamaran Cruise - dolphin & seal",
      location: "Catamaran Charters",
      country: "Namibia",
      price: 70,
      duration_in_hours: 3,
      description: "Embark on a breathtaking journey through the Walvis Bay harbor and spot playful dolphins and seals.",
    },
    {
      name: "Catamaran Cruise - dolphin & seal (child 4-12)",
      location: "Catamaran Charters",
      country: "Namibia",
      price: 40,
      duration_in_hours: 3,
      description: "Take your child on an unforgettable adventure to see dolphins and seals up close from a luxurious catamaran.",
    },
    {
      name: "Marine Desert Adventure",
      location: "Catamaran Charters",
      country: "Namibia",
      price: 205,
    },
    {
      name: "Marine Desert Adventure child 4-12 years",
      location: "Catamaran Charters",
      country: "Namibia",
      price: 140,
    },
    {
      name: "Quadbiking  2 hrs",
      location: "Desert Explorers",
      country: "Namibia",
      price: 75,
    },
    {
      name: '3 Hour Combo "Adrenaline Package" (Quad bike + lie down boarding)',
      location: "Desert Explorers",
      country: "Namibia",
      price: 60,
    },
  
  {
  name: "Marine Desert Adventure",
  location: "Catamaran Charters",
  country: "Namibia",
  price: 205,
  duration_in_hours: 5,
  description: "Explore the Namib desert and marine life with a 5-hour guided adventure. Marvel at the spectacular landscapes, search for desert wildlife, and enjoy a catamaran cruise to see dolphins and seals up close. Snacks and drinks provided."
  },
  {
  name: "Marine Desert Adventure child 4-12 years",
  location: "Catamaran Charters",
  country: "Namibia",
  price: 140,
  duration_in_hours: 5,
  description: "A child-friendly version of the Marine Desert Adventure, this 5-hour guided tour is perfect for families with young children. Enjoy a catamaran cruise, search for desert wildlife, and explore the Namib desert. Snacks and drinks provided."
  },
  {
  name: "Quadbiking 2 hrs",
  location: "Desert Explorers",
  country: "Namibia",
  price: 75,
  duration_in_hours: 2,
  description: "Take a thrilling 2-hour quad bike ride through the Namib Desert. Ride through sand dunes and enjoy scenic views of the surrounding area. Experienced guides and safety equipment provided."
  },
  {
  name: '3 Hour Combo "Adrenaline Package" (Quad bike + lie down boarding)',
  location: "Desert Explorers",
  country: "Namibia",
  price: 60,
  duration_in_hours: 3,
  description: "Combine quad biking and lie down boarding for an adrenaline-packed 3-hour adventure. Enjoy the thrill of speeding through the desert on a quad bike before switching to lie down boarding for an exhilarating ride down a sand dune. Experienced guides and safety equipment provided."
  },
  {
    name: "Champagne breakfast horse ride",
    location: "Desert Homestead",
    country: "Namibia",
    price: 30,
    description: "Ride horseback through the beautiful Namibian desert and enjoy a champagne breakfast in the great outdoors.",
    duration_in_hours: 2
    },
    {
    name: "Sundowner horse ride",
    location: "Desert Homestead",
    country: "Namibia",
    price: 75,
    description: "Experience the breathtaking beauty of the Namibian desert on horseback as the sun sets, followed by drinks and snacks.",
    duration_in_hours: 2
    },
    {
    name: "Sundowner Drive",
    location: "Desert Homestead",
    country: "Namibia",
    price: 125,
    description: "Take a scenic drive through the Namibian desert and watch the sun set over the beautiful landscape while enjoying drinks and snacks.",
    duration_in_hours: 3
    },
    {
      name: "Sossusvlei Excursion",
      location: "Desert Homestead",
      country: "Namibia",
      price: 85,
      description: "Explore the world-famous Sossusvlei dunes on a guided excursion with breakfast included.",
      duration_in_hours: 4
    },
    {
      name: "Full day Etosha NP Game Drive",
      location: "Etosha Safari Lodge",
      country: "Namibia",
      price: 125,
      description: "Experience the diverse wildlife of Etosha National Park on a full day game drive with a knowledgeable guide.",
      duration_in_hours: 8
    },
    {
      name: "Half day Etosha NP Game Drive",
      location: "Etosha Safari Lodge",
      country: "Namibia",
      price: 150,
      description: "Embark on a half day game drive through Etosha National Park to spot some of the park's many animal species.",
      duration_in_hours: 4
    },
    {
      name: "Desert Elephant Tracking (half day)",
      location: "Grootberg Lodge",
      country: "Namibia",
      price: 65,
      description: "Track and observe desert-adapted elephants with an experienced guide on this half day excursion.",
      duration_in_hours: 4
    },    
    {
      name: "Rhino Tracking (3/4 day)",
      location: "Grootberg Lodge",
      country: "Namibia",
      price: 50,
      description: "Join experienced guides on a thrilling tracking adventure to spot the elusive black rhino in their natural habitat.",
      duration_in_hours: 6
    },
    {
      name: "Scenic Sundowner Drive on Plateau",
      location: "Grootberg Lodge",
      country: "Namibia",
      price: 50,
      description: "Enjoy a breathtaking sunset view while driving through the spectacular scenery of the Grootberg Plateau.",
      duration_in_hours: 3
    },
    {
      name: "Morning and afternoon game drive",
      location: "Kalahari Anib",
      country: "Namibia",
      price: 55,
      description: "Embark on a thrilling safari adventure with experienced guides to spot the diverse wildlife of the Kalahari.",
      duration_in_hours: 5
    },
    {
      name: "Katutura Bicycle Tour ",
      location: "Katu Tours",
      country: "Namibia",
      price: 30,
      description: "Explore the vibrant streets and rich culture of Windhoek's largest township, Katutura, on a fun and informative bicycle tour.",
      duration_in_hours: 3
    },
    {
      name: 'Living Desert Tour "Little 5"',
      location: "Living Desert Adventures",
      country: "Namibia",
      price: 55,
      description: "Discover the fascinating desert life of Namibia's 'Little 5' creatures, including the sidewinder snake and dancing white lady spider.",
      duration_in_hours: 4
    },
    {
      name: 'Living Desert Tour "Little 5" child <12',
      location: "Living Desert Adventures",
      country: "Namibia",
      price: 30,
      description: "Kids will love this exciting tour of the desert's smallest creatures, led by expert guides who bring the fascinating world of Namibian wildlife to life.",
      duration_in_hours: 4
    },
    {
      name: "Welwitschia Moon Landscape Tour",
      location: "Living Desert Adventures",
      country: "Namibia",
      price: 110,
      description: "Discover the wonders of the Namibian moon-like landscape and its unique flora on this guided tour. Explore the fascinating Moon Landscape of Namibia and its unusual plant life with Living Desert Adventures. #Namibia #travel",
      duration_in_hours: 3
      },
      {
      name: "Welwitschia Moon Landscape Tour (Child <12)",
      location: "Living Desert Adventures",
      country: "Namibia",
      price: 55,
      description: "Experience the magic of the Namibian moon-like landscape and its unique flora on this guided tour for children under 12. Discover the wonders of the Moon Landscape of Namibia with Living Desert Adventures. Ideal for young adventurers! #Namibia #familytravel",
      duration_in_hours: 3
      },
      {
      name: "Desert Extravaganza (LDT & Welwitschia)",
      location: "Living Desert Adventures",
      country: "Namibia",
      price: 540,
      description: "Combine two of Namibia's most popular tours and experience the best of the desert landscape on this full-day adventure. Maximize your desert adventure in Namibia with Living Desert Adventures' Desert Extravaganza. Two tours, one unforgettable day! #Namibia #travel",
      duration_in_hours: 8
      },
      {
      name: "Desert Extravaganza (LDT & Welwitschia) Child <12",
      location: "Living Desert Adventures",
      country: "Namibia",
      price: 75,
      description: "Experience the best of Namibia's desert landscape on this full-day adventure designed for children under 12. Looking for a family adventure in Namibia? Living Desert Adventures' Desert Extravaganza offers a full day of desert fun for kids! #Namibia #familytravel",
      duration_in_hours: 8
      },
      {
      name: "Game Drive",
      location: "Mount Etjo",
      country: "Namibia",
      price: 40,
      description: "Embark on an exciting game drive and spot some of Africa's most iconic wildlife in their natural habitat. Take a safari adventure at Mount Etjo in Namibia and discover Africa's iconic wildlife on an unforgettable game drive! #Namibia #safari",
      duration_in_hours: 3
      },
      {
      name: "Game Drive Child Under 12 years",
      location: "Mount Etjo",
      country: "Namibia",
      price: 55,
      description: "Young adventurers can join in on the excitement of a game drive and spot some of Africa's most iconic wildlife in their natural habitat. Introduce your kids to Africa's wildlife on a safari adventure at Mount Etjo in Namibia. The perfect family day out! #Namibia #familytravel",
      duration_in_hours: 3
      },
      {
        name: "Lion Feed",
        location: "Mount Etjo",
        country: "Namibia",
        price: 25,
        description: "Experience the thrill of feeding lions at Mount Etjo's big cat sanctuary. Get up close and personal with lions at Mount Etjo's big cat sanctuary.",
        duration_in_hours: 1,
        },
  
  {
    name: "Lion Feed child under 12 years",
    location: "Mount Etjo",
    country: "Namibia",
    price: 25,
    description: "Experience the thrill of feeding lions at Mount Etjo's big cat sanctuary. Get up close and personal with lions at Mount Etjo's big cat sanctuary.",
    duration_in_hours: 1,
  },
  {
    name: "Cheetah Feeding",
    location: "Mount Etjo",
    country: "Namibia",
    price: 15,
    description: "Experience the thrill of feeding cheetahs at Mount Etjo's big cat sanctuary. Get up close and personal with cheetahs at Mount Etjo's big cat sanctuary.",
    duration_in_hours: 1,
  },
  {
    name: "Cheetah Feeding child under 12 years",
    location: "Mount Etjo",
    country: "Namibia",
    price: 75,
    description: "Experience the thrill of feeding cheetahs at Mount Etjo's big cat sanctuary. Get up close and personal with cheetahs at Mount Etjo's big cat sanctuary.",
    duration_in_hours: 1,
  },
  {
    name: "Ephemeral (Dry) River Drive",
    location: "Mowani Mountain Camp",
    country: "Namibia",
    price: 40,
    duration_in_hours: 4,
    description: "Explore the beautiful and rugged terrain of the ephemeral rivers in Namibia on this exciting 4-6 hour drive. A must-do for nature enthusiasts! Get ready for an exciting adventure in Namibia's ephemeral rivers! This 4-6 hour drive is a must-do for nature enthusiasts. #Namibia #adventure #naturelover",
  },
  {
    name: "Sunrise / Sunset Game Drive",
    location: "Naankuse Lodge",
    country: "Namibia",
    price: 45,
    duration_in_hours: 2,
    description: "Experience the breathtaking beauty of the Namibian wilderness on this 2-hour game drive during sunrise or sunset. Don't forget your camera! Experience the stunning beauty of Namibia's wilderness on a 2-hour game drive during sunrise or sunset. Don't miss this unforgettable adventure! #Namibia #safari #wilderness",
  },
  {
    name: "Sunrise / Sunset Game Drive child 3 - 12 years",
    location: "Naankuse Lodge",
    country: "Namibia",
    price: 25,
    duration_in_hours: 2,
    description: "Make unforgettable memories with your children on this 2-hour game drive during sunrise or sunset. They'll love seeing the animals in their natural habitat! Make unforgettable memories with your kids on a 2-hour game drive during sunrise or sunset in Namibia. They'll love seeing the animals up close! #Namibia #familyfun #wildlife",
  },
  {
    name: "Carnivore Tour Adult",
    location: "Naankuse Lodge",
    country: "Namibia",
    price: 55,
    duration_in_hours: 2,
    description: "Join us for an unforgettable experience as you get up close and personal with some of Namibia's carnivorous animals on this exciting 2-hour tour. Get up close and personal with Namibia's carnivorous animals on an exciting 2-hour tour! This unforgettable experience is a must-do. #Namibia #wildlife #adventure",
  },
  {
    name: "Carnivore Tour Child (under 12)",
    location: "Naankuse Lodge",
    country: "Namibia",
    price: 25,
    description: "Experience a close encounter with Namibia's carnivores on this tour designed for children under 12 years old.",
    duration_in_hours: 2
  },
  {
    name: "Cheetah Experience Adult",
    location: "Naankuse Lodge",
    country: "Namibia",
    price: 105,
    description: "Get up close and personal with Namibia's majestic cheetahs on this unforgettable experience.",
    duration_in_hours: 3
  },
  {
    name: "Cheetah Experience Child (under 12)",
    location: "Naankuse Lodge",
    country: "Namibia",
    price: 105,
    description: "A once-in-a-lifetime experience for children under 12 to learn about and interact with Namibia's cheetahs.",
    duration_in_hours: 3
  },
  {
    name: "Ballooning over Sossusvlei",
    location: "Namib Sky",
    country: "Namibia",
    price: 505,
    description: "Soar above the stunning Sossusvlei desert landscapes on a hot air balloon ride, taking in breathtaking views from above.",
    duration_in_hours: 4
  },
  {
    name: "Leopard Tracking",
    location: "Okonjima Plains Camp",
    country: "Namibia",
    price: 40,
    description: "Join an experienced guide to track and observe Namibia's elusive leopards in their natural habitat.",
    duration_in_hours: 3
  },
  {
    name: "Leopard Tracking child 6 - 16",
    location: "Okonjima Plains Camp",
    country: "Namibia",
    price: 40,
    description: "A family-friendly experience for children aged 6 to 16 to learn about and track Namibia's magnificent leopards.",
    duration_in_hours: 3
  },  
  {
    name: "AfriCat Tour",
    location: "Okonjima Plains Camp",
    country: "Namibia",
    price: 30,
  },
  {
    name: "AfriCat Tour child 3 - 16",
    location: "Okonjima Plains Camp",
    country: "Namibia",
    price: 715,
  },
  {
    name: "Bushman Tour - OFF The Beaten Track",
    location: "Okonjima Plains Camp",
    country: "Namibia",
    price: 50,
  },
  {
    name: "Bushman Tour - OFF The Beaten Track child 3-16",
    location: "Okonjima Plains Camp",
    country: "Namibia",
    price: 145,
  },
  {
    name: "Endangered Species (Game Drive)",
    location: "Okonjima Plains Camp",
    country: "Namibia",
    price: 145,
  },
  {
    name: "Endangered Species (Game Drive) child 6-16",
    location: "Okonjima Plains Camp",
    country: "Namibia",
    price: 70,
  },
  {
    name: "Game Drive",
    location: "Okonjima Plains Camp",
    country: "Namibia",
    price: 185,
  },
  {
    name: "Game Drive child 6-16",
    location: "Okonjima Plains Camp",
    country: "Namibia",
    price: 60,
  },
  {
    name: "Guided Game Drive",
    location: "Old Traders Lodge - Erindi",
    country: "Namibia",
    price: 45,
  },
  {
    name: "Morning/Afternoon Etosha NP game drive",
    location: "Onguma",
    country: "Namibia",
    price: 200,
  },
  {
    name: "Onguma sundowner drive",
    location: "Onguma",
    country: "Namibia",
    price: 140,
  },
  {
    name: "Guided walking safaris",
    location: "Onguma",
    country: "Namibia",
    price: 305,
  },
  {
    name: "The Hide",
    location: "Onguma",
    country: "Namibia",
    price: 265,
  },
  {
    name: "Private Game Drive - full day (per vehicle)",
    location: "Onguma",
    country: "Namibia",
    price: 135,
  },
  {
    name: "Himba Excursion",
    location: "Opuwo Country Lodge",
    country: "Namibia",
    price: 100,
  },
  {
    name: "Epupa Falls Excursion",
    location: "Opuwo Country Lodge",
    country: "Namibia",
    price: 205,
  },
  {
    name: "Ruacana Falls Excursion",
    location: "Opuwo Country Lodge",
    country: "Namibia",
    price: 140,
  },
  {
    name: "Palmwag Concession game drive(morning + afternoon)",
    location: "Palmwag",
    country: "Namibia",
    price: 25,
  },
  {
    name: "Palmwag Concession (Full Day Damaraland Excursion)",
    location: "Palmwag",
    country: "Namibia",
    price: 25,
  },
  {
    name: "Kayaking",
    location: "Pelican Point / Eco Marine",
    country: "Namibia",
    price: 25,
  },
  {
    name: "Kayaking child <12",
    location: "Pelican Point / Eco Marine",
    country: "Namibia",
    price: 30,
  },
  {
    name: "Kayak Combo",
    location: "Pelican Point / Eco Marine",
    country: "Namibia",
    price: 15,
  },
  {
    name: "Kayaking Combo child <12",
    location: "Pelican Point / Eco Marine",
    country: "Namibia",
    price: 60,
  },
  {
    name: "Shipwreck Sandwich Harbour full day",
    location: "Sandwich Harbour 4X4",
    country: "Namibia",
    price: 25,
  },
  {
    name: "Shipwreck Sandwich Harbour full day child 4-12",
    location: "Sandwich Harbour 4X4",
    country: "Namibia",
    price: 35,
  },
  {
    name: "Sandwich harbour half day",
    location: "Sandwich Harbour 4X4",
    country: "Namibia",
    price: 30,
  },
  {
    name: "Sandwich harbour half day  child 4-12",
    location: "Sandwich Harbour 4X4",
    country: "Namibia",
    price: 55,
  },
  {
    name: "Hiking 2Hrs Guided",
    location: "Solitaire Desert Farm",
    country: "Namibia",
    price: 25,
  },
  {
    name: "Guided Sossusvlei & Dead Vlei (+N$ 140 b/fast if not staying at Taleni)",
    location: "Sossusvlei Lodge Adventure Centre",
    country: "Namibia",
    price: 60,
  },
  {
    name: "Sundowner nature drive",
    location: "Sossusvlei Lodge Adventure Centre",
    country: "Namibia",
    price: 65,
  },
  {
    name: "Guided elim dune nature walk",
    location: "Sossusvlei Lodge Adventure Centre",
    country: "Namibia",
    price: 60,
  },
  {
    name: "Sesriem Canyon",
    location: "Sossusvlei Lodge Adventure Centre",
    country: "Namibia",
    price: 170,
  },
  {
    name: "Off-road Buggy Trail",
    location: "Sossusvlei Lodge Adventure Centre",
    country: "Namibia",
    price: "FOC",
  },
  {
    name: "Guided walk to the Bushman Paradise",
    location: "Spitzkoppen Lodge",
    country: "Namibia",
    price: 45,
  },
  {
    name: "Guided Drives",
    location: "Spitzkoppen Lodge",
    country: "Namibia",
    price: 40,
  },
  {
    name: "Sunset Guided Cycling Tour",
    location: "Spitzkoppen Lodge",
    country: "Namibia",
    price: 35,
  },
  {
    name: "Guided Mountain Hiking",
    location: "Spitzkoppen Lodge",
    country: "Namibia",
    price: 25,
  },
  {
    name: "Guided Horse Riding",
    location: "Spitzkoppen Lodge",
    country: "Namibia",
    price: 390,
  },
  {
    name: "Ephemeral (Dry) River Drive  (± 4 hrs) Adults",
    location: "Twyfelfontein Country Lodge",
    country: "Namibia",
    price: 50,
  },
  {
    name: "Ephemeral (Dry) River Drive  (± 4 - 11 hrs) Children ",
    location: "Twyfelfontein Country Lodge",
    country: "Namibia",
    price: 25,
  },
  {
    name: "Sundowner Drive",
    location: "Vingerklip Lodge",
    country: "Namibia",
    price: 40,
  },
  {
    name: "CCF Activity",
    location: "Waterberg Guest Farm ",
    country: "Namibia",
    price: 65,
  },
  {
    name: "Guided Plateau Hike",
    location: "Waterberg Wilderness",
    country: "Namibia",
    price: 90,
  },
  {
    name: "Honeymoon sundowner",
    location: "Waterberg Wilderness",
    country: "Namibia",
    price: 45,
  },
  {
    name: "Rhino drive",
    location: "Waterberg Wilderness",
    country: "Namibia",
    price: 30,
  },
  {
    name: "Game tracking on foot",
    location: "Waterberg Wilderness",
    country: "Namibia",
    price: 15,
  },
  {
    name: "Cultural Tour: Hereroland",
    location: "Waterberg Wilderness",
    country: "Namibia",
    price: 15,
  },
  {
    name: "History Path",
    location: "Waterberg Wilderness",
    country: "Namibia",
    price: 10,
  },
  {
    name: "Sundowner Drive 2hrs",
    location: "Zebra Kalahari Lodge",
    country: "Namibia",
    price: 30,
  },
  {
    name: "Morning Drive 2hrs",
    location: "Zebra Kalahari Lodge",
    country: "Namibia",
    price: 15,
  },
  {
    name: "Bushman Walk 1hr (included with every 2 night stay)",
    location: "Zebra Kalahari Lodge",
    country: "Namibia",
    price: 40,
  },
  {
    name: "Private Vehicle per activity",
    location: "Zebra Kalahari Lodge",
    country: "Namibia",
    price: 20,
  },
];

const accomodations = [
  {
    name: "Maasai Mara Safari Camp",
    description:
      "Experience the ultimate safari adventure at Maasai Mara Safari Camp, nestled in the heart of the iconic Maasai Mara National Reserve. Our luxury tents, gourmet cuisine, and exceptional service ensure an unforgettable stay.",
    price: 300,
    type: "Camping",
    location: "Maasai Mara National Reserve",
    country: "Kenya",
    cover_image: "https://example.com/maasai_mara_safari_camp.jpg",
    active: true,
  },
  {
    name: "Diani Beach Resort",
    description:
      "Escape to paradise at Diani Beach Resort, a tropical oasis nestled along the stunning Indian Ocean coastline. Our beachfront cottages, world-class amenities, and unbeatable location offer the ultimate beach getaway.",
    price: 500,
    type: "Resort",
    location: "Diani Beach",
    country: "Kenya",
    cover_image: "https://example.com/diani_beach_resort.jpg",
    active: true,
  },
  {
    name: "Mount Kenya Lodge",
    description:
      "Discover the natural beauty and adventure of Mount Kenya at our luxurious lodge, featuring spacious rooms, gourmet dining, and stunning views of the surrounding wilderness. Whether you're here for a safari or a mountain trek, we've got you covered.",
    price: 400,
    type: "Lodge",
    location: "Mount Kenya",
    country: "Kenya",
    cover_image: "https://example.com/mount_kenya_lodge.jpg",
    active: true,
  },
  {
    name: "Lake Naivasha Tented Camp",
    description:
      "Experience the magic of Lake Naivasha at our intimate and eco-friendly tented camp, featuring spacious canvas tents, panoramic views of the lake, and a range of outdoor activities for all ages.",
    price: 200,
    type: "Camping",
    location: "Lake Naivasha",
    country: "Kenya",
    cover_image: "https://example.com/lake_naivasha_tented_camp.jpg",
    active: true,
  },
  {
    name: "Nairobi City Hotel",
    description:
      "Discover the vibrant culture and cosmopolitan charm of Nairobi at our centrally located city hotel, featuring comfortable rooms, modern amenities, and easy access to the city's top attractions.",
    price: 300,
    type: "Hotel",
    location: "Nairobi",
    country: "Kenya",
    cover_image: "https://example.com/nairobi_city_hotel.jpg",
    active: true,
  },
  {
    name: "Amboseli Safari Lodge",
    description:
      "Experience the magic of Amboseli National Park at our authentic safari lodge, featuring comfortable rooms, breathtaking views of Mount Kilimanjaro, and a range of safari activities led by experienced guides.",
    price: 350,
    type: "Lodge",
    location: "Amboseli National Park",
    country: "Kenya",
    cover_image: "https://example.com/amboseli_safari_lodge.jpg",
    active: true,
  },
  {
    name: "Watamu Beach Resort",
    description:
      "Escape to paradise at Watamu Beach Resort, a luxury beachfront resort featuring stunning ocean views, world-class amenities, and a range of water sports and activities for all ages.",
    price: 600,
    type: "Resort",
    location: "Watamu Beach",
    country: "Kenya",
    cover_image: "https://example.com/watamu_beach_resort.jpg",
    active: true,
  },
  {
    name: "Samburu Eco-Lodge",
    description:
      "Immerse yourself in the natural beauty and rich cultural heritage of Samburu at our eco-friendly lodge, featuring sustainable accommodations, delicious local cuisine, and a range of outdoor activities led by knowledgeable guides.",
    price: 300,
    type: "Lodge",
    location: "Samburu National Reserve",
    country: "Kenya",
    cover_image: "https://example.com/samburu_eco_lodge.jpg",
    active: true,
  },
  {
    name: "Tsavo West Camp",
    description:
      "Discover the wild beauty and rugged landscapes of Tsavo West National Park at our rustic yet comfortable camp, featuring spacious tents, stunning views, and a range of safari activities led by expert guides.",
    price: 250,
    type: "Camping",
    location: "Tsavo West National Park",
    country: "Kenya",
    cover_image: "https://example.com/tsavo_west_camp.jpg",
    active: true,
  },
  {
    name: "Mombasa City Hotel",
    description:
      "Experience the vibrant culture and history of Mombasa at our centrally located city hotel, featuring comfortable rooms, modern amenities, and easy access to the city's top attractions.",
    price: 120,
    type: "Hotel",
    location: "Mombasa",
    country: "Kenya",
    cover_image: "https://example.com/mombasa_city_hotel.jpg",
    active: true,
  },
  {
    name: "Etosha Safari Lodge",
    description:
      "Experience the thrill of the African savannah at Etosha Safari Lodge, featuring comfortable accommodations, stunning views of the surrounding wilderness, and a range of safari activities led by experienced guides.",
    price: 400,
    type: "Lodge",
    location: "Etosha National Park",
    country: "Namibia",
    cover_image: "https://example.com/etosha_safari_lodge.jpg",
    active: true,
  },
  {
    name: "Sossusvlei Desert Camp",
    description:
      "Escape to the heart of the Namib Desert at Sossusvlei Desert Camp, featuring luxury tented accommodations, breathtaking views of the dunes, and a range of outdoor activities for all ages.",
    price: 600,
    type: "Camping",
    location: "Sossusvlei",
    country: "Namibia",
    cover_image: "https://example.com/sossusvlei_desert_camp.jpg",
    active: true,
  },
  {
    name: "Swakopmund Beach Resort",
    description:
      "Enjoy a seaside getaway at Swakopmund Beach Resort, a luxury beachfront hotel featuring stunning ocean views, world-class amenities, and a range of water sports and activities for all ages.",
    price: 700,
    type: "Resort",
    location: "Swakopmund Beach",
    country: "Namibia",
    cover_image: "https://example.com/swakopmund_beach_resort.jpg",
    active: true,
  },
  {
    name: "Damaraland Eco-Lodge",
    description:
      "Immerse yourself in the rugged beauty and rich cultural heritage of Damaraland at our eco-friendly lodge, featuring sustainable accommodations, delicious local cuisine, and a range of outdoor activities led by knowledgeable guides.",
    price: 350,
    type: "Lodge",
    location: "Damaraland",
    country: "Namibia",
    cover_image: "https://example.com/damaraland_eco_lodge.jpg",
    active: true,
  },
  {
    name: "Windhoek City Hotel",
    description:
      "Discover the vibrant culture and history of Windhoek at our centrally located city hotel, featuring comfortable rooms, modern amenities, and easy access to the city's top attractions.",
    price: 150,
    type: "Hotel",
    location: "Windhoek",
    country: "Namibia",
    cover_image: "https://example.com/windhoek_city_hotel.jpg",
    active: true,
  },
  {
    name: "Onguma Tented Camp",
    description:
      "Experience the magic of the African bush at Onguma Tented Camp, featuring luxurious tented accommodations, stunning views of the surrounding wilderness, and a range of safari activities led by experienced guides.",
    price: 500,
    type: "Tented Camp",
    location: "Etosha National Park",
    country: "Namibia",
    cover_image: "https://example.com/onguma_tented_camp.jpg",
    active: true,
  },
  {
    name: "Fish River Lodge",
    description:
      "Escape to the heart of the Fish River Canyon at Fish River Lodge, featuring luxurious chalet accommodations, breathtaking views of the canyon, and a range of outdoor activities for all ages.",
    price: 800,
    type: "Lodge",
    location: "Fish River Canyon",
    country: "Namibia",
    cover_image: "https://example.com/fish_river_lodge.jpg",
    active: true,
  },
  {
    name: "Serra Cafema Camp",
    description:
      "Discover the remote beauty of the Kunene Region at Serra Cafema Camp, featuring luxury tented accommodations, stunning views of the river and surrounding desert, and a range of outdoor activities led by experienced guides.",
    price: 1200,
    type: "Tented Camp",
    location: "Kunene Region",
    country: "Namibia",
    cover_image: "https://example.com/serra_cafema_camp.jpg",
    active: true,
  },
  {
    name: "Erongo Wilderness Lodge",
    description:
      "Experience the natural beauty and tranquility of the Erongo Mountains at our eco-friendly lodge, featuring comfortable accommodations, delicious local cuisine, and a range of outdoor activities led by knowledgeable guides.",
    price: 400,
    type: "Lodge",
    location: "Erongo Mountains",
    country: "Namibia",
    cover_image: "https://example.com/erongo_wilderness_lodge.jpg",
    active: true,
  },
  {
    name: "Hoanib Valley Camp",
    description:
      "Immerse yourself in the rugged beauty and rich cultural heritage of the Hoanib Valley at our luxury camp, featuring spacious tented accommodations, delicious local cuisine, and a range of outdoor activities led by knowledgeable guides.",
    price: 1000,
    type: "Tented Camp",
    location: "Hoanib Valley",
    country: "Namibia",
    cover_image: "https://example.com/hoanib_valley_camp.jpg",
    active: true,
  },
];

const cars = [
  {
    make: "Toyota",
    model: "Land Cruiser",
    transmission: "Automatic",
    max_price: 200,
    min_price: 150,
    camping_equipped: true,
    four_wheel_drive: true,
    country: "Kenya",
  },
  {
    make: "Nissan",
    model: "Patrol",
    transmission: "Automatic",
    max_price: 180,
    min_price: 130,
    camping_equipped: true,
    four_wheel_drive: true,
    country: "Kenya",
  },
  {
    make: "Toyota",
    model: "Prado",
    transmission: "Automatic",
    max_price: 160,
    min_price: 120,
    camping_equipped: true,
    four_wheel_drive: true,
    country: "Kenya",
  },
  {
    make: "Mitsubishi",
    model: "Pajero",
    transmission: "Automatic",
    max_price: 140,
    min_price: 100,
    camping_equipped: true,
    four_wheel_drive: true,
    country: "Kenya",
  },
  {
    make: "Ford",
    model: "Ranger",
    transmission: "Automatic",
    max_price: 120,
    min_price: 90,
    camping_equipped: true,
    four_wheel_drive: true,
    country: "Kenya",
  },
  {
    make: "Land Rover",
    model: "Defender",
    transmission: "Manual",
    max_price: 100,
    min_price: 80,
    camping_equipped: true,
    four_wheel_drive: true,
    country: "Kenya",
  },
  {
    make: "Suzuki",
    model: "Jimny",
    transmission: "Automatic",
    max_price: 90,
    min_price: 70,
    camping_equipped: false,
    four_wheel_drive: true,
    country: "Kenya",
  },
  {
    make: "Toyota",
    model: "Hilux",
    transmission: "Manual",
    max_price: 120,
    min_price: 90,
    camping_equipped: false,
    four_wheel_drive: true,
    country: "Kenya",
  },
  {
    make: "Isuzu",
    model: "D-Max",
    transmission: "Automatic",
    max_price: 130,
    min_price: 100,
    camping_equipped: false,
    four_wheel_drive: true,
    country: "Kenya",
  },
  {
    make: "Jeep",
    model: "Wrangler",
    transmission: "Manual",
    max_price: 180,
    min_price: 150,
    camping_equipped: false,
    four_wheel_drive: true,
    country: "Kenya",
  },
  {
    make: "Toyota",
    model: "Land Cruiser",
    transmission: "Manual",
    max_price: 150,
    min_price: 120,
    camping_equipped: true,
    four_wheel_drive: true,
    country: "Namibia",
  },
  {
    make: "Nissan",
    model: "Patrol",
    transmission: "Automatic",
    max_price: 130,
    min_price: 100,
    camping_equipped: false,
    four_wheel_drive: true,
    country: "Namibia",
  },
  {
    make: "Mitsubishi",
    model: "Pajero",
    transmission: "Manual",
    max_price: 110,
    min_price: 90,
    camping_equipped: false,
    four_wheel_drive: true,
    country: "Namibia",
  },
  {
    make: "Ford",
    model: "Ranger",
    transmission: "Automatic",
    max_price: 130,
    min_price: 100,
    camping_equipped: false,
    four_wheel_drive: true,
    country: "Namibia",
  },
  {
    make: "Jeep",
    model: "Grand Cherokee",
    transmission: "Automatic",
    max_price: 180,
    min_price: 150,
    camping_equipped: false,
    four_wheel_drive: true,
    country: "Namibia",
  },
  {
    make: "Land Rover",
    model: "Defender",
    transmission: "Manual",
    max_price: 140,
    min_price: 110,
    camping_equipped: true,
    four_wheel_drive: true,
    country: "Namibia",
  },
  {
    make: "Toyota",
    model: "Hilux",
    transmission: "Automatic",
    max_price: 120,
    min_price: 90,
    camping_equipped: false,
    four_wheel_drive: true,
    country: "Namibia",
  },
  {
    make: "Isuzu",
    model: "KB",
    transmission: "Manual",
    max_price: 100,
    min_price: 80,
    camping_equipped: false,
    four_wheel_drive: true,
    country: "Namibia",
  },
  {
    make: "Volkswagen",
    model: "Amarok",
    transmission: "Automatic",
    max_price: 110,
    min_price: 90,
    camping_equipped: false,
    four_wheel_drive: true,
    country: "Namibia",
  },
  {
    make: "Ford",
    model: "Everest",
    transmission: "Automatic",
    max_price: 140,
    min_price: 110,
    camping_equipped: false,
    four_wheel_drive: true,
    country: "Namibia",
  },
];

const attractions = [
  {
    name: "Maasai Mara National Reserve",
    video: "https://example.com",
    image: "https://example.com",
    exerpt:
      "Experience the wildlife and natural beauty of Kenya at Maasai Mara National Reserve",
    description:
      "Maasai Mara National Reserve is one of the most popular wildlife reserves in Africa, known for its breathtaking landscapes and abundant wildlife. Visitors can see a variety of animals, including lions, elephants, zebras, and giraffes, in their natural habitat.",
    location: "Narok County",
    country: "Kenya",
  },
  {
    name: "Mount Kenya",
    video: "https://example.com",
    image: "https://example.com",
    exerpt: "Climb the second highest mountain in Africa at Mount Kenya",
    description:
      "Mount Kenya is the second highest mountain in Africa, and climbing it is a popular activity for adventure-seekers. Visitors can choose from several different routes, each offering unique views of the surrounding landscape.",
    location: "Central Province",
    country: "Kenya",
  },
  {
    name: "Lake Nakuru",
    video: "https://example.com",
    image: "https://example.com",
    exerpt: "Explore the beautiful pink lake at Lake Nakuru",
    description:
      "Lake Nakuru is a shallow alkaline lake known for its pink flamingos and other bird species. Visitors can take a boat tour or hike around the lake to see the wildlife and stunning views.",
    location: "Nakuru County",
    country: "Kenya",
  },
  {
    name: "Giraffe Centre",
    video: "https://example.com",
    image: "https://example.com",
    exerpt: "Get up close and personal with giraffes at the Giraffe Centre",
    description:
      "The Giraffe Centre is a conservation center for the endangered Rothschild's giraffe, where visitors can feed and interact with the giraffes. The center also offers educational programs and tours.",
    location: "Nairobi",
    country: "Kenya",
  },
  {
    name: "Hell's Gate National Park",
    video: "https://example.com",
    image: "https://example.com",
    exerpt:
      "Explore the dramatic landscapes and wildlife at Hell's Gate National Park",
    description:
      "Hell's Gate National Park is known for its towering cliffs, deep gorges, and natural hot springs. Visitors can hike, bike, or take a game drive to see the park's wildlife, including baboons, buffalos, and zebras.",
    location: "Nakuru County",
    country: "Kenya",
  },
  {
    name: "Amboseli National Park",
    video: "https://www.youtube.com/watch?v=3qTDKndDpFk",
    image:
      "https://www.magicalkenya.com/wp-content/uploads/2018/12/amboseli-national-park-1152x720.jpg",
    exerpt:
      "The park is famous for being the best place in Africa to get close to free-ranging elephants among other wildlife species.",
    description:
      "Amboseli National Park is located in Kajiado County, in southern Kenya. The park is famous for being the best place in Africa to get close to free-ranging elephants among other wildlife species such as Masai giraffe, Cape buffalo, impala, lion, cheetah, hyena, among others. The park offers breathtaking views of Mount Kilimanjaro, the highest free-standing mountain in the world. Visitors can engage in activities such as game drives, guided walks, bird watching, and cultural visits to the Maasai community.",
    location: "Kajiado County",
    country: "Kenya",
  },
  {
    name: "Nairobi National Park",
    video: "https://www.youtube.com/watch?v=5AkQnGB1Hiw",
    image:
      "https://www.magicalkenya.com/wp-content/uploads/2018/12/nairobi-national-park-1152x720.jpg",
    exerpt:
      "Nairobi National Park is the only park in the world that is located within a capital city.",
    description:
      "Nairobi National Park is the only park in the world that is located within a capital city. The park is a sanctuary for black rhino, lions, leopards, cheetahs, hyenas, buffaloes, giraffes, and diverse birdlife with over 400 species recorded. The park also hosts the Nairobi Safari Walk and the Animal Orphanage where visitors can view and learn about rescued animals that are being rehabilitated. Visitors can engage in activities such as game drives, guided walks, and bird watching.",
    location: "Nairobi",
    country: "Kenya",
  },
  {
    name: "Hell's Gate National Park",
    video: "https://www.youtube.com/watch?v=HnS1hIeL-14",
    image:
      "https://www.magicalkenya.com/wp-content/uploads/2018/12/hells-gate-national-park-1152x720.jpg",
    exerpt:
      "Hell's Gate National Park is known for its natural geothermal activity and unique landscape.",
    description:
      "Hell's Gate National Park is known for its natural geothermal activity and unique landscape. The park offers a variety of activities such as rock climbing, cycling, camping, and game viewing. Visitors can walk or cycle among wildlife such as buffalos, zebras, and giraffes, as well as explore the Hell's Gate Gorge and the Olkaria Geothermal Spa. The park is also home to the Fisher's Tower, a rock formation that is popular among rock climbers.",
    location: "Nakuru County",
    country: "Kenya",
  },
  {
    name: "Fish River Canyon",
    video: "https://example.com",
    image: "https://example.com",
    exerpt:
      "The Fish River Canyon is the largest canyon in Africa and the second-largest in the world.",
    description:
      "The Fish River Canyon is a breathtaking natural wonder that should be on every visitor's itinerary. With its sheer size and stunning views, it is a popular hiking and camping destination.",
    location: "Southern Namibia",
    country: "Namibia",
  },
  {
    name: "Etosha National Park",
    video: "https://example.com",
    image: "https://example.com",
    exerpt:
      "Etosha National Park is one of the best places in Africa to see wildlife.",
    description:
      "Etosha National Park is a vast, arid wilderness that is home to an incredible array of wildlife. Visitors can expect to see lions, elephants, giraffes, zebras, and more, all in their natural habitat.",
    location: "Northern Namibia",
    country: "Namibia",
  },
  {
    name: "Sossusvlei",
    video: "https://example.com",
    image: "https://example.com",
    exerpt:
      "Sossusvlei is home to some of the tallest sand dunes in the world.",
    description:
      "Sossusvlei is a stunning landscape of towering sand dunes, red-rock canyons, and salt pans. Visitors can hike to the top of the dunes for spectacular views or take a hot air balloon ride for a unique perspective.",
    location: "Central Namibia",
    country: "Namibia",
  },
  {
    name: "Skeleton Coast",
    video: "https://example.com",
    image: "https://example.com",
    exerpt:
      "The Skeleton Coast is a hauntingly beautiful landscape of shipwrecks and sand dunes.",
    description:
      "The Skeleton Coast is a stretch of coastline in northern Namibia that is famous for its rugged beauty and tragic history of shipwrecks. Visitors can explore the area by car or take a guided tour to learn about the region's natural and cultural history.",
    location: "Northern Namibia",
    country: "Namibia",
  },
  {
    name: "Damaraland",
    video: "https://example.com",
    image: "https://example.com",
    exerpt:
      "Damaraland is a stunning landscape of rock formations, dry riverbeds, and wildlife.",
    description:
      "Damaraland is a remote and rugged region in northern Namibia that is home to some of the country's most unique landscapes and wildlife. Visitors can see desert-adapted elephants, black rhinos, and more, and take in the stunning scenery of the region's rock formations and dry riverbeds.",
    location: "Northern Namibia",
    country: "Namibia",
  },
];

// migrate data
function migrate() {
  const [loading, setLoading] = useState(false);
  const [migrations, setMigrations] = useState<Promise<unknown>[]>([]);

  function migrate_to_db() {
    setLoading(true);
    const data = activities.forEach(async (element) => {
      setTimeout(() => {
        const dt = element;
        const res = apiController(TourApiCalls.createActivity(dt));
        // push to migrations
        setMigrations([...migrations, res]);
        console.log("migrated", res);
      }, 3000);
    });
    console.log(data);
    setLoading(false);
  }

  return (
    <div>
      <button
        className="flex justify-center items-center gap-5 rounded-tl-none "
        onClick={() => migrate_to_db()}
      >
        Migrate
        {loading ? (
          <span className=" w-8  aspect-square border-b border-red-600 animate-spin rounded-full"></span>
        ) : null}
      </button>

      {migrations.map((migration, i) => {
        return (
          <p key={i} className=" text-xs p-3 rounded-xl">
            {JSON.stringify(migration)}
          </p>
        );
      })}
    </div>
  );
}

export default migrate;

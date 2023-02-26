import TourApiCalls from "../api/routes";
import { useState,useEffect } from "react";
import { apiController } from "../api";
const trips= [
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
    name: "Nairobi National Park Safari",
    location: "Nairobi",
    price: 75,
    description:
      "Take a guided safari tour of Nairobi National Park, and witness the amazing wildlife and birdlife of the region, including lions, rhinos, giraffes, and many more.",
    country: "Kenya",
    duration_in_hours: 4,
  },
  {
    name: "Maasai Mara Hot Air Balloon Safari",
    location: "Maasai Mara",
    price: 400,
    description:
      "Experience the breathtaking landscapes of Maasai Mara from above, as you embark on a hot air balloon safari and witness the amazing wildlife and birdlife of the region.",
    country: "Kenya",
    duration_in_hours: 3,
  },
  {
    name: "Mombasa City Tour",
    location: "Mombasa",
    price: 50,
    description:
      "Take a guided tour of Mombasa city, and explore the rich history, culture, and architecture of the region, including Fort Jesus, Old Town, and more.",
    country: "Kenya",
    duration_in_hours: 6,
  },
  {
    name: "Mount Kenya Hiking Expedition",
    location: "Mount Kenya",
    price: 300,
    description:
      "Embark on a challenging hiking expedition to the summit of Mount Kenya, and witness the stunning views and unique wildlife and plant life of the region.",
    country: "Kenya",
    duration_in_hours: 72,
  },
  {
    name: "Diani Beach Snorkeling Tour",
    location: "Diani Beach",
    price: 60,
    description:
      "Join a snorkeling tour of Diani Beach, and discover the amazing marine life of the region, including colorful fish, coral reefs, and more.",
    country: "Kenya",
    duration_in_hours: 3,
  },
  {
    name: "Nairobi Giraffe Centre Visit",
    location: "Nairobi",
    price: 20,
    description:
      "Visit the Giraffe Centre in Nairobi and get up close and personal with the beautiful and majestic giraffes of the region.",
    country: "Kenya",
    duration_in_hours: 2,
  },
  {
    name: "Lake Nakuru National Park Safari",
    location: "Lake Nakuru",
    price: 120,
    description:
      "Take a guided safari tour of Lake Nakuru National Park, and witness the amazing wildlife and birdlife of the region, including flamingos, rhinos, lions, and many more.",
    country: "Kenya",
    duration_in_hours: 5,
  },
  {
    name: "Malindi Marine Park Snorkeling Tour",
    location: "Malindi",
    price: 75,
    description:
      "Join a snorkeling tour of Malindi Marine Park, and discover the amazing marine life of the region, including sea turtles, colorful fish, coral reefs, and more.",
    country: "Kenya",
    duration_in_hours: 4,
  },
  {
    name: "Hells Gate National Park Biking Tour",
    location: "Hells Gate",
    price: 50,
    description:
      "Explore Hells Gate National Park on a guided biking tour, and witness the unique geological formations and stunning landscapes of the region.",
    country: "Kenya",
    duration_in_hours: 3,
  },
  {
    name: "Kilifi Creek Kayaking Tour",
    location: "Kilifi Creek",
    price: 35,
    description:
      "Join a kayaking tour of Kilifi Creek, and explore the stunning mangrove forests, sandbars, and hidden beaches of the region.",
    country: "Kenya",
    duration_in_hours: 2,
  },
  {
    name: "Sossusvlei Dunes Tour",
    location: "Sossusvlei",
    price: 150,
    description:
      "Take a guided tour of the iconic Sossusvlei dunes and witness the stunning red-orange landscapes of the Namib Desert, as well as unique flora and fauna of the region.",
    country: "Namibia",
    duration_in_hours: 6,
  },
  {
    name: "Etosha National Park Safari",
    location: "Etosha",
    price: 200,
    description:
      "Embark on a guided safari tour of Etosha National Park, and witness the amazing wildlife and birdlife of the region, including elephants, lions, rhinos, and many more.",
    country: "Namibia",
    duration_in_hours: 8,
  },
  {
    name: "Fish River Canyon Hiking Expedition",
    location: "Fish River Canyon",
    price: 350,
    description:
      "Join a challenging hiking expedition to Fish River Canyon, and witness the breathtaking views and unique geological formations of the region.",
    country: "Namibia",
    duration_in_hours: 72,
  },
  {
    name: "Kolmanskop Ghost Town Visit",
    location: "Kolmanskop",
    price: 25,
    description:
      "Visit the eerie and fascinating ghost town of Kolmanskop, and explore the abandoned buildings, decaying machinery, and rich history of the region.",
    country: "Namibia",
    duration_in_hours: 2,
  },
  {
    name: "Swakopmund Sandboarding Adventure",
    location: "Swakopmund",
    price: 60,
    description:
      "Experience the thrill of sandboarding on the towering dunes of Swakopmund, and witness the stunning views of the Namib Desert from above.",
    country: "Namibia",
    duration_in_hours: 3,
  },

  {
    name: "Skeleton Coast Fly-in Safari",
    location: "Skeleton Coast",
    price: 1200,
    description:
      "Embark on a once-in-a-lifetime fly-in safari to the remote Skeleton Coast, and witness the stunning landscapes, wildlife, and cultural heritage of the region.",
    country: "Namibia",
    duration_in_hours: 24,
  },
  {
    name: "Damaraland Rock Art Tour",
    location: "Damaraland",
    price: 300,
    description:
      "Join a guided tour of the ancient rock art sites in Damaraland, and learn about the rich cultural and spiritual history of the region.",
    country: "Namibia",
    duration_in_hours: 4,
  },
  {
    name: "Caprivi Strip Boat Safari",
    location: "Caprivi Strip",
    price: 80,
    description:
      "Take a boat safari on the scenic rivers of the Caprivi Strip, and witness the amazing wildlife and birdlife of the region, including crocodiles, hippos, elephants, and many more.",
    country: "Namibia",
    duration_in_hours: 3,
  },
  {
    name: "Kaokoland Cultural Tour",
    location: "Kaokoland",
    price: 300,
    description:
      "Join a cultural tour of the remote and traditional Kaokoland region, and learn about the unique customs, lifestyle, and heritage of the Himba people.",
    country: "Namibia",
    duration_in_hours: 12,
  },
  {
    name: "Namib-Naukluft Park Hot Air Balloon Ride",
    location: "Namib-Naukluft Park",
    price: 400,
    description:
      "Take a breathtaking hot air balloon ride over the stunning landscapes of Namib-Naukluft Park, and witness the unique flora and fauna of the region from a bird's-eye view.",
    country: "Namibia",
    duration_in_hours: 2,
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
// function migrate_to_db() {
//     function trip() {
//       setLoading(true);
//      const data = trips.forEach(async (element) => {
//         setTimeout(() => {
//           const trip = element;
//           const res = apiController(TourApiCalls.createTrip(trip));
//           // push to migrations
//           setMigrations([...migrations, res]);
         
//           console.log("migrated", res);
//         }, 3000);
//       });
//       console.log(data);
//     }

//     function accommodation() {
//       const data = accomodations.forEach(async (element) => {
//         setTimeout(() => {
//           const accomodation = element;
//           apiController(TourApiCalls.createAccomodation(accomodation));
//           console.log("migrated");
//         }, 3000);
//       });
//       console.log(data);
//     }
//     function activity() {
//       const data = activities.forEach(async (element) => {
//         setTimeout(() => {
//           const activity = element;
//           apiController(TourApiCalls.createActivity(activity));
//           console.log("migrated");
//         }, 3000);
//       });
//       console.log(data);
//     }
//     function attraction() {
//       const data = attractions.forEach(async (element) => {
//         setTimeout(() => {
//           const attraction = element;
//           apiController(TourApiCalls.createAttraction(attraction));
//           console.log("migrated");
//         }, 30000);
//       });
//       console.log(data);
//     }
//     function car() {
//       const data = cars.forEach(async (element) => {
//         setTimeout(() => {
//           const car = element;
//           apiController(TourApiCalls.createCar(car));
//           console.log("migrated");
//         }, 3000);
//       });
//       console.log(data);
//     }
//     trip();

//     //accommodation();
//     //activity();
//     //attraction();
//     //car();
//     setLoading(false);

//     console.log("migrated successfully");
//   }

  
  function migrate_to_db() {
    setLoading(true);
    const data = cars.forEach(async (element) => {
      setTimeout(() => {
        const dt = element;
        const res = apiController(TourApiCalls.createCar(dt));
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
        className="flex justify-center items-center gap-2"
        onClick={()=>migrate_to_db()}
      >
        Migrate
        {loading ? 
          <span className=" w-8  aspect-square border-b border-red-600 animate-spin rounded-full"></span>
         : 
          <span className=" w-8  aspect-square border-b border-red-600 rounded-full"></span>
        }
      </button>

      {migrations.map((migration,i) => {
        return (
          <p key={i} className=" text-xs p-3 rounded-xl">{JSON.stringify(migration)}</p>
        );
      })}
    </div>
  );
}

export default migrate;

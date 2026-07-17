export const mockListing = {
  id: "1599895892448055764",
  title: "Romantic Jacuzzi 1BHK Candolim | Mirashya UG10",
  type: "Entire serviced apartment",
  location: "Candolim, India",
  guests: 3,
  bedrooms: 1,
  beds: 1,
  bathrooms: 1,
  rating: 4.95,
  reviewCount: 21,
  isFavorite: false,
  isGuestFavorite: true,
  description: `Welcome to Mirashya UG10 — a romantic, design-forward 1BHK serviced apartment in the heart of Candolim, Goa. This thoughtfully curated space features a private jacuzzi, premium finishes, and everything you need for an indulgent staycation or holiday escape.

The apartment is part of the prestigious Mirashya complex, offering unmatched amenities including a rooftop pool, 24-hour concierge, and a tranquil courtyard garden. Whether you're celebrating an anniversary or simply craving a luxurious retreat, UG10 promises a truly immersive experience.

Nestled just minutes from the beach, top restaurants, and nightlife, the location couldn't be more ideal. Enjoy the best of Goa while returning to your private sanctuary every evening.`,
  host: {
    id: "host-001",
    name: "Mirashya Homes",
    avatar: "https://i.pravatar.cc/150?img=68",
    isSuperhost: true,
    yearsHosting: 2,
    responseRate: 100,
    responseTime: "within an hour",
  },
  price: {
    perNight: 6800,
    currency: "₹",
    cleaningFee: 1500,
    serviceFee: 1200,
    taxes: 850,
  },
  highlights: [
    {
      icon: "door-open",
      title: "Self check-in",
      description: "Check yourself in with the smartlock.",
    },
    {
      icon: "map-pin",
      title: "Great location",
      description:
        "95% of recent guests gave the location a 5-star rating.",
    },
    {
      icon: "calendar",
      title: "Free cancellation for 48 hours",
      description: "Get a full refund if you change your mind.",
    },
  ],
  coordinates: {
    lat: 15.5161,
    lng: 73.7617,
  },
};

export const mockPhotos = [
  {
    id: "p1",
    url: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=1200&q=85",
    caption: "Balcony seating area with rattan furniture",
    alt: "Elegant balcony with wicker chairs and outdoor table",
    category: "Living spaces",
  },
  {
    id: "p2",
    url: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=1200&q=85",
    caption: "Aerial view of Mirashya complex",
    alt: "Aerial view showing the apartment complex exterior",
    category: "Building & neighbourhood",
  },
  {
    id: "p3",
    url: "https://images.unsplash.com/photo-1540518614846-7eded433c457?w=1200&q=85",
    caption: "Bedroom with AC and premium bedding",
    alt: "Modern bedroom with black panel walls and white bedding",
    category: "Bedroom",
  },
  {
    id: "p4",
    url: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=1200&q=85",
    caption: "Spacious living and dining area",
    alt: "Open plan living space with modern furniture",
    category: "Living spaces",
  },
  {
    id: "p5",
    url: "https://images.unsplash.com/photo-1507652313519-d4e9174996dd?w=1200&q=85",
    caption: "Luxury jacuzzi in private bathroom",
    alt: "Private jacuzzi bathtub in modern bathroom",
    category: "Bathroom",
  },
  {
    id: "p6",
    url: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=1200&q=85",
    caption: "Rooftop pool view",
    alt: "Rooftop swimming pool with loungers",
    category: "Building & neighbourhood",
  },
  {
    id: "p7",
    url: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=1200&q=85",
    caption: "Fully equipped kitchen",
    alt: "Modern kitchen with appliances",
    category: "Kitchen",
  },
  {
    id: "p8",
    url: "https://images.unsplash.com/photo-1449247709967-d4461a6a6103?w=1200&q=85",
    caption: "Dining area with 4-seater table",
    alt: "Dining area with modern table and chairs",
    category: "Living spaces",
  },
  {
    id: "p9",
    url: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=1200&q=85",
    caption: "Private terrace with garden view",
    alt: "Outdoor terrace with greenery",
    category: "Living spaces",
  },
  {
    id: "p10",
    url: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=1200&q=85",
    caption: "Vanity and bathroom amenities",
    alt: "Modern bathroom with premium toiletries",
    category: "Bathroom",
  },
];

export const mockReviews = {
  overallRating: 4.95,
  totalCount: 21,
  categories: [
    { name: "Cleanliness", rating: 5.0 },
    { name: "Accuracy", rating: 4.9 },
    { name: "Check-in", rating: 5.0 },
    { name: "Communication", rating: 5.0 },
    { name: "Location", rating: 4.8 },
    { name: "Value", rating: 4.9 },
  ],
  reviews: [
    {
      id: "r1",
      author: "Priya",
      avatar: "https://i.pravatar.cc/150?img=47",
      date: "June 2025",
      rating: 5,
      text: "Absolutely stunning apartment! The jacuzzi was the highlight of our stay. The place was spotless, modern, and had everything we needed. Gaurav was extremely responsive and helpful. Can't wait to come back!",
      location: "Bengaluru, India",
    },
    {
      id: "r2",
      author: "Rohan",
      avatar: "https://i.pravatar.cc/150?img=12",
      date: "May 2025",
      rating: 5,
      text: "Perfect romantic getaway! The apartment exceeded our expectations in every way. The location is brilliant — beach is just 10 minutes away. The rooftop pool was an added bonus.",
      location: "Mumbai, India",
    },
    {
      id: "r3",
      author: "Ananya",
      avatar: "https://i.pravatar.cc/150?img=31",
      date: "April 2025",
      rating: 5,
      text: "What a gem of a property! The interiors are beautifully designed. Jacuzzi was clean and working perfectly. Check-in was smooth with the smartlock. Highly recommend!",
      location: "Delhi, India",
    },
    {
      id: "r4",
      author: "Karthik",
      avatar: "https://i.pravatar.cc/150?img=68",
      date: "March 2025",
      rating: 5,
      text: "Stayed here for our anniversary and it was perfect. The apartment is modern and chic. Gaurav was wonderful — very communicative and helpful throughout.",
      location: "Chennai, India",
    },
    {
      id: "r5",
      author: "Meera",
      avatar: "https://i.pravatar.cc/150?img=45",
      date: "February 2025",
      rating: 5,
      text: "Best Airbnb stay we've ever had. The jacuzzi is incredible. The decor is elegant and the kitchen had everything we needed. 10/10 would recommend to anyone visiting Goa.",
      location: "Pune, India",
    },
    {
      id: "r6",
      author: "Arjun",
      avatar: "https://i.pravatar.cc/150?img=14",
      date: "January 2025",
      rating: 5,
      text: "Superb location, superb property, superb host! The place is immaculate and the amenities are top-notch. We loved every bit of our stay.",
      location: "Hyderabad, India",
    },
  ],
};

export const mockAmenities = [
  {
    category: "Bathroom",
    items: [
      { icon: "bath", name: "Bathtub" },
      { icon: "wind", name: "Hair dryer" },
      { icon: "package", name: "Shampoo" },
      { icon: "package", name: "Body soap" },
      { icon: "package", name: "Hot water" },
    ],
  },
  {
    category: "Bedroom & laundry",
    items: [
      { icon: "shirt", name: "Washer" },
      { icon: "shirt", name: "Dryer" },
      { icon: "layers", name: "Bed linens" },
      { icon: "layers", name: "Extra pillows and blankets" },
      { icon: "hanger", name: "Clothing storage: closet" },
    ],
  },
  {
    category: "Entertainment",
    items: [
      { icon: "tv", name: "55\" HDTV with Netflix, Amazon Prime Video" },
      { icon: "speaker", name: "Sound system" },
    ],
  },
  {
    category: "Family",
    items: [
      { icon: "shield", name: "Safety card" },
      { icon: "first-aid", name: "First aid kit" },
    ],
  },
  {
    category: "Heating & cooling",
    items: [
      { icon: "wind", name: "Air conditioning" },
      { icon: "fan", name: "Ceiling fan" },
    ],
  },
  {
    category: "Home safety",
    items: [
      { icon: "flame", name: "Fire extinguisher" },
      { icon: "shield", name: "Carbon monoxide alarm" },
      { icon: "bell", name: "Smoke alarm" },
    ],
  },
  {
    category: "Internet & office",
    items: [
      { icon: "wifi", name: "Fast wifi – 100 Mbps" },
      { icon: "monitor", name: "Dedicated workspace" },
    ],
  },
  {
    category: "Kitchen & dining",
    items: [
      { icon: "utensils", name: "Kitchen" },
      { icon: "refrigerator", name: "Refrigerator" },
      { icon: "microwave", name: "Microwave" },
      { icon: "coffee", name: "Coffee maker" },
      { icon: "utensils", name: "Cooking basics" },
      { icon: "utensils", name: "Dishes and silverware" },
      { icon: "droplets", name: "Drinking water" },
    ],
  },
  {
    category: "Location features",
    items: [
      { icon: "building", name: "Shared pool" },
      { icon: "car", name: "Free parking on premises" },
      { icon: "gym", name: "Shared gym" },
    ],
  },
  {
    category: "Outdoor",
    items: [
      { icon: "sun", name: "Patio or balcony" },
      { icon: "sofa", name: "Outdoor furniture" },
    ],
  },
  {
    category: "Services",
    items: [
      { icon: "key", name: "Self check-in with smartlock" },
      { icon: "concierge-bell", name: "Luggage dropoff allowed" },
      { icon: "clock", name: "Long term stays allowed" },
    ],
  },
];

export const mockBooking = {
  pricePerNight: 6800,
  currency: "₹",
  cleaningFee: 1500,
  serviceFee: 1200,
  taxes: 850,
  minNights: 2,
  maxNights: 90,
  checkInTime: "2:00 PM",
  checkOutTime: "11:00 AM",
};

export const vehicles = [
  {
    id: "innova-crysta",
    name: "Toyota Innova Crysta",
    category: "Premium SUV",
    seating: "7+1 Seater",
    featured: true,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7GxuhnCI2xjeKYVTKjpVvQN_UTs2yCc6xgYddRxd8Yw&s=10",
    useCases: "Family trips, outstation journeys and airport transfers with extra comfort and boot space.",
  },
  {
    id: "innova",
    name: "Toyota Innova",
    category: "SUV",
    seating: null,
    featured: false,
    image:
      "https://cdn.carhp.in/toyota/toyota_innova_hycross_platinum_white_pearl.jpg?format=webp&width=800&q=75",
    useCases: "Reliable choice for group travel, outstation trips and long-distance comfort.",
  },
  {
    id: "toyota-etios",
    name: "Toyota Etios",
    category: "Sedan",
    seating: null,
    featured: false,
    image:
      "https://www.girnationalpark.in/uploads/0000/25/2021/11/22/etios-car.jpg",
    useCases: "Smooth city rides, airport drops and business travel within Bangalore.",
  },
  {
    id: "ertiga",
    name: "Maruti Suzuki Ertiga",
    category: "MUV",
    seating: null,
    featured: false,
    image:
      "https://imgd.aeplcdn.com/664x374/n/c6es93a_1572125.jpg?q=80",
    useCases: "Spacious option for small groups, family outings and weekend trips.",
  },
  {
    id: "xcent",
    name: "Hyundai Xcent",
    category: "Sedan",
    seating: null,
    featured: false,
    image:
      "https://imgd.aeplcdn.com/1200x900/cw/ec/28733/Hyundai-Xcent-Exterior-94995.jpg?wm=0",
    useCases: "Comfortable and efficient for local travel, hourly rental and airport runs.",
  },
  {
    id: "tempo-traveller",
    name: "Tempo Traveller",
    category: "Van",
    seating: null,
    featured: false,
    image:
      "https://cdn.bluebirdtravels.in/wp-content/uploads/2017/01/Tempo_Traveller_PI-531x354.png",
    useCases: "Purpose-built for group travel, tour packages and large family gatherings.",
  },
  {
    id: "swift-dzire",
    name: "Swift Dzire",
    category: "Sedan",
    seating: null,
    featured: false,
    image: "https://upload.wikimedia.org/wikipedia/commons/e/e7/Maruti_Suzuki_Swift_Dzire_%28cropped%29.jpg",
    useCases: "Compact and economical for quick city trips and hourly rentals.",
  },
];

export const vehicleOptions = vehicles.map((v) => v.name);

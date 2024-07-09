const axios = require('axios');

const cars = [
  {
    id: 1,
    brand: "BMW",
    rating: 112,
    carName: "BMW Malibu",
    imgUrl: 'all-images/cars-img/list_1.png',
    model: "Model 3",
    price: 50,
    speed: "20kmph",
    gps: "GPS Navigation",
    seatType: "Heated seats",
    automatic: "Automatic",
    description:
      " Luxury redefined. Introducing the BMW, a fully electric vehicle that blends cutting-edge technology with unparalleled comfort and elegance. Experience the future of luxury driving.",
  },

  {
    id: 2,
    brand: "TATA",
    rating: 102,
    carName: "Tata Nexon",
    imgUrl: "all-images/cars-img/list_2.png",
    model: "Model-2022",
    price: 50,
    speed: "20kmph",
    gps: "GPS Navigation",
    seatType: "Heated seats",
    automatic: "Automatic",
    description:
      " Luxury redefined. Introducing the TATA Nexon, a fully electric vehicle that blends cutting-edge technology with unparalleled comfort and elegance. Experience the future of luxury driving.",
  },

  {
    id: 3,
    brand: "BMW",
    rating: 132,
    carName: "BMW X3",
    imgUrl: "all-images/cars-img/demo.png",
    model: "Model-2022",
    price: 65,
    speed: "20kmph",
    gps: "GPS Navigation",
    seatType: "Heated seats",
    automatic: "Automatic",
    description:
      " Luxury redefined. Introducing the BMW, a fully electric vehicle that blends cutting-edge technology with unparalleled comfort and elegance. Experience the future of luxury driving.",
  },

  {
    id: 4,
    brand: "TATA",
    rating: 102,
    carName: "Tata Punch",
    imgUrl: "all-images/cars-img/list_3.png",
    model: "Model-2022",
    price: 70,
    speed: "20kmph",
    gps: "GPS Navigation",
    seatType: "Heated seats",
    automatic: "Automatic",
    description:
      " Luxury redefined. Introducing the TATA, a fully electric vehicle that blends cutting-edge technology with unparalleled comfort and elegance. Experience the future of luxury driving.",
  },

  {
    id: 5,
    brand: "MG",
    rating: 94,
    carName: "MG Camry",
    imgUrl: "all-images/cars-img/list_6.png",
    model: "Model-2022",
    price: 45,
    speed: "20kmph",
    gps: "GPS Navigation",
    seatType: "Heated seats",
    automatic: "Automatic",
    description:
      " Luxury redefined. Introducing the MG, a fully electric vehicle that blends cutting-edge technology with unparalleled comfort and elegance. Experience the future of luxury driving.",
  },

  {
    id: 6,
    brand: "Hyundai",
    rating: 119,
    carName: "Hyundai XC90",
    imgUrl: "all-images/cars-img/list_5.png",
    model: "Model-2022",
    price: 85,
    speed: "20kmph",
    gps: "GPS Navigation",
    seatType: "Heated seats",
    automatic: "Automatic",
    description:
      " Luxury redefined. Introducing the Hyundai, a fully electric vehicle that blends cutting-edge technology with unparalleled comfort and elegance. Experience the future of luxury driving.",
  },

  {
    id: 7,
    brand: "Audi",
    rating: 82,
    carName: "Audi Fiesta",
    imgUrl: "all-images/cars-img/list_6.png",
    model: "Model 3",
    price: 50,
    speed: "20kmph",
    gps: "GPS Navigation",
    seatType: "Heated seats",
    automatic: "Automatic",
    description:
      " Luxury redefined. Introducing the Audi, a fully electric vehicle that blends cutting-edge technology with unparalleled comfort and elegance. Experience the future of luxury driving.",
  },

  {
    id: 8,
    brand: "Rolls Royce",
    rating: 52,
    carName: "Rolls Royce Colorado",
    imgUrl: "all-images/cars-img/list_1.png",
    model: "Model 3",
    price: 50,
    speed: "20kmph",
    gps: "GPS Navigation",
    seatType: "Heated seats",
    automatic: "Automatic",
    description:
      " Luxury redefined. Introducing the Rolls Royce, a fully electric vehicle that blends cutting-edge technology with unparalleled comfort and elegance. Experience the future of luxury driving.",
  },
];

axios.post('http://localhost:5000/cars', cars)
  .then(response => {
    console.log('Cars inserted successfully:', response.data);
  })
  .catch(error => {
    console.error('Error inserting cars:', error);
  });

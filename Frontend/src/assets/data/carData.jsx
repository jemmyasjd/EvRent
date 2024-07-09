import { useContext } from "react";
// import all images from assets/images directory
import img01 from "../all-images/cars-img/list_1.png";
import img02 from "../all-images/cars-img/list_2.png";
import img03 from "../all-images/cars-img/demo.png";
import img04 from "../all-images/cars-img/list_3.png";
import img05 from "../all-images/cars-img/list_6.png";
import img06 from "../all-images/cars-img/list_5.png";
import img07 from "../all-images/cars-img/list_6.png";
import img08 from "../all-images/cars-img/list_1.png";

import { RentContext } from "../../Context/RentContext";



// create an array of objects

// const useCarData = () => {
//   const { cars } = useContext(RentContext);
//   return cars;
// };






const carData = [
  {
    id: 1,
    brand: "BMW",
    rating: 112,
    carName: "BMW Malibu",
    imgUrl: img01,
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
    imgUrl: img02,
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
    imgUrl: img03,
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
    imgUrl: img04,
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
    imgUrl: img05,
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
    imgUrl: img06,
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
    imgUrl: img07,
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
    imgUrl: img08,
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

// export { useCarData };

export default carData;

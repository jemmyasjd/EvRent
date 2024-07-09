import React, { useState, useEffect } from 'react';
import '../styles/carDetails.css'; 
import { RentContext } from "../Context/RentContext";
import { useContext } from "react";
import carData from "../assets/data/carData";


const GetCarInfo = () => {
  const [carId, setCarId] = useState(0);
  const [carDetails, setCarDetails] = useState([]);
  const { getDetails } = useContext(RentContext);
  const singleCarItem = carData.find((item) => item.id === parseInt(carId));
  console.log(singleCarItem);


  const formatTime = (timestamp) => {
    const date = new Date(Number(timestamp) * 1000); // Convert BigInt to Number and then to milliseconds
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' }); // Format as time with seconds
  };

  const formatDate = (timestamp) => {
    const date = new Date(Number(timestamp)); // Convert milliseconds to seconds
    return date.toLocaleDateString('en-US', { year: 'numeric', month: '2-digit', day: '2-digit' }); // Format as date (year, month, day)
  }

  const handleGetDetails = async () => {
    try {
      const details = await getDetails(parseInt(carId));
      const formattedDetails = details.map((detail) => ({
        ...detail,
        rentalStartTime: formatTime(detail.rentalStartTime.toString()),
        rentalEndTime: formatTime(detail.rentalEndTime.toString()),
        date: formatDate(detail.date.toString())
      }));
      setCarDetails(formattedDetails);
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <div className="car-details-container">
      <h2>Car Details</h2>
      <input
        type="text"
        placeholder="Enter Car ID"
        value={carId}
        onChange={(e) => setCarId(e.target.value)}
      />
      <button onClick={handleGetDetails}>Get Details</button>
      
      <ul className="car-details-list">
        {carDetails.length > 0 && carDetails.map((detail, index) => (
          <li key={index}>
            <strong>First Name:</strong> {detail.firstName}<br />
            <strong>Last Name:</strong> {detail.lastName}<br />
            <strong>Phone Number:</strong> {detail.phoneNumber.toString()}<br />
            <strong>Email:</strong> {detail.email}<br />
            <strong>Date:</strong> {detail.date}<br />
            <strong>Rental Start Time:</strong> {detail.rentalStartTime}<br />
            <strong>Rental End Time:</strong> {detail.rentalEndTime}<br />
            <strong>Rent Hours:</strong> {detail.rentHours.toString()}<br />
            <strong>Fees:</strong>{carId && singleCarItem.price * parseInt(detail.rentHours)}<br/>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default GetCarInfo;

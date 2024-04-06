import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import CarListing from "../pages/CarListing";
import CarDetails from "../pages/CarDetails";
import NotFound from "../pages/NotFound";
import Contact from "../pages/Contact";
import Register from "../pages/register"; // Import the Register component
import Login from "../pages/Login";
import PaymentPage from "../pages/PaymentPage";
import GetCarInfo from "../pages/GetCarInfo";

const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/home" />} />
      <Route path="/home" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/cars" element={<CarListing />} />
      <Route path="/cars/:slug" element={<CarDetails />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/register" element={<Register />} /> {/* Add the register route */}
      <Route path="/Login" element={<Login />} />
      <Route path="*" element={<NotFound />} />
      <Route path="/mastercardpage" element={<PaymentPage />} /> 
      <Route path="/details" element={<GetCarInfo />} />
    </Routes>
  );
};

export default Routers;

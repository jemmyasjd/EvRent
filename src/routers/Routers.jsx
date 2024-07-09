import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { SignIn, SignUp, SignedIn, SignedOut } from '@clerk/clerk-react';
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

const ProtectedRoute = ({ element }) => (
  <>
    <SignedIn>{element}</SignedIn>
    <SignedOut><Navigate to="/login" /></SignedOut>
  </>
);

const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/home" />} />
      <Route path="/home" element={<ProtectedRoute element={<Home />} />} />
      <Route path="/about" element={<ProtectedRoute element={<About />} />} />
      <Route path="/cars" element={<ProtectedRoute element={<CarListing />} />} />
      <Route path="/cars/:slug" element={<ProtectedRoute element={<CarDetails />} />} />
      <Route path="/contact" element={<ProtectedRoute element={<Contact />} />} />
      <Route path="/register" element={<Register />} /> {/* Add the register route */}
      <Route path="/login" element={<Login />} />
      <Route path="*" element={<NotFound />} />
      <Route path="/mastercardpage" element={<ProtectedRoute element={<PaymentPage />} />} /> 
      <Route path="/details" element={<ProtectedRoute element={<GetCarInfo />} />} />
    </Routes>
  );
};

export default Routers;

import React, { useState } from "react";
import masterCard from "../../assets/all-images/master-card.jpg";
import "../../styles/payment-method.css";
import { useNavigate } from "react-router-dom";
import { RentContext } from "../../Context/RentContext";
import { useContext } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { set } from "mongoose";
import HashLoader from "react-spinners/HashLoader";

const PaymentMethod = ({ isFormFilled, formValues }) => {
  const [loading, setLoading] = useState(false);
  const { rentCar } = useContext(RentContext);
  const [selectedOption, setSelectedOption] = useState("");
  const navigate = useNavigate();
  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!selectedOption) {
      alert("Please select a payment option");
      return;
    }
    setLoading(true);
    console.log("Form details:", {
      ...formValues,
      paymentOption: selectedOption,
    });
    try {
      var myDate = formValues.journeyDate;
      console.log(myDate);
      myDate = myDate.split("-");
      var newDate = new Date(myDate[0], myDate[1] - 1, myDate[2]);
      console.log(newDate.getTime());
      if (selectedOption === "mastercard") {
        navigate("/mastercardpage"); // Specify the route to the Master Card page
      } else {
        await rentCar(
          parseInt(formValues.carId),
          formValues.firstName,
          formValues.lastName,
          newDate.getTime(),
          formValues.phoneNumber,
          formValues.email,
          formValues.rentHours
        )
          .then(() => {
            toast.success("Car reserved successfully", {
              pauseOnHover: false,
              position: "top-center",
            });
            // after two seconds, navigate to the home page
            setTimeout(() => {
              navigate("/");
            }, 4000);
          })
          .catch((error) => {
            toast.error(error.code, {
              pauseOnHover: false,
              position: "top-center",
            });
          });
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message, {
        pauseOnHover: false,
        position: "top-center",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {loading && (
        <div className="loader-overlay">
          <HashLoader 
          color="blue"/>
        </div>
      )}{" "}
      {/* Loader */}
      <form onSubmit={handleSubmit}>
        <div className="payment">
          <label
            htmlFor="cashOnDelivery"
            className="d-flex align-items-center gap-2"
          >
            <input
              type="radio"
              id="cashOnDelivery"
              name="paymentOption"
              value="cash"
              onChange={handleOptionChange}
              required
            />
            Cash on Delivery
          </label>
        </div>

        <div className="payment mt-3">
          {/* Other payment options can be added here */}
        </div>

        <div className="payment mt-3 d-flex align-items-center justify-content-between">
          <label
            htmlFor="masterCard"
            className="d-flex align-items-center gap-2"
          >
            <input
              type="radio"
              id="masterCard"
              name="paymentOption"
              value="mastercard"
              onChange={handleOptionChange}
              required
            />
            Master Card
          </label>

          <img src={masterCard} alt="" />
        </div>

        <div className="payment text-end mt-5">
          <button type="submit">Reserve Now</button>
        </div>
      </form>
      <ToastContainer />
    </>
  );
};

export default PaymentMethod;

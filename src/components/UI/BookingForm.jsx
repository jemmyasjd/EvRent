import React from "react";
import "../../styles/booking-form.css";
import { Form, FormGroup } from "reactstrap";

const BookingForm = ({ handleInputChange }) => {
  const submitHandler = (event) => {
    event.preventDefault();
    console.log("Form submitted");
  };
  
  return (
    <Form onSubmit={submitHandler}>
      <FormGroup className="booking__form d-inline-block me-4 mb-4">
        <input type="text" placeholder="First Name" name="firstName" required onChange={handleInputChange} />
      </FormGroup>
      <FormGroup className="booking__form d-inline-block ms-1 mb-4">
        <input type="text" placeholder="Last Name" name="lastName" required onChange={handleInputChange} />
      </FormGroup>

      <FormGroup className="booking__form d-inline-block me-4 mb-4">
        <input type="email" placeholder="Email" name="email" required onChange={handleInputChange} />
      </FormGroup>
      <FormGroup className="booking__form d-inline-block ms-1 mb-4">
        <input type="tel" placeholder="Phone Number" name="phoneNumber" required onChange={handleInputChange} />
      </FormGroup>

      <FormGroup className="booking__form d-inline-block me-4 mb-4">
        <input type="date" placeholder="Journey Date" name="journeyDate" required onChange={handleInputChange} />
      </FormGroup>
      <FormGroup className="booking__form d-inline-block ms-1 mb-4">
        <input type="number" placeholder="Rent Hours" className="time__picker" name="rentHours" onChange={handleInputChange} />
      </FormGroup>
    </Form>
  );
};

export default BookingForm;

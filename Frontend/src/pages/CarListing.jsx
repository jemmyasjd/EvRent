import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "reactstrap";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/CommonSection";
import CarItem from "../components/UI/CarItem";
import axios from "axios";

const CarListing = () => {
  const [cars, setCars] = useState([]);

  useEffect(() => {
    // Fetch car data from the backend
    const fetchCarData = async () => {
      try {
        const response = await axios.get("https://ev-rent-back.vercel.app/cars");
        setCars(response.data);
        // console.log(response.data);
      } catch (error) {
        console.error("Error fetching car data:", error);
      }
    };

    fetchCarData();
  }, []);

  return (
    <Helmet title="Cars">
      <CommonSection title="Car Listing" />

      <section>
        <Container>
          <Row>
            {cars.map((item) => (
              <CarItem item={item} key={item._id} />
            ))}
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default CarListing;

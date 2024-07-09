import React from "react";

import { Container, Row, Col, ListGroup, ListGroupItem } from "reactstrap";
import { Link } from "react-router-dom";
import "../../styles/footer.css";
import { toast } from "react-toastify";

const quickLinks = [
  {
    path: "/about",
    display: "About",
  },

  {
    path: "/cars",
    display: "Car Listing",
  },


  {
    path: "/contact",
    display: "Contact",
  },
];

const Footer = () => {

  const handleSubmit = async(e) =>
  {
    e.preventDefault()
    toast.success('Email registered successfully', {
      pauseOnHover: false,
      position: "top-center"
    });
  }

  const date = new Date();
  const year = date.getFullYear();
  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col lg="4" md="4" sm="12">
            <div className="logo footer__logo">
              <h1>
                <Link to="/home" className=" d-flex align-items-center gap-2">
                  <i class="ri-car-line"></i>
                  <span>
                    Rent Car <br /> Service
                  </span>
                </Link>
              </h1>
            </div>
            <p className="footer__logo-content">
              EV Rent Car Service offers eco-friendly transportation solutions with a diverse fleet of electric vehicles. 
              Enjoy convenient booking, reliable service, and contribute to a greener future with our sustainable mobility options.
            </p>
          </Col>

          <Col lg="2" md="4" sm="6">
            <div className="mb-4">
              <h5 className="footer__link-title">Quick Links</h5>
              <ListGroup>
                {quickLinks.map((item, index) => (
                  <ListGroupItem key={index} className="p-0 mt-3 quick__link">
                    <Link to={item.path}>{item.display}</Link>
                  </ListGroupItem>
                ))}
              </ListGroup>
            </div>
          </Col>

          <Col lg="3" md="4" sm="6">
            <div className="mb-4">
              <h5 className="footer__link-title mb-4">Head Office</h5>
              <p className="office__info">PDEU, Gandhinagar</p>
              <p className="office__info">Phone: +91 7201996520</p>

              <p className="office__info">Email: evrent@gmail.com</p>

              <p className="office__info">Office Time: 10am - 7pm</p>
            </div>
          </Col>

          <Col lg="3" md="4" sm="12">
            <div className="mb-4">
              <h5 className="footer__link-title">Newsletter</h5>
              <p className="section__description">Subscribe our newsletter</p>
           
                <form className="newsletter" onSubmit={handleSubmit}>
                  <input type="email" placeholder="Email" required />
                  <button type="submit" style={{border: 0}}>
                    <i class="ri-send-plane-line"></i>
                  </button>
                </form>  
        
            </div>
          </Col>

          <Col lg="12">
            <div className="footer__bottom">
              <p className="section__description d-flex align-items-center justify-content-center gap-1 pt-4">
                <i class="ri-copyright-line"></i>Copyright {year}, Developed by
                Jemmy and team. All rights reserved.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;

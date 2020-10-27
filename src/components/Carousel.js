import React from "react";
import Carousel from "react-bootstrap/Carousel";
import "./Carousel.css";
import image1 from "../assets/images/literoflight.jpg";
import image2 from "../assets/images/kindness.jpg";
import image3 from "../assets/images/mind.jpg";
import image4 from "../assets/images/plasticoceans.jpg";
import image5 from "../assets/images/999club.jpg";
import image6 from "../assets/images/hackneyfoodbank.jpg";

export default function() {
  return (
    <>
      <h3 className="carouselTitle"> Past Campaigns</h3>
      <Carousel className="carouselContainer">
        <Carousel.Item>
          <img className="d-block w-100" src={image1} alt="Liter of Light" />
          <Carousel.Caption>
            <h2>Liter of Light</h2>
            <p>A global movement sponsored by EDF</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img className="d-block w-100" src={image2} alt="Kindness by Post" />
          <Carousel.Caption>
            <h2>Kindness By Post</h2>
            <p>
              Open Credo consultancy offered pro bono work to the Mental Health
              Collective
            </p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img className="d-block w-100" src={image3} alt="Third slide" />
          <Carousel.Caption>
            <h2>Mind</h2>
            <p></p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img className="d-block w-100" src={image4} alt="Third slide" />
          <Carousel.Caption>
            <h2>Plastic Oceans</h2>
            <p>
              Last year Deutsche Bank donated €200,000 to the environmental NGO
            </p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img className="d-block w-100" src={image5} alt="Third slide" />
          <Carousel.Caption>
            <h2>999Club</h2>
            <p>Shelter in Deptford is sponsored by Lowe Guardians</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img className="d-block w-100" src={image6} alt="Third slide" />
          <Carousel.Caption>
            <h2>Hackney food bank</h2>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </>
  );
}

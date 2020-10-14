import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import './Carousel.css';
import image1 from '../assets/images/literoflight.jpg';
import image2 from '../assets/images/kindness.jpg';
import image3 from '../assets/images/plasticoceans.jpg';
import image4 from '../assets/images/999club.jpg';
import image5 from '../assets/images/mind.jpg';
import image6 from '../assets/images/hackneyfoodbank.jpg';



export default function() {
    return (
        <Carousel className="carouselContainer">
        <Carousel.Item>
        <img
            className="d-block w-100"
            src={image1}
            alt="Jean Seberg"
        />
        <Carousel.Caption>
            <h3>Support Us</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
        </Carousel.Item>


        <Carousel.Item>
        <img
            className="d-block w-100"
            src={image2}
            alt="Second slide"
        />
        <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
        <img
            className="d-block w-100"
            src={image3}
            alt="Third slide"
        />
        <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
        </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
        <img
            className="d-block w-100"
            src={image4}
            alt="Third slide"
        />
        <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
        </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
        <img
            className="d-block w-100"
            src={image5}
            alt="Third slide"
        />
        <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
        </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
        <img
            className="d-block w-100"
            src={image6}
            alt="Third slide"
        />
        <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
        </Carousel.Caption>
        </Carousel.Item>

    </Carousel>
    );
}

import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import image1 from '../assets/images/Jean-Seberg.jpg';
import image2 from '../assets/images/Jean-Seberg.jpg';
import image3 from '../assets/images/Jean-Seberg.jpg';



export default function() {
    return (
        <Carousel>
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
    </Carousel>
    );
}

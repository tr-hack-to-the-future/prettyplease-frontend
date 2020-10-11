import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import "./Jumbotron.css";
import {Row, Col} from "react-bootstrap";
import image from '../assets/images/ministryofstories.jpg';


export default function() {
    return (
        <Jumbotron className='Jumbotron'>
            <Row>
                <Col sm={8}><img src={image} alt="this is an image"/></Col>
                <Col sm={4}>
                <h2>Actions speak louder than emojis</h2>
                    <p>
                    Pledge and gratitude work hand in hand. Whether you are a charity or a company, find initiatives and sponsors that match your values
                    </p>
                </Col>
            </Row>
        </Jumbotron>
    );
}

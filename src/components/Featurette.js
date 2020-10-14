import React from 'react';
import "./Featurette.css";
import {Row, Col} from "react-bootstrap";


export default function() {
    return (
        <container>
            <h1> Bouji bouji</h1>
            <Row>
                <Col sm={10}>
                    <p>At Pretty P***** asking is not a taboo.  We start from the principle that if you don't ask you get. Our bespoke platform connects charities to compatible sponsors. On our platform generosity prevails.</p>
                    <p>You are a charity: Let companies wear your badge of honour, connect with the most ethical organisation globally</p>
                    <p>you are a sponsor: you don't <span></span>where your mouth is, wear your <span></span> on your sleeve </p>
                </Col>
                
                {/* <Col sm={4}>
                <h2>Actions speak louder than emojis</h2>
                    <p>
                    Pledge and gratitude work hand in hand. Whether you are a charity or a company, find initiatives and sponsors that match your values
                    </p>
                </Col> */}
            </Row>
        </container>
    );
}
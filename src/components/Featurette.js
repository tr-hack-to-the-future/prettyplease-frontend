import React from 'react';
import "./Featurette.css";
import {Row, Col} from "react-bootstrap";


export default function() {
    return (
        <container className="featuretteContainer">
            <Row>
                <Col sm={10}>
                    <h4> Bouji bouji
                    <p>At Pretty P***** asking is not a taboo.  We start from the principle that if you don't ask you get. Our bespoke platform connects charities to compatible sponsors. On our platform generosity prevails.</p>
                    <p>You are a charity: Let companies wear your badge of honour, connect with the most ethical organisation globally</p>
                    <p>you are a sponsor: you don't <span role="img" aria-label="shit">💩</span> where your mouth is, wear your <span role="img" aria-label="shit">❤️</span> on your sleeve </p></h4>
                </Col>
            </Row>
        </container>
    );
}
import React, { Component, useState } from 'react';
import PPNavbar from './PPNavbar';
import { Container, Card, Row, Col } from 'react-bootstrap';

function SponsorCard() {
    // const [navitems, setnavitems] = useState([
    //     { itemName: "Choose a Sponsorship Opportunity", activePage: true }
    // ]);
    // const [showProfile, setshowProfile] = useState(true);

    const styles = {
        card: {
            padding: 'p-3',
             width: "40rem",

        },
        cardImage: {
            // padding: "5%"
        }

    }
    // TODO - props
    const amount = "£1500";
    const duration = "1 year";
    // TODO - create logo as component?


    return (
        <Container>
            <Card className="m-2 border-1 shadow" style={styles.card}>
                <Row>
                    <Col>
                        <Card.Img variant="top" src={require("./foodbank-logo.png")} style={styles.cardImage} alt="Charity image" />
                    </Col>
                    <Col>
                        <Card.Body>
                            <Card.Title>Foodbank</Card.Title>
                            <a href="Charity1.html" class="stretched-link">
                                <Card.Text>
                                    Help underwrite some of our operating costs by becoming a ‘Friend’ of our Foodbank.
                                </Card.Text>
                            </a>
                            {/* <Button variant="primary">Go somewhere</Button> */}
                            <div>
                                <span className="card-text inline col-sm-12 col-md-6 pl-0 pr-1 small">Amount: {amount}</span>
                                <span className="card-text inline col-sm-12 col-md-6 p-0 small">Duration: {duration}</span>
                            </div>
                        </Card.Body>

                    </Col>

                </Row>
            </Card>


            {/* <div className="card-deck mt-4">
                    <div className="row">
                        <div className="col sm-12 md-6 lg-6">
                            <div
                                className="row no-gutters border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative"
                            >
                                <div className="col-auto d-none d-lg-block">
                                    <svg
                                        className="bd-placeholder-img"
                                        width="200"
                                        height="200"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <image
                                            href="./foodbank-logo.png"
                                            height="200"
                                            width="200"
                                        ></image>
                                    </svg>
                                </div>
                                <div className="col p-4 d-flex flex-column position-static">
                                    <a href="Charity1.html" class="stretched-link">
                                        <strong class="d-inline-block mb-2 text-primary"
                                        >Foodbank</strong>
                                        <p className="card-text mb-auto">
                                            Help underwrite some of our operating costs by becoming a
                                            ‘Friend’ or ‘Patron’ of our Foodbank.
                                        </p>
                                    </a>
                                    <div>
                                        <span
                                            className="card-text inline col-sm-12 col-md-6 pl-0 pr-1 small"
                                        >Amount: £1500</span
                                        >
                                        <span className="card-text inline col-sm-12 col-md-6 p-0 small"
                                        >Duration: 1 year</span
                                        >
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                 */}
        </Container>
    );
}

export default SponsorCard;
import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';

function DisplayCardRequest({ charity }) {

    const logo = "./charity-logo-blue.png";
    return (

        charity.map(ch =>
            <Row
                className="no-gutters border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                <Col className="col-auto flex-column">
                    <img src={logo} width="200" height="200" alt="charity logo" />
                </Col>
                <Col className="col p-4 d-flex flex-column position-static">
                    <a href="Charity1.html" class="stretched-link">
                        <Card.Title>{ch.charityName}</Card.Title>
                        <Card.Text >{ch.description}</Card.Text>
                    </a>
                    <Card.Text>
                        <Row>
                            <Col>
                                <Card.Text>
                                    Amount: {ch.amount}
                                </Card.Text>
                            </Col>
                            <Col>
                                <Card.Text>
                                    Duration: {ch.duration}
                                </Card.Text>

                            </Col>
                        </Row>
                    </Card.Text>
                </Col>
            </Row>
        )
    );
}

export default DisplayCardRequest;
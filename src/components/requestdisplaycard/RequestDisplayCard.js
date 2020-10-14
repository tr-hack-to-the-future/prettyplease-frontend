import React from 'react';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { Link } from 'react-router-dom';
import { getFormattedAmount, getFormattedDuration } from '../requestformatter';

function RequestDisplayCard({ cardData }) {

    const amount = getFormattedAmount(cardData.amount);
    const duration = getFormattedDuration(cardData.duration);

    return (
        <Link to={`/ForSponsors/${cardData.requestId}`}>
            <Row
                className="no-gutters border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                <Col className="col-auto flex-column">
                    <img
                        src={cardData.image}
                        width="200"
                        height="200"
                        alt={cardData.charityName}
                    />
                </Col>
                <Col className="col p-4 d-flex flex-column position-static">
                    <Card.Body>
                        <Card.Title>{cardData.charityName}</Card.Title>
                        <Card.Text >{cardData.description}</Card.Text>
                        <Row className="pt-2 pb-2">
                            <Col>
                                <Card.Text>
                                    Amount: {amount}
                                </Card.Text>
                            </Col>
                            <Col>
                                <Card.Text>
                                    Duration: {duration}
                                </Card.Text>

                            </Col>
                        </Row>
                    </Card.Body>
                </Col>
            </Row>
        </Link>
    );
}

export default RequestDisplayCard;
import React from 'react';
import { useState, useEffect } from 'react';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import OfferPendingDisplayCard from '../offerpendingdisplaycard/OfferPendingDisplayCard';
import { useHistory } from 'react-router-dom';
import { useAuth } from "../Firebase/AuthContext";
import "./SponsorPagePending.css";
import { getFormattedPlural } from '../requestformatter';


function SponsorPagePending() {

    const history = useHistory();
    const handleAccepted = () => {
        history.push("/ForSponsorsAccepted");
    }
    const handleRequests = () => {
        history.push("/ForSponsors");
    }

    // fetch the sponsor offers    
    let { offers, getOffers } = useAuth();
    try {
        getOffers();
    } catch (e) {
        console.log(e)
    }

    const offersPending = offers.filter(
        offer => offer.offerStatus === "PENDING"
    );

    return (
        <div className="SponsorPagePending">
            <Container>
                {/* TODO temporary buttons for navigation - will be moved into Navbar */}
                <Row className="justify-content-md-center mt-4">
                    <Col>
                        <Button variant="outline-primary ml-5" size="lg" onClick={handleRequests}>
                            Requests
                        </Button>
                    </Col>
                    <Col>
                        <Button variant="outline-primary ml-5" size="lg" disabled>
                            Offers Pending
                        </Button>
                    </Col>
                    <Col>
                        <Button variant="outline-primary ml-5" size="lg" onClick={handleAccepted}>
                            Offers Accepted
                        </Button>
                    </Col>
                </Row>
                <Row className="justify-content-md-center mt-4">
                    <p>You have {offersPending.length} pending sponsorship {getFormattedPlural("offer", offersPending.length)}</p>
                </Row>

                <Row>
                    <Card>
                        <OfferPendingDisplayCard cardData={offersPending} />
                    </Card>

                </Row>

            </Container>
        </div>


    );
}

export default SponsorPagePending;
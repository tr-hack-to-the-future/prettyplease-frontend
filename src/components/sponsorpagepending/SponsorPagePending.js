import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import OfferPendingDisplayCard from '../offerpendingdisplaycard/OfferPendingDisplayCard';
import { useHistory } from 'react-router-dom';
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

    // TODO fetch sponsorId from currentUser context
    // Fetch the offers for a sponsor from the API
    const [sponsorOffers, setSponsorOffers] = useState([]);

    useEffect(() => {
        // TODO fetch sponsorId from currentUser context
        const currentUser = {
            uid: "b19dcdc9-1547-11eb-9ed1-0a7222284ed8",
            userType: "sponsor"
        };
        axios.get("https://xlkpx8p087.execute-api.eu-west-2.amazonaws.com/dev/sponsoroffers/" + currentUser.uid)
            .then(response => setSponsorOffers(response.data))
            .catch(error => console.log(error));
    }, []);

    const offers = sponsorOffers.filter(
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
                    <p>You have {offers.length} pending sponsorship {getFormattedPlural("offer", offers.length)}</p>
                </Row>

                <Row>
                    <Card>
                        <OfferPendingDisplayCard cardData={offers} />
                    </Card>

                </Row>

            </Container>
        </div>


    );
}

export default SponsorPagePending;
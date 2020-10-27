import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import OfferAcceptedDisplayCard from '../offeraccepteddisplaycard/OfferAcceptedDisplayCard';
import { useHistory } from 'react-router-dom';
import { useAuth } from "../Firebase/AuthContext";
import "./SponsorPageAccepted.css";
import { getFormattedPlural } from '../requestformatter';

function SponsorPageAccepted() {
    const history = useHistory();
    const handlePending = () => {
        history.push("/ForSponsorsPending");
    }
    const handleRequests = () => {
        history.push("/ForSponsors");
    }

    //     // TODO fetch sponsorId from currentUser context
    //     // Fetch the offers for a sponsor from the API
    //     const [sponsorOffers, setSponsorOffers] = useState([]);

    //     useEffect(() => {
    //         // TODO fetch sponsorId from currentUser context
    //   // const {currentUser} = useAuth();
    //   const currentUser = {
    //     //   uid: "b19dcdc9-1547-11eb-9ed1-0a7222284ed8",
    //     uid: "CyQ1Hku3lZb9NMni5BF1eWis18d2", // sponsor IOI@gmail.com
    //         userType: "sponsor"
    //      }
    //         axios.get("https://xlkpx8p087.execute-api.eu-west-2.amazonaws.com/dev/sponsoroffers/" + currentUser.uid)
    //             .then(response => setSponsorOffers(response.data))
    //             .catch(error => console.log(error));
    //     }, []);

    let { offers, getOffers } = useAuth();
    try {
        getOffers();
    } catch (e) {
        console.log(e)
    }
    const offersAccepted = offers.filter(
        offer => offer.offerStatus === "ACCEPTED"
    );


    return (
        <div className="SponsorPageAccepted">
            <Container>
                {/* TODO temporary buttons for navigation - will be moved into Navbar */}
                <Row className="justify-content-md-center mt-4">
                    <Col>
                        <Button variant="outline-primary ml-5" size="lg" onClick={handleRequests}>
                            Requests
                        </Button>
                    </Col>
                    <Col>
                        <Button variant="outline-primary ml-5" size="lg" onClick={handlePending}>
                            Offers Pending
                        </Button>
                    </Col>
                    <Col>
                        <Button variant="outline-primary ml-5" size="lg" disabled>
                            Offers Accepted
                        </Button>
                    </Col>
                </Row>
                <Row className="justify-content-md-center mt-4">
                    <p>You have {offersAccepted.length} accepted sponsorship {getFormattedPlural("offer", offersAccepted.length)}</p>
                </Row>

                <Row>
                    <Card>
                        <OfferAcceptedDisplayCard cardData={offersAccepted} />
                    </Card>

                </Row>

            </Container>
        </div>


    );
}

export default SponsorPageAccepted;
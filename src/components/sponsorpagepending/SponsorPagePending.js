import React from 'react';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import OfferPendingDisplayCard from '../offerpendingdisplaycard/OfferPendingDisplayCard';
import { useHistory } from 'react-router-dom';
import "./SponsorPagePending.css";
import { getFormattedPlural } from '../requestformatter';

function SponsorPagePending({ offers }) {

    const history = useHistory();
    const handleClick = () => {
        history.push("/ForSponsors");
    }
    const handleAccepted = () => {
        history.push("/ForSponsorsAccepted");
    }
    const handleRequests = () => {
        history.push("/ForSponsors");
    }

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
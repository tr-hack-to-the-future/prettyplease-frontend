import React from 'react';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import OfferAcceptedDisplayCard from '../offeraccepteddisplaycard/OfferAcceptedDisplayCard';
import { useHistory } from 'react-router-dom';
import "./SponsorPageAccepted.css";

function SponsorPageAccepted({ requests }) {

    const history = useHistory();
    const handleClick = () => {
        history.push("/ForSponsors");
    }


    const formatText = requests.length === 1 ? 'offer' : 'offers';
    return (
        <div className="SponsorPageAccepted">
            <Container>
                {/* TODO temporary buttons for navigation - will be moved into Navbar */}
                <Row className="justify-content-md-center mt-4">
                    <Col>
                        <Button variant="outline-primary ml-5" size="lg" onClick={handleClick}>
                            Requests
                        </Button>
                    </Col>
                    <Col>
                        <Button variant="outline-primary ml-5" size="lg">
                            Offers Pending
                        </Button>
                  </Col>                    
                    <Col>
                        <Button variant="outline-primary ml-5" size="lg" disabled>
                            Offers Accepted
                        </Button>
                    </Col>
                    <Col>
                        <Button variant="outline-primary ml-5" size="lg" >
                            Offers Declined
                        </Button>
                    </Col>
                </Row>
                <Row className="justify-content-md-center mt-4">
                    <p>You have {requests.length} ACCEPTED sponsorship {formatText}</p>
                </Row>

                <Row>
                    <Card>
                        <OfferAcceptedDisplayCard cardData={requests} />
                    </Card>

                </Row>

            </Container>
        </div>


    );
}

export default SponsorPageAccepted;
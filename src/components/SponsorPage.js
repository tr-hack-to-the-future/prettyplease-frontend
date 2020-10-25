import React from 'react';
import Card from 'react-bootstrap/Card';
import "./SponsorPage.css";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import RequestDisplayCard from './requestdisplaycard/RequestDisplayCard';
import Button from 'react-bootstrap/Button';
import { useHistory } from 'react-router-dom';
import { getFormattedPlural } from './requestformatter';

function SponsorPage({ requests }) {

  // const formatText = requests.length === 1 ? 'request' : 'requests';

  const history = useHistory();
  const handlePending = () => {
    history.push("/ForSponsorsPending");
  }
  const handleAccepted = () => {
    history.push("/ForSponsorsAccepted");
  }

  return (
    <div className="SponsorPage">
      <Container>
        {/* TODO temporary buttons for navigation - will be moved into Navbar */}
        <Row className="justify-content-md-center mt-4">
          <Col>
            <Button variant="outline-primary ml-5" size="lg" disabled>
              Requests
            </Button>
          </Col>
          <Col>
            <Button variant="outline-primary ml-5" size="lg" onClick={handlePending}>
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
          <p>There are {requests.length} sponsorship {getFormattedPlural("request", requests.length)} available</p>
        </Row>

        <Row>
          <Card>
            <RequestDisplayCard cardData={requests} />
          </Card>

        </Row>

      </Container>
    </div>


  );
}

export default SponsorPage;

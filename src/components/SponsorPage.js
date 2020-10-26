import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Card from 'react-bootstrap/Card';
import "./SponsorPage.css";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import RequestDisplayCard from './requestdisplaycard/RequestDisplayCard';
import Button from 'react-bootstrap/Button';
import { useHistory } from 'react-router-dom';
import { getFormattedPlural } from './requestformatter';
import {useAuth} from "./Firebase/AuthContext"
import {Route,Redirect,useLocation} from 'react-router-dom';

function SponsorPage() {
  let {currentUser} = useAuth();
  let location = useLocation();

  const history = useHistory();
  const handlePending = () => {
    history.push("/ForSponsorsPending");
  }
  const handleAccepted = () => {
    history.push("/ForSponsorsAccepted");
  }


  // Fetch the requests from the API
  const [fundingRequests, setRequests] = useState([]);
  useEffect(() => {
    // TODO fetch sponsorId from currentUser context
    const currentUser = {
      uid: "b19dcdc9-1547-11eb-9ed1-0a7222284ed8",
      userType: "sponsor"
    };

    axios.get("https://xlkpx8p087.execute-api.eu-west-2.amazonaws.com/dev/sponsorrequests/" + currentUser.uId)
      .then(response => setRequests(response.data))
      .catch(error => console.log(error));
  }, []);
  const requests = fundingRequests.filter(
    request => request.requestStatus === "OPEN"
  );


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
            <RequestDisplayCard key={requests.requestId} cardData={requests} />
          </Card>

        </Row>

      </Container>
    </div>

  );
}

export default SponsorPage;

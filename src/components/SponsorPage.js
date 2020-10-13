import React from 'react';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import RequestDisplayCard from './requestdisplaycard/RequestDisplayCard';
import Button from 'react-bootstrap/Button';
import { useHistory } from 'react-router-dom';

function SponsorPage({ requests }) {

    const formatText = requests.length === 1 ? 'request' : 'requests';

    const history = useHistory();
    const handleClick = () => {
        history.push("/ForSponsorsAccepted");
    }


    return (
        <div className="SponsorPage">
            <Container>
                <Row className="justify-content-md-center mt-4">
                    <Button variant="outline-primary ml-5" size="lg" onClick={handleClick}>
                        View Accepted Requests
                    </Button>
                </Row>
                <Row className="justify-content-md-center mt-4">
                    <p>There are {requests.length} sponsorship {formatText} available</p>
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
import React from 'react';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import RequestAcceptedDisplayCard from '../requestaccepteddisplaycard/RequestAcceptedDisplayCard';

function SponsorPageAccepted({ requests }) {

    const formatText = requests.length === 1 ? 'request' : 'requests';

    return (
        <div className="SponsorPageAccepted">
            <Container>
                <Row className="justify-content-md-center mt-4">
                    <p>You have {requests.length} ACCEPTED sponsorship {formatText}</p>
                </Row>

                <Row>
                    <Card>
                        <RequestAcceptedDisplayCard cardData={requests} />
                    </Card>

                </Row>

            </Container>
        </div>


    );
}

export default SponsorPageAccepted;
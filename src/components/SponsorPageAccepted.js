import React from 'react';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import RequestDisplayCard from './requestdisplaycard/RequestDisplayCard';

function SponsorPageAccepted({ requests }) {

    const formatText = requests.length === 1 ? 'request' : 'requests';

    return (
        <div className="SponsorPage">
            <Container>
                <Row className="justify-content-md-center mt-4">
                    <p>You have {requests.length} ACCEPTED sponsorship { formatText }</p>
                </Row>

                <Row>
                    <Card>
                        {requests.map((request) =>
                            <RequestDisplayCard cardData={request} />
                        )}
                    </Card>

                </Row>

            </Container>
        </div>


    );
}

export default SponsorPageAccepted;
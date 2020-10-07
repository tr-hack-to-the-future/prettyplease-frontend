import React from 'react';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import RequestDisplayCard from './requestdisplaycard/RequestDisplayCard';

function SponsorPage({ requests }) {


    return (
        <div className="SponsorPage">
            <Container>
                <Row className="justify-content-md-center mt-4">
                    <p>There are {requests.length} sponsorship requests available</p>
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

export default SponsorPage;
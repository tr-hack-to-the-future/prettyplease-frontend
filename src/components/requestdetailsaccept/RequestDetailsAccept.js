import React from 'react';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';

import { BrowserRouter as Router, useHistory, useParams, Link } from 'react-router-dom';

function RequestDetailsAccept({ request }) {

    let history = useHistory();
    let { id } = useParams();
    let dispRequest = request[id - 1];

    function handleClick() {
        history.push("/ForSponsors");
    }

    return (
        <Container>
            <Row className="row justify-content-center mt-5 mb-4 text-primary">
                <h3>{dispRequest.charityName}</h3>
            </Row>
            <div className="rounded mx-auto d-block  text-center">
                <img
                    src={dispRequest.image}
                    width="200"
                    height="200"
                    alt={dispRequest.charityName}
                />
            </div>
            <div className="row justify-content-center mt-5 ">
                <p>{dispRequest.incentive}</p>
            </div>
            <Router>
                <Row className=" justify-content-center mt-5 ">
                    <Link href="">
                        <Button
                            variant="outline-primary"
                            size="lg"
                            onClick={() => history.goBack()}>
                            Back
                        </Button>
                    </Link>
                    <Link href="">
                        <Button variant="outline-primary ml-5" size="lg">
                            Accept
                        </Button>
                    </Link>
                </Row>
            </Router>
        </Container>
    );
}


export default RequestDetailsAccept;
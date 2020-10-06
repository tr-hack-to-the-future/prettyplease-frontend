import React from 'react';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import { useHistory } from 'react-router-dom';

function DisplayRequest() {

    let history = useHistory();

    function handleClick() {
        history.push("/ForSponsors");
    }

    return (
        <Container>
            <h3>
                Sponsorship Request
            </h3>
            <div>
                <Button variant="primary" onClick={handleClick}>
                    Back
                </Button>
            </div>
        </Container>

    );

}


    export default DisplayRequest;
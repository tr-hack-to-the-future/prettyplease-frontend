import React from 'react';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

function ConfirmationRequestPage() {
  return (
    <div>
      <Container className="container-ConfirmationPage">
        <Row className="justify-content-md-center mt-4">
          <h2>CONGRATULATIONS!</h2>
        </Row>
        <Row className="justify-content-md-center mt-4">
          <h3>Your request has been saved</h3>
        </Row>
      </Container>
    </div>
  );
}
export default ConfirmationRequestPage




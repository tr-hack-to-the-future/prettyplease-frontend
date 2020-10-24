import React from 'react';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

function FailRequestPage() {
  return (
    <div>
      <Container className="container-FundRequest">
        <Row className="justify-content-md-center mt-4">
          <h2>SORRY!</h2>
        </Row>
        <Row className="justify-content-md-center mt-4">
          <h3>Something has been wrong. Please, try again!</h3>
        </Row>
      </Container>
    </div>
  );
}
export default FailRequestPage
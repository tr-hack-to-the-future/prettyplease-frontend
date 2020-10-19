import React, { Component, useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";


function ConfirmationRequestPage() {
  return (
      
    <div >
      <Container>
          {console.log('I am in the confirm page')}
         <p>Hello</p>
        <Row className="justify-content-md-center mt-4">
          <h1>CONGRATULATIONS</h1>
          <h2>Your request has been saved</h2>
        </Row>
      </Container>
    </div>
  );
}

export default ConfirmationRequestPage;
import React from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import "./Jumbotron.css";
import Nav from "react-bootstrap/Nav";
import { Row, Col } from "react-bootstrap";

export default function() {
  return (
    <Jumbotron className="Jumbotron">
      <Row>
        <Col sm={7}>
          <img
            className="jumbotronImage"
            src="https://www.telegraph.co.uk/content/dam/good-news/seven-seas/ministry-of-stories-gemma-day-xlarge.jpg"
            alt="new"
          />
          <figureCaption>
            <p>Alfa supports the Ministry of Stories</p>
          </figureCaption>
        </Col>

        <Col sm={4}>
          <h2>Actions speak louder than emojis</h2>
          <p>
            Pledge and gratitude work hand in hand. Whether you are a charity or
            a company, find initiatives and sponsors that match your values
          </p>

          <Nav>
            <Nav.Link className="buttonNav" href="/ForSponsors">
              For Sponsors
            </Nav.Link>
            <Nav.Link className="buttonNav" href="/ForCharities">
              For Charities
            </Nav.Link>
          </Nav>
        </Col>
      </Row>
    </Jumbotron>
  );
}

import React from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import "./Jumbotron.css";
import Nav from "react-bootstrap/Nav";
import { Row, Col } from "react-bootstrap";

export default function() {
  return (
    <Jumbotron className="Jumbotron">
      <Row>
        <Col sm={6}>
          <img
            className="jumbotronImage"
            src="https://www.telegraph.co.uk/content/dam/good-news/seven-seas/ministry-of-stories-gemma-day-xlarge.jpg"
            alt="new"
          />
          <figureCaption>
            <p className="captiontext">Alfa sponsors the Ministry of Stories</p>
          </figureCaption>
        </Col>

        <Col sm={5}>
          <h2>Actions speak louder than emojis</h2>
          <p>
            Plea and gratitude work hand in hand. Whether you are a charity or a
            company, find sponsors and initiatives that match your values
          </p>

          <Nav>
            <Nav.Link className="buttonNav" href="/prettyplease-frontend/#/ForSponsors">
              For Sponsors
            </Nav.Link>
            <Nav.Link className="buttonNav" href="/prettyplease-frontend/#/ForCharities">
              For Charities
            </Nav.Link>
          </Nav>
        </Col>
      </Row>
    </Jumbotron>
  );
}

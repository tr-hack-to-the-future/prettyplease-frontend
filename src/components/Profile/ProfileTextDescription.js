import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import TextareaAutosize from "react-textarea-autosize";
import "./ProfileTextDescription.css";

function ProfileTextDescription({ detailsProfile, changeProfile }) {
  // Variable to control the modal
  const [smShow, setSmShow] = useState(false);
  const [name, setName] = useState();
  const [description, setDescription] = useState();
  const handlerName = (event) => {
    setName(event.target.value);
  };
  const handlerDescription = (event) => {
    setDescription(event.target.value);
  };
  const handlerEdit = (event) => {
    changeProfile(name, description);
    setSmShow(true);
  };

  return (
    <div>
      <Container className="profile-text-description-container">
        <Row>
          {/* Show the image of the Profile in the first column*. The image is not modifiable yet*/}
          <Col className="col-auto flex-column" xs={6} md={4}>
            <img
              src={detailsProfile.map((data) => data.imageUrl)}
              width="200"
              height="200"
              alt={detailsProfile.map((data) => data.name)}
            />
          </Col>

          {/* A form to show the information of the profile: Name and description */}
          <Col xs={12} md={8}>
            <Form.Group controlId="exampleForm.ControlTextarea1">
              <Form.Label className="text-primary">Name</Form.Label>
              <Form.Control
                type="text"
                defaultValue={detailsProfile.map((data) => data.name)}
                onChange={handlerName}
              />
            </Form.Group>
            <br />
            {/* The textArea is autosize. Look import TextareaAutosize at the beggining*/}
            <Form.Group controlId="exampleForm.ControlTextarea1">
              <Form.Label className="text-primary">Description</Form.Label>
              <TextareaAutosize
                className="auto-size-textarea"
                defaultValue={detailsProfile.map((data) => data.description)}
                onChange={handlerDescription}
              />
            </Form.Group>
            <Row>
              <Col md={{ span: 3, offset: 4 }}>
                {/* Press the button, set the values of the profile and the show a modal to the user */}
                <Button
                  onClick={handlerEdit}
                  variant="outline-primary"
                  type="submit"
                >
                  Save changes
                </Button>
                <Modal
                  size="sm"
                  show={smShow}
                  onHide={() => setSmShow(false)}
                  aria-labelledby="example-modal-sizes-title-sm"
                >
                  <Modal.Header closeButton>
                    <Modal.Title id="example-modal-sizes-title-sm">
                      Congratulations!
                    </Modal.Title>
                  </Modal.Header>
                  <Modal.Body>Your changes have been saved</Modal.Body>
                </Modal>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default ProfileTextDescription;

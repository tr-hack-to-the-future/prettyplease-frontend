import React, { Component, useState } from 'react';
import './ProfileTextDescription.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import TextareaAutosize from 'react-textarea-autosize';
import Modal from 'react-bootstrap/Modal'

function ProfileTextDescription({ detailsProfile, changeProfile }) {
    //TODO use the local variables to get/set the values of the fields, in order to update the state

    // Variable to control the modal
    const [smShow, setSmShow] = useState(false);

    // Set the default values to the values receive from the App.js
    const [image, setImage] = useState(
        // detailsProfile.map((data) => data.image)
    );

    // const updatedProfile = [...detailsProfile];
    const [name, setName] = useState(
        // detailsProfile.map((data) => data.name)
    );
    console.log("This is the url of the image" + detailsProfile.map((data) => data.image));
    const [description, setDescription] = useState(
        // detailsProfile.map((data) => data.description)
    );
    const handlerName = (event) => {
        setName(event.target.value);
    }
    const handlerDescription = (event) => {
        setDescription(event.target.value);
    }
    const handlerEdit = (event) => {
        //  Update the state of the variable in App.js
        changeProfile(name, description);
        setSmShow(true)
    }


    return (

        <div >

            <Container className="profile-text-description-container">
                <Row>
                    {/* Show the image of the Profile in the first column*. The image is not modifiable yet*/}
                    <Col className="col-auto flex-column" xs={6} md={4}>
                        <img

                            src={detailsProfile.map((data) => data.imageUrl)}
                            // src={image}
                            width="200"
                            height="200"
                            alt={detailsProfile.map((data) => data.imageUrl)}
                        // alt={image}
                        />
                    </Col>

                    {/* A form to show the information of the profile: Name and description */}
                    <Col xs={12} md={8}>
                        <Form.Group controlId="exampleForm.ControlTextarea1">
                            <Form.Label className="text-primary">
                                Name
                            </Form.Label>
                            <Form.Control type="text"
                                // defaultValue={name}
                                defaultValue={detailsProfile.map((data) => data.name)}
                                onChange={handlerName}
                            />
                        </Form.Group>
                        <br />
                        {/* The textArea is autosize. Look import TextareaAutosize at the beggining*/}
                        <Form.Group controlId="exampleForm.ControlTextarea1">
                            <Form.Label className="text-primary">Description</Form.Label>
                            <TextareaAutosize className="auto-size-textarea"
                                defaultValue={detailsProfile.map((data) => data.description)}
                                onChange={handlerDescription}
                            />
                        </Form.Group>
                        <Row>
                            <Col md={{ span: 3, offset: 4 }}>
                                {/* Press the button, set the values of the profile and the show a modal to the user */}
                                <Button onClick={handlerEdit} variant="outline-primary" type="submit">Save changes</Button>
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
    )
}

export default ProfileTextDescription;
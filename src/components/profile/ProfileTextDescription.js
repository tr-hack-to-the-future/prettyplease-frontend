import React, { Component, useState } from 'react';
import './ProfileTextDescription.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import TextareaAutosize from 'react-textarea-autosize';

function ProfileTextDescription({ detailsProfile, changeProfile }) {
    {/* Set the default values to the values receive from the App.js*/}
    const [image, setImage] = useState(
        detailsProfile.map((data) => data.image)
    );
    const [name, setName] = useState(
        detailsProfile.map((data) => data.name)
    );
    const [description, setDescription] = useState(
        detailsProfile.map((data) => data.description)
    );
    const handlerName = (event) => {
        setName(event.target.value);
    }
    const handlerDescription = (event) => {
        setDescription(event.target.value);
    }
    const handlerEdit = (event) => {
     {/* Update the state of the variable in App.js */}
        changeProfile(name, description);
    }

    return (

       <div >

            <Container className="profile-text-description-container">
                <Row>
                    {/* Show the image of the Profile in the first column*. The image is not modifiable yet*/}
                    <Col className="col-auto flex-column" xs={6} md={4}>
                        <img
                            src={image}
                            width="200"
                            height="200"
                            alt={image}
                        />
                    </Col>

                    {/* A form to show the information of the profile: Name and description */}
                    <Col xs={12} md={8}>
                        <Form.Group controlId="exampleForm.ControlTextarea1">
                            <Form.Label className="text-primary">
                                Name
                            </Form.Label>
                            <Form.Control type="text"
                                defaultValue={name}
                                onChange={handlerName}
                            />
                        </Form.Group>
                        <br />
                        {/* The textArea is autosize. Look import TextareaAutosize at the beggining*/}
                        <Form.Group controlId="exampleForm.ControlTextarea1">
                            <Form.Label className="text-primary">Description</Form.Label>
                            <TextareaAutosize className="auto-size-textarea"
                                defaultValue={description}
                                onChange={handlerDescription}
                            />
                        </Form.Group>
                        <Row>
                            <Col md={{ span: 3, offset: 4 }}>
                                <Button onClick={handlerEdit} variant="outline-primary" type="submit">Save changes</Button>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default ProfileTextDescription;
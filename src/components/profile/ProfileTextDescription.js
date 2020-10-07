import React, { Component, useState } from 'react';
import './ProfileTextDescription.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import TextareaAutosize from 'react-textarea-autosize';

function ProfileTextDescription({detailsProfile, changeProfile}) {
// const [name, setName]=useState("");
    const handlerEdit =(event)=>{
        changeProfile (event.target.name, event.target.description )
        // const inputName = event.target.name;
        // const inputDescription = event.target.description;
    

    }
    return (
        
        detailsProfile.map((data) =>
  
            <div >
                
                <Container className="profile-text-description-container">

                <Row>
                    <Col className="col-auto flex-column" xs={6} md={4}>
                        <img
                        src={data.image}
                        width="200"
                        height="200"
                        alt={data.image}
                        />

                    </Col>
                    <Col xs={12} md={8}>
                        <Form.Group controlId="exampleForm.ControlTextarea1">
                            <Form.Label className="text-primary">
                                Name
                            </Form.Label>
                            <Form.Control type="text" 
                            defaultValue={data.name}
                            //  onChange={handlerName}
                            // editable="true"
                            // defaultValue ={data.name}

                            />
                        </Form.Group>
                        <br />  
                        <Form.Group controlId="exampleForm.ControlTextarea1">
                        {/* <Form.Group className="auto-size-textarea" controlId="exampleForm.ControlTextarea1"> */}
                            <Form.Label className="text-primary">Description</Form.Label>
                            {/* <Form.Control 
                            as="textarea" 
                            rows={3} 
                            defaultValue= {data.description}
                      
                            /> */}
                        <TextareaAutosize className="auto-size-textarea"
                        defaultValue= {data.description}
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
        
    );
}

export default ProfileTextDescription;
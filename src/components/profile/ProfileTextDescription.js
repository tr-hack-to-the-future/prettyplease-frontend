import React, { Component, useState } from 'react';
import './ProfileTextDescription.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form'

function ProfileTextDescription({detailsProfile}) {

    const handlerEdit =()=>{

    }
    return (
        
        detailsProfile.map((data) =>
  
            <div >
                
                <Container className="profile-text-description-container">
                    
                    {/* <Row className="justify-content-md-center profile-text-description">
                        <Col xs={{span: 12, offset: 6}} md={{span: 2, offset: 0}} className="text-primary"><h6>Name</h6></Col>
                        <Col xs={{span: 12, offset: 2}} md={{span: 4, offset: 0}} ><p>{data.name}</p></Col>
                        <Col xs={{span: 12, offset: 6}} md={{span: 2, offset: 0}}><Button onClick={handlerEdit} variant="outline-primary">Edit</Button></Col>
                    </Row>
                    <Row className="justify-content-md-center profile-text-description">
                        <Col xs={{span: 12, offset: 6}} md={{span: 2, offset: 0}} className="text-primary"><h6>Description</h6></Col>
                        <Col xs={{span: 12, offset: 2}} md={{span: 4, offset: 0}}>
                            <p>{data.description}</p></Col>
                        <Col xs={{span: 12, offset: 6}} md={{span: 2, offset: 0}}><Button onClick={handlerEdit} variant="outline-primary">Edit</Button></Col>
                    </Row>
                    <Row className="justify-content-md-center profile-text-description">
                        <Col xs={{span: 12, offset: 6}} md={{span: 2, offset: 0}} className="text-primary"><h6>Values</h6></Col>
                        <Col xs={{span: 12, offset: 2}} md={{span: 4, offset: 0}}><p>{data.values}</p></Col>
                        <Col xs={{span: 12, offset: 6}} md={{span: 2, offset: 0}}><Button onClick={handlerEdit} variant="outline-primary">Edit</Button></Col>
                    </Row> */}
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
                            <Form.Control type="text" defaultValue ={data.name}/>
                        </Form.Group>
                        <br />  
                        <Form.Group controlId="exampleForm.ControlTextarea1">
                            <Form.Label className="text-primary">Description</Form.Label>
                            <Form.Control 
                            as="textarea" 
                            rows={3} 
                            defaultValue= {data.description}
                      
                            />
                        </Form.Group>
                        <br />

                        <Form.Group controlId="exampleForm.ControlTextarea1">
                            <Form.Label className="text-primary">Values</Form.Label>
                            <Form.Control 
                                as="textarea" 
                                rows={3} 
                                defaultValue={data.values}
                            />
                        </Form.Group>
                    
                    <Button onClick={handlerEdit} variant="outline-primary" type="submit">Save changes</Button>
                    </Col>
                </Row>

                </Container>
            </div>
        )
        
    );
}

export default ProfileTextDescription;
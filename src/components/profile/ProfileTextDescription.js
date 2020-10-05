import React, { Component, useState } from 'react';
import './ProfileTextDescription.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

function ProfileTextDescription({detailsProfile}) {

    const handlerEdit =()=>{

    }
    return (
        
        detailsProfile.map((data) =>
  
            <div >
                
                <Container className="profile-text-description-container">
                    
                    <Row className="justify-content-md-center profile-text-description">
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
                    </Row>

                </Container>
            </div>
        )
        
    );
}

export default ProfileTextDescription;
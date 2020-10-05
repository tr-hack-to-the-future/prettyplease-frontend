import React, { Component, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

import DisplayCard from './DisplayCard';

function CharityPage({ charity }) {
 
    return (

        <div className="ReviewAccept">
           
            <Container>
                <Row className="justify-content-md-center mt-4">
                    <p>You have received {charity.length} offers for the request you made on 21/09/2020</p>
                </Row>
                <DisplayCard charity={charity}></DisplayCard>
                {/* <Col sm="12" md="6" lg="6">
                
                    {charity.map(ch => <DisplayCard spimg={ch.sponsorImg} name={ch.sponsorName} desc={ch.sponsorDesc} />)}
                
                </Col> */}
            </Container>

        </div>


    );
}



export default CharityPage;
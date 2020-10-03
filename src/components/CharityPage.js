import React, { Component, useState } from 'react';
import PPNavbar from './PPNavbar';


import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';

import { render } from '@testing-library/react';
import DisplayCard from './DisplayCard';






function CharityPage({ charity }) {
    const [navitems, setnavitems] = useState([
        { itemName: "Review and Accept", itemLink: "", itemAddr: "", activePage: true },
        { itemName: "Fund Request", itemLink: "/FundRequest", itemAddr: "FundRequest/", activePage: false }

    ]);
    const [showProfile, setshowProfile] = useState(true);


    return (

        <div className="ReviewAccept">
            <PPNavbar NavItems={navitems} showProfile={showProfile} />
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
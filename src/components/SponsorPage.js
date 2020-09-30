import React, { Component, useState } from 'react';
import { Container, CardDeck, Row, Col } from 'react-bootstrap';
import PPNavbar from './PPNavbar';
import SponsorCard from './SponsorCard';

function SponsorPage() {
    const [navitems, setnavitems] = useState([
        { itemName: "Choose a Sponsorship Request", activePage: true }

    ]);
    const [showProfile, setshowProfile] = useState(true);


    return (
        <Container  sm-12 md-6>
            <PPNavbar NavItems={navitems} showProfile={showProfile} />
            <h1>Sponsorship Requests</h1>
            <Row>
                <CardDeck className="mt-4">
                    <SponsorCard />
                </CardDeck>
            </Row>
        </Container>
    );
}

export default SponsorPage;
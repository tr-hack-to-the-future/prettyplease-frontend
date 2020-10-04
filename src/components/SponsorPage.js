import React, { Component, useState } from 'react';
import { Container, CardDeck, Row, Col } from 'react-bootstrap';

import SponsorCard from './SponsorCard';

function SponsorPage() {
    return (
        <Container  sm-12 md-6>
            
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
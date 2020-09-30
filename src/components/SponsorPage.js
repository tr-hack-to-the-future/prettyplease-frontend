import React, { Component, useState } from 'react';
import { Container } from 'react-bootstrap';
import PPNavbar from './PPNavbar';
import SponsorCard from './SponsorCard';

function SponsorPage() {
    const [navitems, setnavitems] = useState([
        { itemName: "Choose a Sponsorship Request", activePage: true }

    ]);
    const [showProfile, setshowProfile] = useState(true);


    return (
        <div className="container">
            <div className="SponsorPage">
                <PPNavbar NavItems={navitems} showProfile={showProfile} />
                <h1>Sponsorship Requests</h1>
                <SponsorCard />
            </div>
        </div>
    );
}

export default SponsorPage;
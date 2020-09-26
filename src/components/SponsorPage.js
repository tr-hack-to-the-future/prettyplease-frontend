import React,{ Component, useState } from 'react';
import PPNavbar from './PPNavbar';



function SponsorPage() {
    const [navitems, setnavitems] = useState([
        { itemName: "Choose a Sponsorship Opportunity", activePage: true }
        
      ]);
    const [showProfile,setshowProfile] = useState(true);


    return (
        <div className="SponsorPage">
        <PPNavbar NavItems={navitems} showProfile={showProfile}/>
        <h1>Sponsor Requests</h1>
        </div>

    );
}

export default SponsorPage;
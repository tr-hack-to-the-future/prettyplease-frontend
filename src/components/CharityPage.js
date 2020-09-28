import React, { Component, useState } from 'react';
import PPNavbar from './PPNavbar';



function CharityPage() {
    const [navitems, setnavitems] = useState([
        { itemName: "Review and Accept", itemLink:"",itemAddr: "", activePage: true },
        { itemName: "New Request",itemLink:"/NewRequest", itemAddr: "<NewRequest/>",activePage: false }
        
      ]);
    const [showProfile,setshowProfile] = useState(true);


    return (
        <div className="ReviewAccept">
        <PPNavbar NavItems={navitems} showProfile={showProfile}/>
        <h1>Charity Page</h1>
        </div>

    );
}

export default CharityPage;
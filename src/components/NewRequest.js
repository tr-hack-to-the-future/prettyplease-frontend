import React, { Component, useState } from 'react';
import PPNavbar from './PPNavbar';


function NewRequest() {
    const [navitems, setnavitems] = useState([
        { itemName: "Review and Accept", activePage: false },
        { itemName: "New Request", activePage: true }
        
      ]);
    const [showProfile,setshowProfile] = useState(true);


    return (
        <div className="NewRequest">
        <PPNavbar NavItems={navitems} showProfile={showProfile}/>
        <h1>New Request</h1>
        </div>
        
        



    );
}

export default NewRequest;
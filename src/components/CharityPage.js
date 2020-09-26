import React, { Component, useState } from 'react';
import PPNavbar from './PPNavbar';



function CharityPage() {
    const [navitems, setitems] = useState([
        { itemName: "Review and Accept", activePage: true },
        { itemName: "New Request", activePage: false }
        
      ]);


    return (
        <div className="ReviewAccept">
        <PPNavbar NavItems={navitems}/>
        <h1>Charity Page</h1>
        </div>

    );
}

export default CharityPage;
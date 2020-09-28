import React, { Component, useState } from 'react';
import PPNavbar from './PPNavbar';
import Sponsorlist from './Sponsorlist';
import CharityPage from './CharityPage';
import SponsorPage from './SponsorPage';

function Main({SponsorData}) {
  const [navitems, setitems] = useState([
    { itemName: "For Charities", itemLink:"/CharityPage", itemAddr: "CharityPage",activePage: false },
    { itemName: "For Sponsor", itemLink:"/SponsorPage", itemAddr: "SponsorPage",activePage: false}
    
  ]);
  const [showProfile,setshowProfile] = useState(false);
  
  return (
    <div className="Main">
      <PPNavbar NavItems={navitems}  showProfile={showProfile}/>

      <h2>Main</h2>
      <Sponsorlist SponsorData={SponsorData}/>
      {/* <p>You have {SponsorData.length} Sponsors</p> */}

       {/* <p>{SponsorData} 

      {SponsorData.forEach((sponsor)=> sponsor.sponsorName)}; */}
      {/* </p> */}
    </div>
  );
}

export default Main;

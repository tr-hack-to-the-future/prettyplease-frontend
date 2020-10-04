import React, { Component, useState } from 'react';

import Sponsorlist from './components/Sponsorlist';
import CharityPage from './components/CharityPage';
import SponsorPage from './components/SponsorPage';

function Main({SponsorData}) {

  return (
    <div className="Main">
      

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

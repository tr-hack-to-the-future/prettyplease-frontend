import React from 'react';
import PPNavbar from './components/PPNavbar';

function Main({SponsorData}) {
  return (
    <div className="Main">
      <PPNavbar />

      <h2>Main</h2>
      <p>You have {SponsorData.length} Sponsors</p>
       {/* <p>{SponsorData} 

      {SponsorData.forEach((sponsor)=> sponsor.sponsorName)}; */}
      {/* </p> */}
    </div>
  );
}

export default Main;

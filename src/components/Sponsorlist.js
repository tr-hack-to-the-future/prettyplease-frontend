import React from 'react';



function Sponsorlist({ SponsorData }) {



    return (
        <div className="container">

            <p className="text-justify mt-4">You have {SponsorData.length} Sponsors</p>
            <ul>
                {SponsorData.map(Sponsor => <li >{Sponsor.sponsorName}</li>)}
            </ul>

        </div>



    );
}

export default Sponsorlist;
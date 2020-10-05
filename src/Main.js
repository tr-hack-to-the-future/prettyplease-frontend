import React, { Component, useState } from 'react';

import Sponsorlist from './components/Sponsorlist';
import CharityPage from './components/CharityPage';
import SponsorPage from './components/SponsorPage';
import Jumbotron from 'react-bootstrap/Jumbotron'

function Main({SponsorData}) {

  return (
  
      <Jumbotron>
        <h1>Hello, world!</h1>
        <p>
          This is a simple hero unit, a simple jumbotron-style component for calling
          extra attention to featured content or information.
        </p>
      </Jumbotron>

  );
}

export default Main;

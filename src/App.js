import React, { Component, useState } from 'react';
import './App.css';
import Main from './components/Main.js';
import SponsorPage from './components/SponsorPage';
import CharityPage from './components/CharityPage';
import NewRequest from './components/NewRequest';
import 'bootstrap/dist/css/bootstrap.min.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

export default function App() {
  const [sponsor, setSponsor] = useState([
    { sponsorName: "AlFA", completed: false },
    { sponsorName: "Sponsor2", completed: false },
    { sponsorName: "Black Rock", completed: false },
    { sponsorName: "Adidas", completed: false },
    { sponsorName: "Sponsor4", completed: true },
    { sponsorName: "Eigen", completed: false }
  ]);
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/ForSponsors">For Sponsors</Link>
            </li>
            <li>
              <Link to="/ForCharities">For Charities</Link>
            </li>
            <li>
              <Link to="/NewRequest">New Request</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/ForSponsors">
            <SponsorPage />
          </Route>
          <Route path="/ForCharities">
            <CharityPage />
          </Route>
          <Route path="/NewRequest">
            <NewRequest />
          </Route>
          <Route path="/">
          <Main SponsorData={sponsor} />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

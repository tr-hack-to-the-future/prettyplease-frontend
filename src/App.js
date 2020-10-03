import React, { Component, useState } from "react";
import "./App.css";
import Main from "./Main.js";
import SponsorPage from "./components/SponsorPage";
import CharityPage from "./components/CharityPage";
import FundRequest from "./components/FundRequest";

import "bootstrap/dist/css/bootstrap.min.css";
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
    { sponsorName: "Eigen", completed: false },
  ]);
  const [charity, setcharity] = useState([
    {
      sponsorName: "Financing",
      sponsorDesc: "This is description about Financing sponsor",
      sponsorImg: require("./assets/images/abstract-logo.jpg"),
    },
    {
      sponsorName: "Telecom",
      sponsorDesc: "This is description about Telecom Sponsor",
      sponsorImg: require("./assets/images/abstract-logo2.jpg"),
    },
    {
      sponsorName: "Sports Brand",
      sponsorDesc: "This is description about Sports goods Sponsor",
      sponsorImg: require("./assets/images/abstract-logo3.jpg"),
    },
    {
      sponsorName: "Manufacturing Brand",
      sponsorDesc:
        "This is description about Manufacturing sponsor and their values",
      sponsorImg: require("./assets/images/abstract-logo4.jpg"),
    },
  ]);

  const [showProfile, setshowProfile] = useState(false);
  return (
    <div>
      <Router>
        <div className="PPNavbar">
          <nav className="navbar navbar-expand-lg navbar-dark navpurple">
            <Link to="/" className="navbar-brand">
              Pretty{" "}
              <span class="icon" role="img" aria-label="Please">
                🙏
              </span>
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarTogglerDemo02"
              aria-controls="navbarTogglerDemo02"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
              <ul className="navbar-nav ">
                <li className="nav-item mr-auto mt-2 mt-lg-0 nav-link">
                  <Link to="/ForSponsors" className="nav-link">
                    For Sponsors
                  </Link>
                </li>
                <li className="nav-item mr-auto mt-2 mt-lg-0 nav-link">
                  <Link to="/ForCharities" className="nav-link">
                    For Charities
                  </Link>
                </li>
                <li className="nav-item mr-auto mt-2 mt-lg-0 nav-link">
                  <Link to="/NewFund" className="nav-link">
                    New Fund Request
                  </Link>
                </li>
              </ul>
            </div>
          </nav>
          <Switch>
            <Route exact path="/">
              {" "}
              <Main SponsorData={sponsor} />
            </Route>
            <Route path="/ForSponsors" component={SponsorPage}></Route>
            <Route path="/ForCharities">
              <CharityPage charity={charity} />
            </Route>
            <Route path="/NewFund" component={FundRequest}></Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

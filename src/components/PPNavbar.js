import React from 'react';
import './Navbar.css';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import NewRequest from './NewRequest';

import CharityPage from './CharityPage';
import SponsorPage from './SponsorPage';
import Main from './Main.js';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


function PPNavbar({ NavItems, showProfile }) {
  const navItemInactive = "nav-item mr-auto mt-2 mt-lg-0 nav-link";
  const navItemActive = "nav-item active mr-auto mt-2 mt-lg-0 nav-link";
  let svgPerson = null;
  let profileItem = null;
  const homepg = "Main";
  if (showProfile === true) {
    svgPerson = <svg width="1em" height="40px" viewBox="0 0 16 16" className="bi bi-person-circle" fill="#ffffff"
      xmlns="http://www.w3.org/2000/svg">
      <path
        d="M13.468 12.37C12.758 11.226 11.195 10 8 10s-4.757 1.225-5.468 2.37A6.987 6.987 0 0 0 8 15a6.987 6.987 0 0 0 5.468-2.63z" />
      <path fill-rule="evenodd" d="M8 9a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
      <path fill-rule="evenodd"
        d="M8 1a7 7 0 1 0 0 14A7 7 0 0 0 8 1zM0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8z" />
    </svg>;
    profileItem = <a className="nav-link" href="#">Profile <span class="sr-only">(current)</span></a>

  };
  return (
    <Router>
      <div className="PPNavbar">
        <nav className="navbar navbar-expand-lg navbar-dark navpurple">
          <a className="navbar-brand" href={homepg}>Pretty Please</a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02"
            aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul className="navbar-nav ">
              {NavItems.map(item =>
                <li className={item.activePage ? navItemActive : navItemInactive}><a class="nav-link" href={item.itemAddr}>{item.itemName}</a>
                </li>)}
            </ul>
            <ul className="navbar-nav ml-auto mt-2 mt-lg-0">
              <div className="hideonmobile">
                {svgPerson}
              </div>
              <li className="nav-item">
                {profileItem}
              </li>
            </ul>



          </div>

        </nav>
        <Switch>
          {/* {NavItems.map(item => <Route path={item.itemLink} component={item.itemAddr} />)} */}

          {NavItems.map(item =><Route path={item.itemLink} component={item.itemAddr}></Route>)}
        </Switch>

      </div>
    </Router>
  );
}

export default PPNavbar;

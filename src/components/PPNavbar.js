import React from 'react';
import './Navbar.css';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function PPNavbar({ NavItems }) {
  return (
    <div className="PPNavbar">
      <nav className="navbar navbar-expand-lg navbar-dark navpurple">
        <a className="navbar-brand" href="#">Pretty Please</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02"
          aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
          <ul className="navbar-nav ">
            {NavItems.map(item =>
              <li class="nav-item active mr-auto mt-2 mt-lg-0"><a class="nav-link" href="#">{item.itemName }<span className="sr-only">(current)</span></a>
              </li>)}
            {/* <li class="nav-item active mr-auto mt-2 mt-lg-0">
              <a class="nav-link" href="#">Review and Accept <span class="sr-only">(current)</span></a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="new-request.html">New Request</a>
            </li> */}
          </ul>
          <ul class="navbar-nav ml-auto mt-2 mt-lg-0">
            <div class="hideonmobile">
              <svg width="1em" height="40px" viewBox="0 0 16 16" class="bi bi-person-circle" fill="#ffffff"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M13.468 12.37C12.758 11.226 11.195 10 8 10s-4.757 1.225-5.468 2.37A6.987 6.987 0 0 0 8 15a6.987 6.987 0 0 0 5.468-2.63z" />
                <path fill-rule="evenodd" d="M8 9a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                <path fill-rule="evenodd"
                  d="M8 1a7 7 0 1 0 0 14A7 7 0 0 0 8 1zM0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8z" />
              </svg>
            </div>
            <li class="nav-item">
              <a class="nav-link" href="#">Profile <span class="sr-only">(current)</span></a>
            </li>
          </ul>

        </div>

      </nav>







    </div>
  );
}

export default PPNavbar;

import React from "react";
import "./Navbar.css";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

import { HashRouter as Router } from "react-router-dom";

function PPNavbar({ isAuth }) {

  const currentUser = {
    uid: "b19dcdc9-1547-11eb-9ed1-0a7222284ed8",
    userType: "charity"
  }

  return (
    <Router>
      <Navbar className="navbar" collapseOnSelect expand="lg">
        <Navbar.Brand className="logo" href="/prettyplease-frontend">
          <h1>
            Pretty{" "}
            <span className="icon" role="img" aria-label="Please">
              🙏
            </span>
          </h1>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#">About Us</Nav.Link>
            <Nav.Link href="/prettyplease-frontend/#/campaigns">
              Campaigns
            </Nav.Link>
          </Nav>
          <Nav>
            {!isAuth ? (

            currentUser.userType === "charity" ?
                <Nav.Link href="/prettyplease-frontend/#/CharityProfilePage">Profile</Nav.Link> :
                <Nav.Link href="/prettyplease-frontend/#/SponsorProfilePage">Profile</Nav.Link>
              // if (currentUser.userType=== "sponsor"){
              //   <Nav.Link href="/prettyplease-frontend/#/CharityProfilePage">Profile</Nav.Link>
              // }else if (currentUser.userType=== "charity" ){
              //   <Nav.Link href="/prettyplease-frontend/#/SponsorProfilePage">Profile</Nav.Link>
              // } 
            ) : (
                <Nav.Link href="">
                  <svg
                    width="1em"
                    height="40px"
                    viewBox="0 0 16 16"
                    className="bi bi-person-circle"
                    fill="#000000"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M13.468 12.37C12.758 11.226 11.195 10 8 10s-4.757 1.225-5.468 2.37A6.987 6.987 0 0 0 8 15a6.987 6.987 0 0 0 5.468-2.63z" />
                    <path
                      fillRule="evenodd"
                      d="M8 9a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"
                    />
                    <path
                      fillRule="evenodd"
                      d="M8 1a7 7 0 1 0 0 14A7 7 0 0 0 8 1zM0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8z"
                    />
                  </svg>
                Login
                </Nav.Link>
              )}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </Router>
  );
}

export default PPNavbar;

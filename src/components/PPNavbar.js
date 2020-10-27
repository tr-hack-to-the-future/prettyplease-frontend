import React, { useState } from "react";
import "./Navbar.css";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import Nav from "react-bootstrap/Nav";

import useDocumentScrollThrottled from "../helpers/useDocumentScrollThrottled";
import { useAuth } from "./Firebase/AuthContext";
import { HashRouter as Router } from "react-router-dom";
import { useHistory } from "react-router-dom";


function PPNavbar() {
  const [shouldHideHeader, setShouldHideHeader] = useState(false);
  const [shouldShowShadow, setShouldShowShadow] = useState(false);
  const MINIMUM_SCROLL = 80;
  const TIMEOUT_DELAY = 400;

  const { currentUser, userType, logout } = useAuth();
  const [error, setError] = useState("");
  const history = useHistory();

  useDocumentScrollThrottled(callbackData => {
    const { previousScrollTop, currentScrollTop } = callbackData;
    const isScrolledDown = previousScrollTop < currentScrollTop;
    const isMinimumScrolled = currentScrollTop > MINIMUM_SCROLL;

    setShouldShowShadow(currentScrollTop > 2);

    setTimeout(() => {
      setShouldHideHeader(isScrolledDown && isMinimumScrolled);
    }, TIMEOUT_DELAY);
  });
  const shadowStyle = shouldShowShadow ? "shadow" : "";
  const hiddenStyle = shouldHideHeader ? "hidden" : "";

  function handleLogout() {
    setError("");
    try {
      logout();

    } catch {
      setError("Failed to logout");
    }
  }

  function showUserTypeNavbar() {
    if (userType === "charity" && currentUser) {
      return (
        <div>
          <Nav>
            <Nav.Link href="/prettyplease-frontend/#/ForCharities">Charity Page</Nav.Link>
            <Nav.Link href="/prettyplease-frontend/#/NewFund">Raise Funds</Nav.Link>
            <Nav.Link href="/prettyplease-frontend/#/FundRequests">Fund Requests</Nav.Link>
            <Nav.Link href="/prettyplease-frontend/#/AcceptedOffers">Accepted Offers</Nav.Link>
          </Nav>
        </div>
      );
    } else if (userType === "sponsor" && currentUser) {
      return (
        <div>
          <Nav>
            <Nav.Link href="/prettyplease-frontend/#/ForSponsors">Requests</Nav.Link>
            <Nav.Link href="/prettyplease-frontend/#/ForSponsorsPending">Offers Pending</Nav.Link>
            <Nav.Link href="/prettyplease-frontend/#/ForSponsorsAccepted">Offers Accepted</Nav.Link>
          </Nav>
        </div>
      );
    }
  }

  return (
    <Router>
      <div className={`header ${hiddenStyle} ${shadowStyle}`}>
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

              {showUserTypeNavbar()}

            </Nav>
            {!currentUser ? (
              <Nav >
                <Nav.Link  href="/prettyplease-frontend/#/Login">Login</Nav.Link>
              </Nav>
            ) : (
                <Nav>
                  <Nav.Link
                    href={
                      userType === "sponsor"
                        ? "/prettyplease-frontend/#/SponsorProfilePage"
                        : "/prettyplease-frontend/#/CharityProfilePage"
                    }
                  >
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
                Profile
              </Nav.Link>

                  <Button variant="link" onClick={handleLogout}>
                    Log Out
              </Button>
                </Nav>
              )}
          </Navbar.Collapse>
        </Navbar>
      </div>
    </Router>
  );
}

export default PPNavbar;
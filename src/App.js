import React, { Component, useState, useEffect } from "react";
import axios from "axios";
import Main from "./Main.js";
//Authentication imports
import { AuthProvider } from "./components/Firebase/AuthContext";
import { useAuth } from "./components/Firebase/AuthContext";
import PrivateRoute from "./components/login/PrivateRoute";

import Login from "./components/login/Login";
import SignUp from "./components/login/SignUp.js";

import SponsorPage from "./components/sponsorpage/SponsorPage";
import CharityPage from "./components/CharityPage";
import Requests from "./components/charityview/Requests";
import CharityAcceptedOffers from "./components/charityview/CharityAcceptedOffers";

import FundRequest from "./components/fundrequest/FundRequest";
import CharityProfilePage from "./components/profile/CharityProfilePage";
import SponsorProfilePage from "./components/profile/SponsorProfilePage";
import PPNavbar from "./components/PPNavbar";
import SponsorRequestDetails from "./components/sponsorrequestdetails/SponsorRequestDetails";
import OfferDetailsAccepted from "./components/offerdetailsaccepted/OfferDetailsAccepted";
import OfferDetailsPending from "./components/offerdetailspending/OfferDetailsPending";
import SponsorPageAccepted from "./components/sponsorpageaccepted/SponsorPageAccepted";
import SponsorPagePending from "./components/sponsorpagepending/SponsorPagePending";
import SponsorDetailsAccept from "./components/charityview/SponsorDetailsAccept";
import GetSponsorOffers from "./components/CharityPage";

import ConfirmationRequestPage from "./components/fundrequest/ConfirmationRequestPage";
import FailRequestPage from "./components/fundrequest/FailRequestPage";
import { FooterContainer } from "./containers/footer";
import Faqs from "./pages/faqs";
import Campaigns from "./pages/campaigns";
import "bootstrap/dist/css/bootstrap.min.css";
import { HashRouter as Router, Switch, Route, Link } from "react-router-dom";

export default function App() {
  const [charitysp, setcharity] = useState([
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

  return (
    <Router>
      <AuthProvider>
        <PPNavbar />
        <Switch>
          <Route exact path="/" component={Main}>
            {/* {" "} */}
            <Main />
            <Route path="/campaigns">
              <Campaigns />
            </Route>
          </Route>
          <Route exact path="/Login">
            <Login />
          </Route>
          <Route exact path="/SignUp">
            <SignUp />
          </Route>
          <Route path="/ForSponsors/:id">
            <SponsorRequestDetails />
          </Route>
          <Route path="/ForSponsors">
            <SponsorPage />
          </Route>
          <Route exact path="/ForSponsorsAccepted">
            <SponsorPageAccepted />
          </Route>
          <Route exact path="/ForSponsorsAccepted/:id">
            <OfferDetailsAccepted />
          </Route>
          <Route exact path="/ForSponsorsPending">
            <SponsorPagePending />
          </Route>
          <Route exact path="/ForSponsorsPending/:id">
            <OfferDetailsPending />
          </Route>

          <Route
            path="/SponsorProfilePage"
            component={SponsorProfilePage}
          ></Route>

          <Route exact path="/ForCharities">
            <CharityPage />
          </Route>
          <Route
            exact
            path="/ForCharities/:id"
            component={SponsorDetailsAccept}
          >
            <SponsorDetailsAccept />
          </Route>
          <Route path="/NewFund" component={FundRequest}></Route>
          <Route
            path="/CharityProfilePage"
            component={CharityProfilePage}
          ></Route>
          <Route path="/ConfirmationRequestPage">
            <ConfirmationRequestPage />
          </Route>
          <Route path="/FailRequestPage">
            <FailRequestPage />
          </Route>

          <Route exact path="/ForCharities">
            <CharityPage />
          </Route>
          {/* <Route exact path="/GetSponsorOffers">
              <GetSponsorOffers />
            </Route> */}
          <Route exact path="/FundRequests">
            <Requests />
          </Route>
          <Route exact path="/AcceptedOffers">
            <CharityAcceptedOffers />
          </Route>
          <Route
            exact
            path="/ForCharities/:id"
            component={SponsorDetailsAccept}
          >
            <SponsorDetailsAccept />
          </Route>
          <Route path="/NewFund" component={FundRequest}></Route>
          <Route
            path="/CharityProfilePage"
            component={CharityProfilePage}
          ></Route>
          <Route path="/ConfirmationRequestPage">
            <ConfirmationRequestPage />
          </Route>
          <Route path="/FailRequestPage">
            <FailRequestPage />
          </Route>
        </Switch>
        <FooterContainer />
      </AuthProvider>
    </Router>
  );
}

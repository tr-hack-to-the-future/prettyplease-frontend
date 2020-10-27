import React, { Component, useState, useEffect } from "react";
import axios from "axios";
import Main from "./Main.js";
//Authentication imports
import { AuthProvider } from "./components/Firebase/AuthContext";
import PrivateRoute from "./components/login/PrivateRoute";

import Login from "./components/login/Login";
import SignUp from "./components/login/SignUp.js";
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
import SponsorPage from "./components/SponsorPage";
import CharityPage from "./components/CharityPage";
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
      sponsorImg: require("./assets/images/abstract-logo.jpg")
    },
    {
      sponsorName: "Telecom",
      sponsorDesc: "This is description about Telecom Sponsor",
      sponsorImg: require("./assets/images/abstract-logo2.jpg")
    },
    {
      sponsorName: "Sports Brand",
      sponsorDesc: "This is description about Sports goods Sponsor",
      sponsorImg: require("./assets/images/abstract-logo3.jpg")
    },
    {
      sponsorName: "Manufacturing Brand",
      sponsorDesc:
        "This is description about Manufacturing sponsor and their values",
      sponsorImg: require("./assets/images/abstract-logo4.jpg")
    }
  ]);

  // TODO fetch sponsorId from currentUser context
  const currentUser = {
    uid: "b19dcdc9-1547-11eb-9ed1-0a7222284ed8",
    userType: "sponsor"
  }
  // Fetch the requests from the API
  const [fundingRequests, setRequests] = useState([]);
  useEffect(() => {
    axios.get("https://xlkpx8p087.execute-api.eu-west-2.amazonaws.com/dev/sponsorrequests/" + currentUser.uId)
      .then(response => setRequests(response.data))
      .catch(error => console.log(error));
  }, []);

  // TODO fetch sponsorId from currentUser context
  // Fetch the offers for a sponsor from the API
  const [sponsorOffers, setSponsorOffers] = useState([]);
  useEffect(() => {
    axios.get("https://xlkpx8p087.execute-api.eu-west-2.amazonaws.com/dev/sponsoroffers/" + currentUser.uid)
      .then(response => setSponsorOffers(response.data))
      .catch(error => console.log(error));
  }, []);
  // TODO filter in the components 
  const acceptedOffers = sponsorOffers.filter(
    (offer) => offer.offerStatus === "ACCEPTED"
  );
  // TODO filter in the components 
  const pendingOffers = sponsorOffers.filter(
    (offer) => offer.offerStatus === "PENDING"
  );


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
          <Route path="/ForSponsors/:id" component={SponsorRequestDetails}>
            <SponsorRequestDetails key={fundingRequests.requestId} requests={fundingRequests} />
          </Route>
          <Route path="/ForSponsors">
            <SponsorPage />
          </Route>
          <Route exact path="/ForSponsorsAccepted">
            <SponsorPageAccepted />
          </Route>
          <Route exact path="/ForSponsorsAccepted/:id">
            <OfferDetailsAccepted key={acceptedOffers.offerId} offers={acceptedOffers} component={OfferDetailsAccepted} />
          </Route>
          <Route exact path="/ForSponsorsPending">
            <SponsorPagePending />
          </Route>
          <Route exact path="/ForSponsorsPending/:id">
            <OfferDetailsPending offers={pendingOffers} component={OfferDetailsPending} />
          </Route>

          <Route path="/SponsorProfilePage" component={SponsorProfilePage}></Route>

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
          <Route path="/CharityProfilePage" component={CharityProfilePage}></Route>
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

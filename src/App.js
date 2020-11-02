import React from "react";
import Main from "./Main.js";
import { AuthProvider } from "./components/Firebase/AuthContext";
import Login from "./components/Login/Login";
import SignUp from "./components/Login/SignUp.js";
import SponsorPage from "./components/SponsorPage/SponsorPage";
import CharityPage from "./components/CharityPage";
import Requests from "./components/CharityView/Requests";
import CharityAcceptedOffers from "./components/CharityView/CharityAcceptedOffers";
import FundRequest from "./components/FundRequest/FundRequest";
import CharityProfilePage from "./components/Profile/CharityProfilePage";
import SponsorProfilePage from "./components/Profile/SponsorProfilePage";
import PPNavbar from "./components/PPNavbar";
import SponsorRequestDetails from "./components/SponsorRequestDetails/SponsorRequestDetails";
import OfferDetailsAccepted from "./components/OfferDetailsAccepted/OfferDetailsAccepted";
import OfferDetailsPending from "./components/OfferDetailsPending/OfferDetailsPending";
import SponsorPageAccepted from "./components/SponsorPageAccepted/SponsorPageAccepted";
import SponsorPagePending from "./components/SponsorPagePending/SponsorPagePending";
import SponsorDetailsAccept from "./components/CharityView/SponsorDetailsAccept";
import ConfirmationRequestPage from "./components/FundRequest/ConfirmationRequestPage";
import FailRequestPage from "./components/FundRequest/FailRequestPage";
import { FooterContainer } from "./containers/footer";
import Campaigns from "./components/Campaigns";
import AboutUs from "./components/AboutUs";
import "bootstrap/dist/css/bootstrap.min.css";
import { HashRouter as Router, Switch, Route } from "react-router-dom";

export default function App() {
  return (
    <Router>
      <AuthProvider>
        <PPNavbar />
        <Switch>
          <Route exact path="/" component={Main}>
            <Main />
          </Route>
          <Route path="/Campaigns">
            <Campaigns />
          </Route>
          <Route path="/AboutUs">
            <AboutUs />
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

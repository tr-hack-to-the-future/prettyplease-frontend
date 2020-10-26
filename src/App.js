import React, { Component, useState, useEffect } from "react";
import axios from "axios";
import Main from "./Main.js";
//Authentication imports
import { AuthProvider } from "./components/Firebase/AuthContext";
import PrivateRoute from "./components/login/PrivateRoute";
import Login from "./components/login/Login";
import SignUp from "./components/login/SignUp.js";

import SponsorPage from "./components/SponsorPage";
import CharityPage from "./components/CharityPage";
import { CharityOfferProvider } from "./components/charityview/charityOffersContext";
import FundRequest from "./components/fundrequest/FundRequest";
import CharityProfilePage from "./components/profile/CharityProfilePage";
import SponsorProfilePage from "./components/profile/SponsorProfilePage";
import PPNavbar from "./components/PPNavbar";
import SponsorRequestDetails from "./components/sponsorrequestdetails/SponsorRequestDetails";
import OfferDetailsAccepted from "./components/offerdetailsaccepted/OfferDetailsAccepted";
import SponsorPageAccepted from "./components/sponsorpageaccepted/SponsorPageAccepted";
import SponsorDetailsAccept from "./components/charityview/SponsorDetailsAccept";
import ConfirmationRequestPage from "./components/fundrequest/ConfirmationRequestPage";
import FailRequestPage from "./components/fundrequest/FailRequestPage";
import { FooterContainer } from "./containers/footer";
import Campaigns from "./pages/campaigns";
import "bootstrap/dist/css/bootstrap.min.css";
import { HashRouter as Router, Switch, Route, Link } from "react-router-dom";

export default function App() {
  // const [sponsor, setSponsor] = useState([
  //   { sponsorName: "AlFA", completed: false },
  //   { sponsorName: "Sponsor2", completed: false },
  //   { sponsorName: "Black Rock", completed: false },
  //   { sponsorName: "Adidas", completed: false },
  //   { sponsorName: "Sponsor4", completed: true },
  //   { sponsorName: "Eigen", completed: false },
  // ]);
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

  // const [detailsCharity, setdetailsCharity] = useState([
  //   {
  //     name: "Food Bank",
  //     description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. We are here to help make people’s lives better. We do this by developing and delivering reliably good modern services, building and maintaining the best quality developments, working with local communities and building long-term partnerships, and  growing and using our position of influence to create positive change",
  //     image: require("./assets/images/charity-logo-blue.png"),
  //   },

  // ]);

  const [detailsCharity, setdetailsCharity] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://xlkpx8p087.execute-api.eu-west-2.amazonaws.com/dev/charities/CHAZ2"
      )
      .then(response => {
        setdetailsCharity(response.data);
      })
      .catch(error => console.log(error));
  }, []);

  const changeCharityProfile = (name, description) => {
    const newProfile = {
      nameProfile: name,
      descriptionProfile: description
    };

    console.log(newProfile.nameProfile);
    console.log(newProfile.descriptionProfile);
    const updatedCharityProfile = [...detailsCharity, newProfile];

    setdetailsCharity(updatedCharityProfile);
  };

  // const [detailsSponsor, setdetailsSponsor] = useState([
  //   {
  //     name: "Telecom",
  //     description: "Prow scuttle parrel provost Sail ho shrouds spirits boom mizzenmast yardarm. Pinnace holystone mizzenmast quarter crow's nest nipperkin grog yardarm hempen halter furl. Swab barque interloper chantey doubloon starboard grog black jack gangway rutters. Deadlights jack lad schooner scallywag dance the hempen jig carouser broadside cable strike colors. Bring a spring upon her cable holystone blow the man down spanker Shiver me timbers to go on account lookout wherry doubloon chase. Belay yo-ho-ho keelhaul squiffy black spot yardarm spyglass sheet transom heave to.Trysail Sail ho Corsair red ensign hulk smartly boom jib rum gangway. Case shot Shiver me timbers gangplank crack Jennys tea cup ballast Blimey lee snow crow's nest rutters. Fluke jib scourge of the seven seas boatswain schooner gaff booty Jack Tar transom spirits.",
  //     image: require("./assets/images/abstract-logo2.jpg"),
  //   },

  // ]);

  const [detailsSponsor, setdetailsSponsor] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://xlkpx8p087.execute-api.eu-west-2.amazonaws.com/dev/sponsors/SPON1"
      )
      .then(response => {
        setdetailsSponsor(response.data);
      })
      .catch(error => console.log(error));
  }, []);

  const changeSponsorProfile = (name, description) => {
    const newProfile = {
      nameProfile: name,
      descriptionProfile: description
    };

    console.log(newProfile.nameProfile);
    console.log(newProfile.descriptionProfile);
    const updatedSponsorProfile = [...detailsSponsor, newProfile];

    setdetailsSponsor(updatedSponsorProfile);
  };

  // Fetch the requests from the API
  const [fundingRequests, setRequests] = useState([]);
  useEffect(() => {
    axios
      .get(
        "https://xlkpx8p087.execute-api.eu-west-2.amazonaws.com/dev/requests"
      )
      .then(response => setRequests(response.data))
      .catch(error => console.log(error));
  }, []);

  const openRequests = fundingRequests.filter(
    (request) => request.requestStatus === "OPEN"
  );

  // TODO fetch sponsorId from currentUser context
  // Fetch the offers for a sponsor from the API
  const [sponsorOffers, setSponsorOffers] = useState([]);
  useEffect(() => {
    axios
      .get(
        "https://xlkpx8p087.execute-api.eu-west-2.amazonaws.com/dev/sponsoroffers/b19dcdc9-1547-11eb-9ed1-0a7222284ed8"
      )
      .then(response => setSponsorOffers(response.data))
      .catch(error => console.log(error));
  }, []);

  const acceptedOffers = sponsorOffers.filter(
    (offer) => offer.offerStatus === "ACCEPTED"
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
            <SponsorRequestDetails request={fundingRequests} />
          </Route>
          <Route path="/ForSponsors">
            <SponsorPage key={openRequests.requestId} requests={openRequests} />
          </Route>
          <Route exact path="/ForSponsorsAccepted">
            <SponsorPageAccepted offers={acceptedOffers} />
          </Route>
          <Route exact path="/ForSponsorsAccepted/:id">
            <OfferDetailsAccepted
              offer={acceptedOffers}
              component={OfferDetailsAccepted}
            />
          </Route>
          <Route path="/SponsorRequestDetails">
            <SponsorRequestDetails />
          </Route>

          <Route path="/SponsorProfilePage">
            <SponsorProfilePage
              sponsorData={detailsSponsor}
              changeProfile={changeSponsorProfile}
            />
          </Route>

          <CharityOfferProvider>
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
            <Route path="/CharityProfilePage">
              <CharityProfilePage
                charityData={detailsCharity}
                changeProfile={changeCharityProfile}
              />
            </Route>
            <Route path="/ConfirmationRequestPage">
              <ConfirmationRequestPage />
            </Route>
            <Route path="/FailRequestPage">
              <FailRequestPage />
            </Route>
          </CharityOfferProvider>
        </Switch>
        <FooterContainer />
      </AuthProvider>
    </Router>
  );
}

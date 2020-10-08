import React, { Component, useState } from "react";
import "./App.css";
import Main from "./Main.js";
import SponsorPage from "./components/SponsorPage";
import CharityPage from "./components/CharityPage";
import FundRequest from "./components/FundRequest";
import PPNavbar from "./components/PPNavbar";
import SponsorDetailsAccept from "./components/SponsorDetailsAccept";
import RequestDetailsAccept from "./components/requestdetailsaccept/RequestDetailsAccept";


import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

export default function App() {
  const [sponsor, setSponsor] = useState([
    { sponsorName: "AlFA", completed: false },
    { sponsorName: "Sponsor2", completed: false },
    { sponsorName: "Black Rock", completed: false },
    { sponsorName: "Adidas", completed: false },
    { sponsorName: "Sponsor4", completed: true },
    { sponsorName: "Eigen", completed: false },
  ]);
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


  // Sponsorship requests test data
  const [sponsorshipRequests, setrequests] = useState([
    {
      requestId: "1",
      charityName: "Food Bank",
      image: require("./assets/images/charity-logo-blue.png"),
      description: "Help underwrite some of our operating costs by becoming a ‘Friend’ of our Foodbank.",
      amount: "5000",   
      isSingleEvent: false, // TODO need to be consistent across app
      duration: "3",    // should this be durationInYears? 
      incentive: "We would like you to join us in a business partnership to enable us to continue operating for the year. When you become a 'Friend of the Food Bank' you will receive 30 co-branded Food Bank T-shirts and to opportunity to organise a team building day by volunteering in our warehouse and kitchens."
    },
    {
      requestId: "2",
      charityName: "Historical Typesetting Society",
      image: require("./assets/images/charity-logo-green.png"),
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      amount: "900",  
      isSingleEvent: false,
      duration: "1",  
      incentive: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt."
    },

  ]);



  const [isAuth, setIsAuth] = useState(true);
  return (

    <Router>
      <PPNavbar isAuth={isAuth} />
      <Switch>
        <Route exact path="/">
          {/* {" "} */}
          <Main SponsorData={sponsor} />
        </Route>
        <Route exact path="/ForSponsors/:id" component={RequestDetailsAccept}>
          <RequestDetailsAccept request={sponsorshipRequests} />
        </Route>        
        <Route exact path="/ForSponsors">
          <SponsorPage requests={sponsorshipRequests} />
        </Route>
        <Route path="/RequestDetailsAccept">
          <RequestDetailsAccept />
        </Route>
        <Route exact path="/ForCharities/:id" component={SponsorDetailsAccept}>
          <SponsorDetailsAccept sponsor={charitysp} />
        </Route>
        <Route exact path="/ForCharities">
          <CharityPage sponsor={charitysp} />
        </Route>

        <Route path="/NewFund" component={FundRequest}></Route>
      </Switch>
    </Router>
  );
}

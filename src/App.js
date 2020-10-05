import React, { Component, useState } from "react";
import "./App.css";
import Main from "./Main.js";
import SponsorPage from "./components/SponsorPage";
import CharityPage from "./components/CharityPage";
import FundRequest from "./components/fundrequest/FundRequest";
import CharityProfilePage from "./components/profile/CharityProfilePage";
import PPNavbar from "./components/PPNavbar";

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

  const [detailsCharity, setdetailsCharity] = useState([
    {
      name: "Food Bank",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      values: "We are here to help make people’s lives better. We do this by developing and delivering reliably good modern services, building and maintaining the best quality developments, working with local communities and building long-term partnerships, and  growing and using our position of influence to create positive change",
      image: require("./assets/images/charity-logo-blue.png"),
    },

  ]);

  const [isAuth,setIsAuth] = useState(true);
  return (
  
       <Router>
         <PPNavbar isAuth={isAuth}/>
          <Switch>
            <Route exact path="/">
              {/* {" "} */}
              <Main SponsorData={sponsor} />
            </Route>
            <Route path="/ForSponsors" component={SponsorPage}></Route>
            <Route path="/ForCharities">
              
              <CharityPage charity={charity} />
            </Route>
            <Route path="/NewFund" component={FundRequest}></Route>
            <Route path="/CharityProfilePage">

               <CharityProfilePage charityData={detailsCharity} />
            </Route>
          </Switch>
          </Router>
     
  );
}

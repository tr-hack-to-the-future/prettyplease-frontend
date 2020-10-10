import React, { Component, useState } from "react";
import "./App.css";
import Main from "./Main.js";
import SponsorPage from "./components/SponsorPage";
import CharityPage from "./components/CharityPage";
import FundRequest from "./components/fundrequest/FundRequest";
import CharityProfilePage from "./components/profile/CharityProfilePage";
import SponsorProfilePage from "./components/profile/SponsorProfilePage";
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
    {
      requestId: "3",
      charityName: "Animal Shelter",
      image: require("./assets/images/charity-logo-orange.png"),
      description: "Our puppies and kittens need your help! We are looking for sponsors to help keep our shelters open for the next two years.",
      amount: "5000",
      isSingleEvent: false,
      duration: "2",
      incentive: "In return for your help we will put your brand on all our external mailing for the duration of your sponsorship. We will also arrange for some puppies to visit your place of work for a maximum of two days per year."
    },

  ]);

  const [detailsCharity, setdetailsCharity] = useState([
    {
      name: "Food Bank",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. We are here to help make people’s lives better. We do this by developing and delivering reliably good modern services, building and maintaining the best quality developments, working with local communities and building long-term partnerships, and  growing and using our position of influence to create positive change",
      image: require("./assets/images/charity-logo-blue.png"),
    },

  ]);

  const [detailsSponsor, setdetailsSponsor] = useState([
    {
      name: "Telecom",
      description: "Prow scuttle parrel provost Sail ho shrouds spirits boom mizzenmast yardarm. Pinnace holystone mizzenmast quarter crow's nest nipperkin grog yardarm hempen halter furl. Swab barque interloper chantey doubloon starboard grog black jack gangway rutters. Deadlights jack lad schooner scallywag dance the hempen jig carouser broadside cable strike colors. Bring a spring upon her cable holystone blow the man down spanker Shiver me timbers to go on account lookout wherry doubloon chase. Belay yo-ho-ho keelhaul squiffy black spot yardarm spyglass sheet transom heave to.Trysail Sail ho Corsair red ensign hulk smartly boom jib rum gangway. Case shot Shiver me timbers gangplank crack Jennys tea cup ballast Blimey lee snow crow's nest rutters. Fluke jib scourge of the seven seas boatswain schooner gaff booty Jack Tar transom spirits.",
      image: require("./assets/images/abstract-logo2.jpg"),
    },

  ]);

  const changeCharityProfile = (name, description) => {

    const newProfile = {
      nameProfile: name,
      descriptionProfile: description,
    }

    console.log(newProfile.nameProfile);
    console.log(newProfile.descriptionProfile);
    const updatedCharityProfile = [...detailsCharity, newProfile];

    setdetailsCharity(updatedCharityProfile);
  }

  const changeSponsorProfile = (name, description) => {

    const newProfile = {
      nameProfile: name,
      descriptionProfile: description,
    }

    console.log(newProfile.nameProfile);
    console.log(newProfile.descriptionProfile);
    const updatedSponsorProfile = [...detailsSponsor, newProfile];

    setdetailsSponsor(updatedSponsorProfile);
  }


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
        <Route path="/CharityProfilePage">
          <CharityProfilePage charityData={detailsCharity} changeProfile={changeCharityProfile} />
        </Route>
        <Route path="/SponsorProfilePage">
          <SponsorProfilePage sponsorData={detailsSponsor} changeProfile={changeSponsorProfile} />
        </Route>
      </Switch>
    </Router>

  );
}

import React, { Component, useState,useEffect } from "react";
import axios from "axios";
import Main from "./Main.js";
import SponsorPage from "./components/SponsorPage";
import CharityPage from "./components/CharityPage";
import FundRequest from "./components/fundrequest/FundRequest";
import CharityProfilePage from "./components/profile/CharityProfilePage";
import SponsorProfilePage from "./components/profile/SponsorProfilePage";
import PPNavbar from "./components/PPNavbar";
import SponsorRequestDetails from "./components/sponsorrequestdetails/SponsorRequestDetails";
import OfferDetailsAccepted from "./components/offerdetailsaccepted/OfferDetailsAccepted";
import SponsorPageAccepted from "./components/sponsorpageaccepted/SponsorPageAccepted";
import SponsorDetailsAccept from "./components/charityview/SponsorDetailsAccept";
import ConfirmationRequestPage from "./components/fundrequest/ConfirmationRequestPage";
import FaqsPage from "./pages/faqs";
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

  // Sponsorship requests test data
  const [sponsorshipRequests, setrequests] = useState([
    {
      requestId: "11",
      charityName: "Food Bank",
      image: require("./assets/images/charity-logo-blue.png"),
      charityDescription:
        "Our food bank helps the community by providing emergency access to food for local people that are referred to us in crisis.",
      eventDescription:
        "Help underwrite some of our operating costs by becoming a ‘Friend’ of our Foodbank.",
      amount: "5000",
      isSingleEvent: false, // TODO need to be consistent across app
      duration: "3", // should this be durationInYears?
      requestStatus: "OPEN",
      incentive:
        "We would like you to join us in a business partnership to enable us to continue operating for the year. When you become a 'Friend of the Food Bank' you will receive 30 co-branded Food Bank T-shirts and to opportunity to organise a team building day by volunteering in our warehouse and kitchens."
    },
    {
      requestId: "12",
      charityName: "Historical Typesetting Society",
      image: require("./assets/images/charity-logo-green.png"),
      charityDescription:
        "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae.",
      eventDescription:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      amount: "900",
      isSingleEvent: false,
      duration: "1",
      requestStatus: "OPEN",
      incentive:
        "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt."
    },
    {
      requestId: "15",
      charityName: "Animal Shelter",
      image: require("./assets/images/charity-logo-orange.png"),
      charityDescription:
        "The work of our network of animal shelters runs all year round and takes care of discarded pets and strays.",
      eventDescription:
        "Our puppies and kittens need your help! We are looking for sponsors to help keep our shelters open for the next two years.",
      amount: "5000",
      isSingleEvent: false,
      duration: "2",
      requestStatus: "OPEN",
      incentive:
        "In return for your help we will put your brand on all our external mailing for the duration of your sponsorship. We will also arrange for some puppies to visit your place of work for a maximum of two days per year."
    },
    {
      requestId: "13",
      charityName: "Youth Netball Team",
      image: require("./assets/images/charity-logo-balloons.png"),
      charityDescription:
        "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus.",
      eventDescription:
        "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      amount: "2000",
      isSingleEvent: false,
      duration: "1",
      requestStatus: "ACCEPTED",
      incentive:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
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

  useEffect (() => {
    axios.get("https://xlkpx8p087.execute-api.eu-west-2.amazonaws.com/dev/charities/CHAZ2")
     .then (response=> {setdetailsCharity (response.data)
    })
    .catch(error=> console.log (error))
  },[]);


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

  useEffect (() => {
    axios.get("https://xlkpx8p087.execute-api.eu-west-2.amazonaws.com/dev/sponsors/SPON1")
     .then (response=> {setdetailsSponsor (response.data)
    })
    .catch(error=> console.log (error))
  },[]);
  

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

  const openRequests = sponsorshipRequests.filter(
    request => request.requestStatus === "OPEN"
  );
  const acceptedRequests = sponsorshipRequests.filter(
    request => request.requestStatus === "ACCEPTED"
  );

  const [isAuth, setIsAuth] = useState(true);
  return (
    <Router>
      <PPNavbar isAuth={isAuth} />
      <Switch>
        <Route exact path="/" component={Main}>
          {/* {" "} */}
          <Main />
        </Route>
        <Route path="/ForSponsors/:id" component={SponsorRequestDetails}>
          <SponsorRequestDetails request={sponsorshipRequests} />
        </Route>
        <Route path="/ForSponsors">
          <SponsorPage requests={openRequests} />
        </Route>
        <Route exact path="/ForSponsorsAccepted">
          <SponsorPageAccepted requests={acceptedRequests} />
        </Route>
        <Route exact path="/ForSponsorsAccepted/:id">
          <OfferDetailsAccepted
            request={acceptedRequests}
            component={OfferDetailsAccepted}
          />
        </Route>
        <Route path="/SponsorRequestDetails">
          <SponsorRequestDetails />
        </Route>
        <Route exact path="/ForCharities/:id" component={SponsorDetailsAccept}>
          <SponsorDetailsAccept sponsor={charitysp} />
        </Route>
        <Route exact path="/ForCharities">
          <CharityPage sponsor={charitysp} />
        </Route>
        <Route path="/NewFund" component={FundRequest}></Route>
        <Route path="/CharityProfilePage">
          <CharityProfilePage
            charityData={detailsCharity}
            changeProfile={changeCharityProfile}
          />
        </Route>
        <Route path="/SponsorProfilePage">
          <SponsorProfilePage
            sponsorData={detailsSponsor}
            changeProfile={changeSponsorProfile}
          />
        </Route>
        <Route path="/ConfirmationRequestPage">
          <ConfirmationRequestPage />
        </Route>
        <Route exact path="/faqs">
          <FaqsPage />
        </Route>
      </Switch>
    </Router>
  );
}

import React, { Component, useState } from 'react';
import { Container, Card, Row, Col } from 'react-bootstrap';
import SponsorshipRequest from './SponsorshipRequest';
// import logo from './foodbank-logo.png'; // with import

function SponsorshipRequestListing({ requestData }) {

    // const requests = requestData.map(request => ({
    //      charityName: request.charityName,
    // //      charityLogo: request.charityLogo,
    //      id: request.requestId, 
    // //      description: request.description,
    // //      amount: request.amount,
    // //      duration: request.duration,
    // //      incentive: request.incentive
    //     }));

const r = requestData.filter((request) => request.charityName === "Food Bank");

// const ar = Object.values(r);
// this.items = requestData.map((item) =>
//     <li key={item.id}>{item.charityName}</li>
// );
const items = requestData.map((item) =>
    <li key={item.id}>{item.charityName}</li>
);
const reqs = [...requestData];

        return (
            <div>
            <li>
            BOB {reqs.charityName} BOB
            {reqs.requestId}
            </li>
                    
             <li >{requestData[0].charityName}</li>
            Component down here 
             <li>
             <SponsorshipRequest request={requestData} /> 
             </li>
             </div>

        );

}

// function SponsorshipRequestCard({ requests }) {
//     // const [navitems, setnavitems] = useState([
//     //     { itemName: "Choose a Sponsorship Opportunity", activePage: true }
//     // ]);
//     // const [showProfile, setshowProfile] = useState(true);

//     const styles = {
//         card: {
//             padding: 'p-3',
//               width: "100%",
//               height: "auto"

//         },
//         cardImage: {
//             // padding: "5%"
//         }

//     }
    // TODO - props
    // const amount = "£1500";
    // const duration = "1 year";
    // TODO - create logo as component?
    // const logo = require('./charity-logo-blue.png'); // with require

    // const requests = props.map(request => <Request name={request});

    
    // const requests = props.map(request => ({
    //      charityName: request.charityName,
    //      charityLogo: request.charityLogo,
    //      id: request.requestId, 
    //      description: request.description,
    //      amount: request.amount,
    //      duration: request.duration,
    //      incentive: request.incentive
    //     }));

    //     return (
    //         <p className="text-justify mt-4">There are {requests.length} BOBS available</p>
    //     );
    // }  

//      return (
//         <Container>
//             <Card className="m-2 border-1 shadow" style={styles.card}>
//             <p>props.length</p>
//                 <Row>
//                     <Col>
//                         <Card.Img variant="top" src={logo} style={styles.cardImage} alt="Charity image" />
//                     </Col>
//                     <Col>
//                         <Card.Body>
//                             <Card.Title>{requests.charityName}</Card.Title>
//                             <a href="Charity1.html" class="stretched-link">
//                                 <Card.Text>
//                                     {props.description}
//                                 </Card.Text>
//                             </a>
//                             {/* <Button variant="primary">Go somewhere</Button> */}
//                             <div>
//                                 <span className="card-text inline col-sm-12 col-md-6 pl-0 pr-1 small">Amount: {props.amount}</span>
//                                 <span className="card-text inline col-sm-12 col-md-6 p-0 small">Duration: {props.duration}</span>
//                             </div>
//                         </Card.Body>

//                     </Col>

//                 </Row>
//             </Card>


//             {/* <div className="card-deck mt-4">
//                     <div className="row">
//                         <div className="col sm-12 md-6 lg-6">
//                             <div
//                                 className="row no-gutters border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative"
//                             >
//                                 <div className="col-auto d-none d-lg-block">
//                                     <svg
//                                         className="bd-placeholder-img"
//                                         width="200"
//                                         height="200"
//                                         xmlns="http://www.w3.org/2000/svg"
//                                     >
//                                         <image
//                                             href="./foodbank-logo.png"
//                                             height="200"
//                                             width="200"
//                                         ></image>
//                                     </svg>
//                                 </div>
//                                 <div className="col p-4 d-flex flex-column position-static">
//                                     <a href="Charity1.html" class="stretched-link">
//                                         <strong class="d-inline-block mb-2 text-primary"
//                                         >Foodbank</strong>
//                                         <p className="card-text mb-auto">
//                                             Help underwrite some of our operating costs by becoming a
//                                             ‘Friend’ or ‘Patron’ of our Foodbank.
//                                         </p>
//                                     </a>
//                                     <div>
//                                         <span
//                                             className="card-text inline col-sm-12 col-md-6 pl-0 pr-1 small"
//                                         >Amount: £1500</span
//                                         >
//                                         <span className="card-text inline col-sm-12 col-md-6 p-0 small"
//                                         >Duration: 1 year</span
//                                         >
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>

//                 </div>
//                  */}
//         </Container>
//     );
// }

export default SponsorshipRequestListing;
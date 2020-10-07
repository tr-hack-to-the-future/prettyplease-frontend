import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import RequestDisplayCard from './requestdisplaycard/RequestDisplayCard';

function SponsorPage() {

    // TODO Move test data out of here
    const [requests, setCharity] = useState([
        {
            // require("./assets/images/abstract-logo.jpg"),
            charityName: "Food Bank",
            image: require("../assets/images/charity-logo-blue.png"),
            // sponsorship request description (TODO do we need an id value?)
            requestId: "1",
            description: "Help underwrite some of our operating costs by becoming a ‘Friend’ of our Foodbank.",
            amount: "£1500",        // TODO formatted to include currency symbol?
            duration: "2 years",    // TODO formatted to include time unit?
            incentive: "We would like you to join us in a business partnership to enable us to continue operating for the year. When you become a 'Friend of the Food Bank' you will receive 30 co-branded Food Bank T-shirts and to opportunity to organise a team building day by volunteering in our warehouse and kitchens."
        },
        {
            charityName: "Historical Typesetting Society",
            image: require("../assets/images/charity-logo-green.png"),
            // sponsorship request description (TODO do we need an id value?)
            requestId: "2",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            amount: "£600",        // TODO formatted to include currency symbol?
            duration: "single event",    // TODO formatted to include time unit?
            incentive: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt."
        },

    ]);


    return (
        <div className="SponsorPage">
            <Container>
                <Row className="justify-content-md-center mt-4">
                    <p>There are {requests.length} sponsorship requests available</p>
                </Row>

                <Row>
                    <Card>
                        {requests.map((request) =>
                            <RequestDisplayCard cardData={request} />
                        )}
                    </Card>

                </Row>

            </Container>
        </div>


    );
}

export default SponsorPage;
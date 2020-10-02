import React from 'react';
import { Container, Card, Row, Col } from 'react-bootstrap';


function SponsorshipRequest({ request }) {
    const styles = {
        card: {
            padding: 'p-3',
              width: "100%",
              height: "auto"

        },
        cardImage: {
            // padding: "5%"
        }
    }
    // const logo = require('./charity-logo-blue.png'); // with require
    return (
        <div>SponsorshipRequest: { request[0].charityName }
   <div className="navigation">
        This one: {request.charityName}
    </div>

    </div>
        // <Container>
        //     <Card className="m-2 border-1 shadow" style={styles.card}>
        //         <p>props.length</p>
        //         <Row>
        //             <Col>
        //                 <Card.Img variant="top" src={logo} style={styles.cardImage} alt="Charity image" />
        //             </Col>
        //             <Col>
        //                 <Card.Body>
        //                     <Card.Title>{request.charityName}</Card.Title>
        //                     <a href="Charity1.html" class="stretched-link">
        //                         <Card.Text>
        //                             {request.description}
        //                         </Card.Text>
        //                     </a>
        //                     {/* <Button variant="primary">Go somewhere</Button> */}
        //                     <div>
        //                         <span className="card-text inline col-sm-12 col-md-6 pl-0 pr-1 small">Amount: {request.amount}</span>
        //                         <span className="card-text inline col-sm-12 col-md-6 p-0 small">Duration: {request.duration}</span>
        //                     </div>
        //                 </Card.Body>

        //             </Col>

        //         </Row>
        //     </Card>
        // </Container>
    );

}


export default SponsorshipRequest;


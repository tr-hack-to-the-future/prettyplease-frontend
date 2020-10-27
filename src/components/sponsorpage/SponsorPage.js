import React from 'react';
import Card from 'react-bootstrap/Card';
import "./SponsorPage.css";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import RequestDisplayCard from '../requestdisplaycard/RequestDisplayCard';

import { useHistory } from 'react-router-dom';
import { getFormattedPlural } from '../requestformatter';
import { useAuth } from "../Firebase/AuthContext";

function SponsorPage() {

  const history = useHistory();

  // // const {currentUser} = useAuth();
  // const currentUser = {
  //   //   uid: "b19dcdc9-1547-11eb-9ed1-0a7222284ed8",
  //   uid: "CyQ1Hku3lZb9NMni5BF1eWis18d2", // sponsor IOI@gmail.com
  //       userType: "sponsor"
  //    }

  // // Fetch the requests from the API
  // const [fundingRequests, setRequests] = useState([]);
  // useEffect(() => {
  //   // TODO fetch sponsorId from currentUser context
  //   // const currentUser = {
  //   //   uid: "b19dcdc9-1547-11eb-9ed1-0a7222284ed8",
  //   //   userType: "sponsor"
  //   // };
  //   console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>  " + currentUser.uid);

  //   axios.get("https://ae9g7g3iyl.execute-api.eu-west-2.amazonaws.com/dev/sponsorrequests/" + currentUser.uid)
  //     .then(response => setRequests(response.data))
  //     .catch(error => console.log(error));
  // }, []);

  let { fundingRequests, getSponsorRequests } = useAuth();
  // let location = useLocation();
  try {
    getSponsorRequests();
  } catch (e) {
    console.log(e)
  }
  const requests = fundingRequests.filter(
    request => request.requestStatus === "OPEN"
  );


  return (
    <div className="SponsorPage">
      <Container>

        <Row className="justify-content-md-center mt-4">
          <h5>There are {requests.length} sponsorship {getFormattedPlural("request", requests.length)} available</h5>

        </Row>

        <Row>
          <Card>
            <RequestDisplayCard key={requests.requestId} cardData={requests} />
          </Card>

        </Row>

      </Container>
    </div>

  );
}

export default SponsorPage;

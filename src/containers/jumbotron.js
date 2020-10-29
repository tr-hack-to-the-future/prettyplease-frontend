import React from "react";
import { useAuth } from "../components/Firebase/AuthContext";
import { useHistory } from "react-router-dom";
import Jumbotron from "../components/jumbotron";
import Emoji from "../Helpers/emoji";

export function JumbotronContainer() {
  const { currentUser } = useAuth();
  const history = useHistory();

  const handlerForSponsor = () => {
    !currentUser ? history.push("/Login") : history.push("/ForSponsors");
  };

  const handlerForCharities = () => {
    !currentUser ? history.push("/Login") : history.push("/ForCharities");
  };

  const handlerNewRequest = () => {
    !currentUser ? history.push("/Login") : history.push("/NewFund");
  };

  return (
    <Jumbotron.Container>
      <Jumbotron>
        <Jumbotron.Pane>
          <Jumbotron.Image
            img
            src="https://www.telegraph.co.uk/content/dam/good-news/seven-seas/ministry-of-stories-gemma-day-xlarge.jpg"
            alt="The ministry of Stories"
          ></Jumbotron.Image>
          <Jumbotron.FigCaption>
            "Alfa sponsored the Ministry of Stories in 2019"
          </Jumbotron.FigCaption>
        </Jumbotron.Pane>
        <Jumbotron.Pane>
          <Jumbotron.Title>Actions Speak louder than emojis</Jumbotron.Title>
          <Jumbotron.SubTitle>
            Plea and gratitude work hand in hand. Whether you are a charity or a
            company, find sponsors and initiatives that match your values.
          </Jumbotron.SubTitle>

          <Jumbotron.ButtonLink onClick={handlerForSponsor} alt="For sponsors">
            {" "}
            For Sponsors
          </Jumbotron.ButtonLink>
          <Jumbotron.ButtonLink
            onClick={handlerForCharities}
            alt="For charities"
          >
            {" "}
            For Charities
          </Jumbotron.ButtonLink>
        </Jumbotron.Pane>
      </Jumbotron>
      <Jumbotron.Section>
        <Jumbotron.Text>
          At Pretty <Emoji symbol="🙏" label="please" />
          asking is not a taboo. We start from the principle that if you don't
          ask, you don't get. Let generosity be a constant. You are a charity:
          connect with the most ethical organisations globally. You are a
          sponsor: wear your <Emoji symbol="❤️" label="heart" />
          on your sleeve.
        </Jumbotron.Text>
        <Jumbotron.ButtonLink onClick={handlerNewRequest} alt="Fund Request">
          {" "}
          Fund Request
        </Jumbotron.ButtonLink>
      </Jumbotron.Section>
    </Jumbotron.Container>
  );
}

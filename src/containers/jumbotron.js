import React from "react";
import Jumbotron from "../components/jumbotron";
import Emoji from "../helpers/emoji";

export function JumbotronContainer() {
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
            company, find sponsors and initiatives that match your values
          </Jumbotron.SubTitle>
          <Jumbotron.ButtonLink
            href="/prettyplease-frontend/#/ForSponsors"
            alt="For sponsors"
          >
            For Sponsors
          </Jumbotron.ButtonLink>
          <Jumbotron.ButtonLink
            href="/prettyplease-frontend/#/ForCharities"
            alt="For charities"
          >
            For Charities
          </Jumbotron.ButtonLink>
        </Jumbotron.Pane>
      </Jumbotron>
      <Jumbotron.Section>
        <Jumbotron.Text>
          At Pretty <Emoji symbol="🙏" label="please" />
          asking is not a taboo. We start from the principle that{" "}
          <b
            style={{
              textWeight: "bold",
              textDecoration: "underline yellow"
            }}
          >
            if you don't ask you don't get.
          </b>
          <Jumbotron.Title>Let generosity be a Constant!</Jumbotron.Title>
          You are a charity:connect with the most ethical organisation globally.
          You are a sponsor: wear your <Emoji symbol="🐑" label="sheep" />
          on your sleeve
        </Jumbotron.Text>
        <Jumbotron.ButtonLink>Try this</Jumbotron.ButtonLink>
      </Jumbotron.Section>
    </Jumbotron.Container>
  );
}

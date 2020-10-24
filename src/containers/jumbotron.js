import React from "react";
import Jumbotron from "../components/jumbotron";

export function JumbotronContainer() {
  return (
    <Jumbotron.Container>
      <Jumbotron>
        <Jumbotron.Pane>
          <Jumbotron.Title>Emojis speak louder than actions</Jumbotron.Title>
          <Jumbotron.SubTitle>Hello</Jumbotron.SubTitle>
        </Jumbotron.Pane>
        <Jumbotron.Pane>
          <Jumbotron.Image
            img
            src="https://www.telegraph.co.uk/content/dam/good-news/seven-seas/ministry-of-stories-gemma-day-xlarge.jpg"
            alt="The ministry of Stories"
          ></Jumbotron.Image>
        </Jumbotron.Pane>
      </Jumbotron>
    </Jumbotron.Container>
  );
}

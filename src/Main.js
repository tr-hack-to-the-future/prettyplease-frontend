import React from "react";
import Carousel from "./components/Carousel";
import { JumbotronContainer } from "./containers/jumbotron";
import { FaqsContainer } from "./containers/faqs";

function Main() {
  return (
    <>
      <JumbotronContainer />
      <Carousel />
      <FaqsContainer />
    </>
  );
}

export default Main;

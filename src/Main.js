import React from "react";
import Carousel from "./components/Carousel";
import { JumbotronContainer } from "./Containers/Jumbotron";
import { FaqsContainer } from "./Containers/Faqs";

function Main({ SponsorData }) {
  return (
    <>
      <JumbotronContainer />
      <Carousel />
      <FaqsContainer />
    </>
  );
}

export default Main;

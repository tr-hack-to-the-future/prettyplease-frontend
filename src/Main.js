import React, { Component, useState } from "react";
import Sponsorlist from "./components/Sponsorlist";
import CharityPage from "./components/CharityPage";
import SponsorPage from "./components/SponsorPage";
import Carousel from "./components/Carousel";
import Featurette from "./components/featurette";
import { JumbotronContainer } from "./containers/jumbotron";
import { FaqsContainer } from "./containers/faqs";

function Main({ SponsorData }) {
  return (
    <>
      <JumbotronContainer />
      <Featurette />
      <Carousel />
      <FaqsContainer />
    </>
  );
}

export default Main;

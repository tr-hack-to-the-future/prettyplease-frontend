import React, { Component, useState } from "react";
import Sponsorlist from "./components/Sponsorlist";
import CharityPage from "./components/CharityPage";
import SponsorPage from "./components/SponsorPage";
import Carousel from "./components/Carousel";
import { JumbotronContainer } from "./containers/jumbotron";
import { FeaturetteContainer } from "./containers/featurette";
import { FaqsContainer } from "./containers/faqs";

function Main({ SponsorData }) {
  return (
    <>
      <JumbotronContainer />
      <FeaturetteContainer />
      <Carousel />
      <FaqsContainer />
    </>
  );
}

export default Main;

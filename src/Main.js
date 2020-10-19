import React, { Component, useState } from "react";
import Sponsorlist from "./components/Sponsorlist";
import CharityPage from "./components/CharityPage";
import SponsorPage from "./components/SponsorPage";
import Jumbotron from "./components/Jumbotron";
import Carousel from "./components/Carousel";
import Featurette from "./components/Featurette";
import "./App.css";

function Main({ SponsorData }) {
  return (
    <>
      <Jumbotron />
      <Featurette />
      <Carousel />
    </>
  );
}

export default Main;

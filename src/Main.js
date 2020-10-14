import React, { Component, useState } from 'react';
import Sponsorlist from './components/Sponsorlist';
import CharityPage from './components/CharityPage';
import SponsorPage from './components/SponsorPage';
import Jumbotron from './components/Jumbotron';
import Carousel from './components/Carousel';
import Footer from './components/Footer';
import './App.css';


function Main({SponsorData}) {

  return (
    <>
      <Jumbotron />
      <Carousel />
      <Footer />
    </>

  );
}

export default Main;

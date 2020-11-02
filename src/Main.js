import React from "react";
import StyledCarousel from "./components/StyledCarousel";
import { JumbotronContainer } from "./containers/jumbotron";
import { FaqsContainer } from "./containers/faqs";

function Main() {
  return (
    <>
      <JumbotronContainer />
      <StyledCarousel />
      <FaqsContainer />
    </>
  );
}

export default Main;

import React from "react";
import Header from "../Components/Header/Header";
import ConfIntro from "../Components/ConfIntro/ConfIntro";
import ConfCards from "../Components/ConfCards/ConfCards";
import ConfSolution from "../Components/ConfSolution/ConfSolution";

function Conference() {
  return (
    <>
      <Header />
      <ConfIntro />
      <ConfCards />
      <ConfSolution />
    </>
  );
}

export default Conference;

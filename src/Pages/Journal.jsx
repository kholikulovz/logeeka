import React from "react";
import Header from "../Components/Header/Header";
import JournalCards from "../Components/JournalCards/JournalCards";
import JournalIntro from "../Components/JournalIntro/JournalIntro";

function Journal() {
  return (
    <>
      <Header/>
      <JournalIntro/>
      <JournalCards/>
    </>
  );
}

export default Journal;

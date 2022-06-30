import React, { useState } from "react";
import Navbar from "./Navbar";
import ProjectList from "./ProjectList";
import FilterBar from "./FilterBar";

const Home = () => {
  // je créé une variable pour mes inputs de search
  const [containsWord, setcontainsWord] = useState("");

  // je crée une fonction pour Handle
  const handleContainsWord = (e) => {
    setcontainsWord(e.target.value);
    console.log(containsWord);
  };

  return (
    <>
      <Navbar />
      <FilterBar
        handleContainsWord={handleContainsWord}
        containsWord={containsWord}
      />
      <div className="pl-[120px]">
        <ProjectList containsWord={containsWord} />
      </div>
    </>
  );
};

export default Home;

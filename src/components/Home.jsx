import React from "react";
import Navbar from "./Navbar";
import ProjectList from "./ProjectList";
import FilterBar from "./FilterBar";
import { useState } from "react";

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

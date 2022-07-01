import React, { useState } from "react";
import Navbar from "./Navbar";
import ProjectList from "./ProjectList";
import FilterBar from "./FilterBar";

const Home = () => {
  // je créé une variable pour mes inputs de search
  const [containsWord, setcontainsWord] = useState("");
  const [company, setCompany] = useState("");
  const [sorted, setSorted] = useState("");

  // je crée une fonction pour Handle
  const handleContainsWord = (e) => {
    setcontainsWord(e.target.value);
    console.log(containsWord);
  };

  const handleSetCompany = (e) => {
    setCompany(e.target.value);
  };

  const handleSetSorted = (e) => {
    setSorted(e.target.value);
  };

  return (
    <>
      <Navbar />
      <FilterBar
        handleContainsWord={handleContainsWord}
        containsWord={containsWord}
        handleSetCompany={handleSetCompany}
        handleSetSorted={handleSetSorted}
      />
      <div className="pl-[120px]">
        <ProjectList
          containsWord={containsWord}
          company={company}
          sorted={sorted}
        />
      </div>
    </>
  );
};

export default Home;

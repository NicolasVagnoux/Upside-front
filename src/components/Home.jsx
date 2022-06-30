import React from "react";
import Navbar from "./Navbar";
import ProjectList from "./ProjectList";

const Home = () => {
  return (
    <>
      <Navbar />
      <div className="pl-[120px]">
        <ProjectList />
      </div>
    </>
  );
};

export default Home;

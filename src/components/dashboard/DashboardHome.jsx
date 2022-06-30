import React from "react";
import Articles from "./Articles";
import ContactCard from "./ContactCard";
import ProjectCard from "./ProjectCard";
import StateView from "./StateView";
import Welcome from "./Welcome";

const DashboardHome = () => {
  return (
    <div className="flex pl-20 flex-wrap justify-between">
      <Welcome />
      <ProjectCard />
      <ProjectCard />
      <ProjectCard />
      <ProjectCard />
      <StateView />
      <ContactCard />
      <Articles />
    </div>
  );
};

export default DashboardHome;

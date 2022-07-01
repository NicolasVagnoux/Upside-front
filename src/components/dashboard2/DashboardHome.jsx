import React from "react";
import Articles from "./Articles";
import ContactCard from "./ContactCard";
import Welcome from "./Welcome";
import Navbar from "../Navbar";
import ClientNav from "./ClientNav";
import ClientProjectList from "./ClientProjectList";

const DashboardHome = () => {
  return (
    <div className="flex pl-20 flex-wrap justify-between overflow-hidden">
      <Navbar />
      <ClientNav />
      <Welcome />
      <div>
        <ClientProjectList />
      </div>
      <div className="w-full">
        <ContactCard />
        <Articles className="bp1:hidden" />
      </div>
    </div>
  );
};

export default DashboardHome;

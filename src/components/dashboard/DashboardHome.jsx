import React from "react";
import Articles from "./Articles";
import ContactCard from "./ContactCard";
import ClientCard from "./ClientCard";
import Welcome from "./Welcome";
import Fade from "react-reveal/Fade";
import Navbar from "../Navbar";
import ClientNav from "./ClientNav";

const DashboardHome = () => {
  return (
    <div className="flex pl-20 flex-wrap justify-between overflow-hidden">
      <Navbar />
      <ClientNav />
      <Welcome />
      <Fade big className="w-full">
        <div className="w-full">
          <ContactCard />
        </div>
        <ClientCard />
        <ClientCard />
        <ClientCard />
        <ClientCard />
        <ClientCard />
        <ClientCard />
        <Articles className="bp1:hidden" />
      </Fade>
    </div>
  );
};

export default DashboardHome;

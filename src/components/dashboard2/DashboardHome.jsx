import React from "react";
import Articles from "./Articles";
import ContactCard from "./ContactCard";
import Welcome from "./Welcome";
import Navbar from "../Navbar";
import ClientNav from "./ClientNav";
import ClientProjectList from "./ClientProjectList";

const DashboardHome = () => {
  return (
    <div className="flex flex-wrap justify-between pl-20 overflow-hidden">
      <Navbar />
      <ClientNav />
      <Welcome />
      <div>
        <ClientProjectList />
      </div>
      <div className="w-full">
        <ContactCard />
        <p className="pt-16 pl-10 text-3xl font-title text-slate-800">
          {" "}
          Quoi de neuf dans votre secteur ?
        </p>
        <Articles className="bp1:hidden" />
      </div>
    </div>
  );
};

export default DashboardHome;

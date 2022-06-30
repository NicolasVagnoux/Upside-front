import React from "react";
import Articles from "./Articles";
import ContactCard from "./ContactCard";
import ClientCard from "./ClientCard";
import StateView from "./StateView";
import Welcome from "./Welcome";

const DashboardHome = () => {
  return (
    <div className="flex pl-20 flex-wrap justify-between">
      <Welcome />
      <ClientCard />
      <ClientCard />
      <ClientCard />
      <ClientCard />
      <StateView />
      <ContactCard />
      <Articles />
    </div>
  );
};

export default DashboardHome;

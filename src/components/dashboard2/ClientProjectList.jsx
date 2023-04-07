/* eslint-disable react/prop-types */
import React, { useState, useEffect } from "react";
import axios from "axios";
import ClientProjectCard from "./ClientProjectCard";

const ClientProjectList = () => {
  const [projectList, setProjectList] = useState([]);

  useEffect(() => {
    const getProjectList = async () => {
      const { data } = await axios.get(`${import.meta.env.VITE_DB_URL}/api/projects`);
      setProjectList(data);
    };
    getProjectList();
  }, []);

  return (
    <div className="flex flex-wrap gap-4 pb-10 pl-10">
      {projectList &&
        projectList
          // filtre par company/client
          .filter((element) => element.client === "saft")
          .map((project, index) => (
            <ClientProjectCard key={index} {...project} />
          ))}
    </div>
  );
};

export default ClientProjectList;

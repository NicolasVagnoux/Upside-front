/* eslint-disable react/prop-types */
import React, { useState, useEffect } from "react";
import axios from "axios";
import ClientProjectCard from "./ClientProjectCard";

const ClientProjectList = () => {
  const [projectList, setProjectList] = useState([]);

  useEffect(() => {
    const getProjectList = async () => {
      const { data } = await axios.get(`http://localhost:3000/api/projects`);
      setProjectList(data);
    };
    getProjectList();
  }, []);

  return (
    <div className="flex flex-wrap gap-4 pl-10 pb-10">
      {projectList &&
        projectList
          // filtre par company/client
          .filter((element) => element.client === "Saft")
          .map((project, index) => (
            <ClientProjectCard key={index} {...project} />
          ))}
    </div>
  );
};

export default ClientProjectList;

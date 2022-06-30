import React, { useState, useEffect } from "react";
import axios from "axios";
import ProjectCard from "./ProjectCard";

const ProjectList = () => {
  const [projectList, setProjectList] = useState([]);

  useEffect(() => {
    const getProjectList = async () => {
      const { data } = await axios.get(`http://localhost:3000/api/projects`);
      setProjectList(data);
    };
    getProjectList();
  }, []);
  console.log(projectList);

  return (
    <div className="flex flex-wrap gap-4">
      {projectList &&
        projectList.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
    </div>
  );
};

export default ProjectList;

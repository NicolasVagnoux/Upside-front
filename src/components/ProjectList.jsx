/* eslint-disable react/prop-types */
import React, { useState, useEffect } from "react";
import axios from "axios";
import ProjectCard from "./ProjectCard";

const ProjectList = ({ containsWord, company, sorted }) => {
  const [projectList, setProjectList] = useState([]);

  useEffect(() => {
    const getProjectList = async () => {
      const { data } = await axios.get(`http://localhost:3000/api/projects`);
      setProjectList(data);
    };
    getProjectList();
  }, []);

  return (
    <div className="flex flex-wrap gap-4 pt-16">
      {projectList &&
        projectList
          // filtrer pour le search
          .filter(
            (element) =>
              element.nameProject
                .toLowerCase()
                .includes(containsWord.toLowerCase()) ||
              element.client
                .toLowerCase()
                .includes(containsWord.toLowerCase()) ||
              element.projectDesc
                .toLowerCase()
                .includes(containsWord.toLowerCase()) ||
              !containsWord
          )
          // filtre par company/client
          .filter((element) => element.client === company || !company)
          // trie selon les jours restants ou la progression du dossier
          .sort(function (a, b) {
            return sorted === "progressionup" && a.progress - b.progress;
          })
          .sort(function (a, b) {
            return sorted === "progressiondown" && b.progress - a.progress;
          })
          .sort(function (a, b) {
            return (
              sorted === "daysleftup" &&
              new Date(a.finalDate).getTime() - new Date(b.finalDate).getTime()
            );
          })
          .sort(function (a, b) {
            return (
              sorted === "daysleftdown" &&
              new Date(b.finalDate).getTime() - new Date(a.finalDate).getTime()
            );
          })

          .map((project, index) => <ProjectCard key={index} {...project} />)}
    </div>
  );
};

export default ProjectList;

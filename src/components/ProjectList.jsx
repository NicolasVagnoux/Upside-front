/* eslint-disable react/prop-types */
import React, { useState, useEffect } from "react";
import axios from "axios";
import ProjectCard from "./ProjectCard";

const ProjectList = ({ containsWord, company, sorted }) => {
  const [projectList, setProjectList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const getProjectList = async () => {
      setIsLoading(true);
      const { data } = await axios.get(`${import.meta.env.VITE_DB_URL}/api/projects`);
      setProjectList(data);
      setIsLoading(false);
    };
    getProjectList();
  }, []);
  console.log(import.meta.env.VITE_DB_URL);


  return (
    <>
    {isLoading && <img src="../assets/loading.svg" alt='loading' className="w-[75px] h-[75px] absolute left-[50%] top-[50%] animate-spin" />}
    <div className="flex flex-wrap gap-4 pt-16">
      {projectList &&
        projectList
          // filtrer pour le search
          .filter(
            (element) =>
              element.nameproject
                .toLowerCase()
                .includes(containsWord.toLowerCase()) ||
              element.client
                .toLowerCase()
                .includes(containsWord.toLowerCase()) ||
              element.projectdesc
                .toLowerCase()
                .includes(containsWord.toLowerCase()) ||
              !containsWord
          )
          // filtre par company/client
          .filter((element) => element.client === company || !company)
          // trie selon les jours restants ou la progression du dossier
          .sort((a, b) => {
            return sorted === "progressionup" && a.progress - b.progress;
          })
          .sort((a, b) => {
            return sorted === "progressiondown" && b.progress - a.progress;
          })
          .sort((a, b) => {
            return (
              sorted === "daysleftup" &&
              new Date(a.finaldate).getTime() - new Date(b.finaldate).getTime()
            );
          })
          .sort((a, b) => {
            return (
              sorted === "daysleftdown" &&
              new Date(b.finaldate).getTime() - new Date(a.finaldate).getTime()
            );
          })

          .map((project, index) => <ProjectCard key={index} {...project} />)}
    </div>
    </>
  );
};

export default ProjectList;

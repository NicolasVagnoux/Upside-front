import React from "react";
import PropTypes from "prop-types";

const ProjectCard = ({ nameProject, projectDesc, client,subsidiary,startDate, finalDate, progress, industryTag, color, projectManager }) => {
  return (
    <div className="border-2 border-black w-[400px] h-[200px] rounded-lg flex flex-col justify-around items-center">
      <h1 className="text-xl font-bold">{nameProject}</h1>
      <p>{projectDesc}</p>
      <p>{client}</p>
      <p>{subsidiary}</p>
      <p>{startDate.slice(0,10).split("-").reverse().join("/")}</p>
      <p>{finalDate.slice(0,10).split("-").reverse().join("/")}</p>
      <p>{progress}</p>
      <p>{industryTag}</p>
      <p>{color}</p>
      <p>{projectManager}</p>
    </div>
  );
};

ProjectCard.propTypes = {
  nameProject: PropTypes.string.isRequired,
  projectDesc: PropTypes.string.isRequired,
  client: PropTypes.string.isRequired,
};

export default ProjectCard;

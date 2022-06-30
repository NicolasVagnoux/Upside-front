import React from "react";
import PropTypes from "prop-types";

const ProjectCard = ({
  nameProject,
  projectDesc,
  client,
  subsidiary,
  startDate,
  finalDate,
  progress,
  industryTag,
  color,
  projectManager,
}) => {
  return (
    <div
      className={`border-2 w-[300px] h-[270px] rounded-lg flex flex-col justify-around items-center bg-[${color}]`}
    >
      <h1 className="text-xl font-bold">{nameProject}</h1>
      <p>{projectDesc}</p>
      <p>{client}</p>
      <p>{subsidiary}</p>
      <p>{startDate.slice(0, 10).split("-").reverse().join("/")}</p>
      <p>{finalDate.slice(0, 10).split("-").reverse().join("/")}</p>
      <p>
        {Math.abs(
          new Date(finalDate).getTime() - new Date(startDate).getTime()
        ) /
          (1000 * 3600 * 24)}{" "}
        days left
      </p>
      <p>{progress}</p>
      <p>{industryTag}</p>
      <p>{projectManager}</p>
    </div>
  );
};

ProjectCard.propTypes = {
  nameProject: PropTypes.string.isRequired,
  projectDesc: PropTypes.string.isRequired,
  client: PropTypes.string.isRequired,
  subsidiary: PropTypes.string.isRequired,
  startDate: PropTypes.string.isRequired,
  finalDate: PropTypes.string.isRequired,
  progress: PropTypes.number.isRequired,
  color: PropTypes.string.isRequired,
  projectManager: PropTypes.string.isRequired,
  industryTag: PropTypes.string.isRequired,
};

export default ProjectCard;

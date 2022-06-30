import React from "react";
import PropTypes from "prop-types";
import ProgressBar from "./ProgressBar";

const ProjectCard = ({
  nameProject,
  image,
  projectDesc,
  subsidiary,
  startDate,
  finalDate,
  progress,
}) => {
  return (
    <div className="bg-white w-[300px] h-[350px] rounded-lg flex flex-col justify-around items-start shadow-2xl px-6 py-6">
      <div className="w-20 h-20">
        <img src={image} alt="company logo" />
      </div>
      <h1 className="text-lg font-bold font-title">{nameProject}</h1>
      <p className="overflow-hidden text-xs h-1/6 text-slate-400">
        {projectDesc}
      </p>
      {/* <p>{client}</p> */}
      {/* <p>{startDate.slice(0, 10).split("-").reverse().join("/")}</p>
      <p>{finalDate.slice(0, 10).split("-").reverse().join("/")}</p> */}

      <div className="flex flex-col-reverse items-center justify-around">
        <ProgressBar bgcolor="red" completed={progress} />
        <p className="text-xs text-slate-400">{progress}%</p>
      </div>
      <div className="flex justify-around">
        <p>
          {Math.abs(
            new Date(finalDate).getTime() - new Date(startDate).getTime()
          ) /
            (1000 * 3600 * 24)}{" "}
          days left
        </p>
        <p>{subsidiary}</p>
      </div>
      {/* <p>{industryTag}</p> */}
      {/* <p>{projectManager}</p> */}
    </div>
  );
};

ProjectCard.propTypes = {
  nameProject: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  projectDesc: PropTypes.string.isRequired,
  subsidiary: PropTypes.string.isRequired,
  startDate: PropTypes.string.isRequired,
  finalDate: PropTypes.string.isRequired,
  progress: PropTypes.number.isRequired,
};

export default ProjectCard;

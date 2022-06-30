import React from "react";
import PropTypes from "prop-types";
import ProgressBar from "./ProgressBar";

const ProjectCard = ({
  client,
  nameProject,
  image,
  projectDesc,
  industryTag,
  projectManager,
  subsidiary,
  startDate,
  finalDate,
  progress,
}) => {
  const daysLeft = () => {
    const date =
      (new Date(finalDate).getTime() - new Date(startDate).getTime()) /
      (1000 * 3600 * 24);
    return Math.round(date);
  };

  return (
    <div className="bg-white min-w-[300px] w-[30%] h-[350px] rounded-lg flex flex-col justify-around items-start shadow-lg px-6 py-6 relative">
      <img
        src="../../icons/close.png"
        width={16}
        alt="icon"
        className="absolute top-3 right-3"
      />
      <div className="w-20 h-20">
        <img src={image} alt="company logo" />
      </div>
      <h1 className="text-lg font-bold leading-none font-title">
        {nameProject}
      </h1>
      <h2 className="leading-none">{client}</h2>
      <p className="overflow-hidden text-xs h-1/6 text-slate-400">
        {projectDesc}{" "}
      </p>
      <p className="overflow-hidden text-xs leading-none text-slate-400">
        Industry: {industryTag}
      </p>
      <p className="overflow-hidden text-xs text-slate-400">
        Contact: {projectManager}
      </p>
      {/* <p>{startDate.slice(0, 10).split("-").reverse().join("/")}</p>
      <p>{finalDate.slice(0, 10).split("-").reverse().join("/")}</p> */}
      <div className="flex flex-col-reverse items-center justify-around">
        <ProgressBar bgcolor="red" completed={progress} />
        <p className="text-xs text-slate-400">{progress}%</p>
      </div>
      <div className="flex justify-between w-full">
        <p className="flex gap-1 px-2 py-0.5 rounded-md bg-gray-400/25 text-slate-500 text-xs items-center">
          <img src="../../icons/time.png" alt="icon" className="w-5" />
          {daysLeft()} days left
        </p>
        <p className="flex items-center text-xs">
          <img src="../../icons/pin.png" alt="icon" className="w-5" />
          {subsidiary}
        </p>
      </div>
    </div>
  );
};

ProjectCard.propTypes = {
  client: PropTypes.string.isRequired,
  industryTag: PropTypes.string.isRequired,
  projectManager: PropTypes.string.isRequired,
  nameProject: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  projectDesc: PropTypes.string.isRequired,
  subsidiary: PropTypes.string.isRequired,
  startDate: PropTypes.string.isRequired,
  finalDate: PropTypes.string.isRequired,
  progress: PropTypes.number.isRequired,
};

export default ProjectCard;

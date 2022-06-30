import React, { useState } from "react";
import PropTypes from "prop-types";
import axios from "axios";
import ProgressBar from "./ProgressBar";

const ProjectCard = ({
  id,
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

  const [deleteModal, setDeleteModal] = useState(false);

  const deleteProject = async () => {
    try {
      await axios.delete(`http://localhost:3000/api/projects/${id}`);
      setDeleteModal(false);
      window.location.reload(false);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="bg-white w-[300px] h-[350px] rounded-lg flex flex-col justify-around items-start shadow-lg px-6 py-6 relative">
      <button
        onClick={() => {
          setDeleteModal(true);
        }}
        className="absolute top-3 right-3"
        type="button"
      >
        <img src="../../icons/close.png" width={16} alt="icon" />
      </button>
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
      {/* Modale de suppression */}
      {deleteModal && (
        <div className="fixed z-10 top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-[380px] h-[150px] flex flex-col justify-around items-center bg-white text-center font-title shadow-2xl rounded-md p-4">
          <p>
            Êtes-vous sûr(e) de vouloir supprimer ce projet ?<br />
            Cette décision est irréversible.
          </p>
          <div className="flex gap-24">
            <button className="text-xl" onClick={deleteProject} type="button">
              Oui
            </button>
            <button
              className="text-xl"
              onClick={() => {
                setDeleteModal(false);
              }}
              type="button"
            >
              Non
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

ProjectCard.propTypes = {
  id: PropTypes.number.isRequired,
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

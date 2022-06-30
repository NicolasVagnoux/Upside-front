import axios from "axios";
import React, { useState } from "react";

const AddProject = () => {
  const [name, setName] = useState("");
  const [client, setClient] = useState("");
  const [type, setType] = useState("");
  const [projectManager, setProjectManager] = useState("");
  const [subsidiary, setSubsidiary] = useState("");
  const [image, setImage] = useState("");
  const [description, setDescription] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [createdCard, setCreatedCard] = useState();

  const createProject = async (e) => {
    try {
      e.preventDefault();
      const { data } = await axios.post(
        `http://localhost:3000/api/projects`,
        {
          nameProject: name,
          image,
          projectDesc: description,
          client,
          subsidiary,
          startDate,
          finalDate: endDate,
          progress: 0,
          industryTag: type,
          color: "lightblue",
          projectManager,
        },
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
        }
      );
      setName("");
      setClient("");
      setType("");
      setProjectManager("");
      setSubsidiary("");
      setImage("");
      setDescription("");
      setStartDate("");
      setEndDate("");
      setCreatedCard(data);
    } catch (err) {
      console.error(err);
    }
  };
  console.log(createdCard);

  return (
    <div className="pl-[80px] h-[100vh] flex flex-col justify-start items-start">
      <h1 className="my-8 ml-12 text-5xl font-bigtitle text-[#e79759]">
        Ajouter un nouveau projet :
      </h1>
      <form
        onSubmit={createProject}
        className="ml-12 w-[750px] h-[540px] mt-8 rounded-lg shadow-2xl flex flex-col justify-around items-center tex-[#183650]"
      >
        <div className="flex w-[90%] justify-between">
          {" "}
          {/* Nom + Client */}
          <div className="flex flex-col w-[45%] font-title">
            {" "}
            {/* Nom */}
            <label htmlFor="name">Nom du projet :</label>
            <input
              className="px-2 py-1 rounded-sm outline-none focus:outline-[#e79759] bg-slate-50 "
              type="text"
              required
              id="name"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
          </div>
          <div className="flex flex-col w-[45%] font-title">
            {" "}
            {/* Client */}
            <label htmlFor="client">Client :</label>
            <input
              className="px-2 py-1 rounded-sm outline-none focus:outline-[#e79759]  bg-slate-50"
              type="text"
              required
              id="client"
              value={client}
              onChange={(e) => {
                setClient(e.target.value);
              }}
            />
          </div>
        </div>
        <div className="flex w-[90%] justify-between">
          {" "}
          {/* Type + Project Manager */}
          <div className="flex flex-col w-[45%] font-title">
            {" "}
            {/* Type */}
            <label htmlFor="type">Type de projet :</label>
            <input
              className="px-2 py-1 outline-none focus:outline-[#e79759] rounded-sm bg-slate-50"
              type="text"
              required
              id="type"
              value={type}
              onChange={(e) => {
                setType(e.target.value);
              }}
            />
          </div>
          <div className="flex flex-col w-[45%] font-title">
            {" "}
            {/* Project Manager */}
            <label htmlFor="projectmanager">Project Manager :</label>
            <input
              className="px-2 py-1 rounded-sm outline-none focus:outline-[#e79759] bg-slate-50"
              type="text"
              required
              id="projectmanager"
              value={projectManager}
              onChange={(e) => {
                setProjectManager(e.target.value);
              }}
            />
          </div>
        </div>
        <div className="flex w-[90%] justify-between font-title">
          {" "}
          {/* Filiale + Image */}
          <div className="flex flex-col w-[45%] font-title">
            {" "}
            {/* Filiale */}
            <label htmlFor="subsidiary">Filiale :</label>
            <input
              className="px-2 py-1 rounded-sm outline-none focus:outline-[#e79759] bg-slate-50"
              type="text"
              required
              id="subsidiary"
              value={subsidiary}
              onChange={(e) => {
                setSubsidiary(e.target.value);
              }}
            />
          </div>
          <div className="flex flex-col w-[45%] font-title">
            {" "}
            {/* Image */}
            <label htmlFor="image">Image (url) :</label>
            <input
              className="px-2 py-1 rounded-sm outline-none focus:outline-[#e79759] bg-slate-50"
              type="text"
              required
              id="image"
              value={image}
              onChange={(e) => {
                setImage(e.target.value);
              }}
            />
          </div>
        </div>
        <div className="flex flex-col w-[90%] font-title">
          {" "}
          {/* Description */}
          <label htmlFor="description">Description du projet :</label>
          <textarea
            className="px-2 py-1 rounded-sm resize-none outline-none focus:outline-[#e79759] bg-slate-50"
            rows="5"
            required
            id="description"
            value={description}
            onChange={(e) => {
              setDescription(e.target.value);
            }}
          />
        </div>
        <div className="flex w-[90%] justify-between">
          {" "}
          {/* DateDébut + DateFin */}
          <div className="flex flex-col w-[45%] font-title">
            {" "}
            {/* DateDébut */}
            <label htmlFor="startdate">Date de début (YYYY/MM/JJ) :</label>
            <input
              className="px-2 py-1 rounded-sm outline-none focus:outline-[#e79759] bg-slate-50"
              type="text"
              required
              id="startdate"
              value={startDate}
              onChange={(e) => {
                setStartDate(e.target.value);
              }}
            />
          </div>
          <div className="flex flex-col w-[45%] font-title">
            {" "}
            {/* DateFin */}
            <label htmlFor="enddate">Date de fin (YYYY/MM/JJ) :</label>
            <input
              className="px-2 py-1 rounded-sm outline-none focus:outline-[#e79759] bg-slate-50 "
              type="text"
              required
              id="enddate"
              value={endDate}
              onChange={(e) => {
                setEndDate(e.target.value);
              }}
            />
          </div>
        </div>
        <input
          className="self-end px-6 py-1 mr-20 border-[1px] border-[#e79759] hover:bg-[#e79759] hover:text-white rounded-xl cursor-pointer font-title"
          type="submit"
          value="Créer le projet"
        />
      </form>
    </div>
  );
};

export default AddProject;

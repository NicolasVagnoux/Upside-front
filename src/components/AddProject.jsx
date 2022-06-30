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
      <h1 className="my-8 ml-12 text-5xl">Ajouter un nouveau projet :</h1>
      <form
        onSubmit={createProject}
        className="ml-12 w-[750px] h-[540px] mt-8 rounded-3xl box-shadow flex flex-col justify-around items-center"
      >
        <div className="flex w-[90%] justify-between">
          {" "}
          {/* Nom + Client */}
          <div className="flex flex-col w-[45%]">
            {" "}
            {/* Nom */}
            <label htmlFor="name">Nom du projet :</label>
            <input
              className="px-2 py-1 rounded-sm box-shadow"
              type="text"
              required
              id="name"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
          </div>
          <div className="flex flex-col w-[45%]">
            {" "}
            {/* Client */}
            <label htmlFor="client">Client :</label>
            <input
              className="px-2 py-1 rounded-sm box-shadow"
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
          <div className="flex flex-col w-[45%]">
            {" "}
            {/* Type */}
            <label htmlFor="type">Type de projet :</label>
            <input
              className="px-2 py-1 rounded-sm box-shadow"
              type="text"
              required
              id="type"
              value={type}
              onChange={(e) => {
                setType(e.target.value);
              }}
            />
          </div>
          <div className="flex flex-col w-[45%]">
            {" "}
            {/* Project Manager */}
            <label htmlFor="projectmanager">Project Manager :</label>
            <input
              className="px-2 py-1 rounded-sm box-shadow"
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
        <div className="flex w-[90%] justify-between">
          {" "}
          {/* Filiale + Image */}
          <div className="flex flex-col w-[45%]">
            {" "}
            {/* Filiale */}
            <label htmlFor="subsidiary">Filiale :</label>
            <input
              className="px-2 py-1 rounded-sm box-shadow"
              type="text"
              required
              id="subsidiary"
              value={subsidiary}
              onChange={(e) => {
                setSubsidiary(e.target.value);
              }}
            />
          </div>
          <div className="flex flex-col w-[45%]">
            {" "}
            {/* Image */}
            <label htmlFor="image">Image (url) :</label>
            <input
              className="px-2 py-1 rounded-sm box-shadow"
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
        <div className="flex flex-col w-[90%]">
          {" "}
          {/* Description */}
          <label htmlFor="description">Description du projet :</label>
          <textarea
            className="px-2 py-1 rounded-sm box-shadow"
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
          <div className="flex flex-col w-[45%]">
            {" "}
            {/* DateDébut */}
            <label htmlFor="startdate">Date de début (YYYY/MM/JJ) :</label>
            <input
              className="px-2 py-1 rounded-sm box-shadow"
              type="text"
              required
              id="startdate"
              value={startDate}
              onChange={(e) => {
                setStartDate(e.target.value);
              }}
            />
          </div>
          <div className="flex flex-col w-[45%]">
            {" "}
            {/* DateFin */}
            <label htmlFor="enddate">Date de fin (YYYY/MM/JJ) :</label>
            <input
              className="px-2 py-1 rounded-sm box-shadow"
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
          className="self-end px-6 py-1 mr-20 border-[1px] border-black rounded-xl cursor-pointer"
          type="submit"
          value="Créer le projet"
        />
      </form>
    </div>
  );
};

export default AddProject;

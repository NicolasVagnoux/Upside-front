import React from "react";

function Settings() {
  return (
    <div>
      <div className="pl-[80px] h-[100vh] flex flex-col">
        <h1 className="my-8 ml-12 text-5xl font-bigtitle text-[#e79759]">
          {" "}
          Réglages utilisateur{" "}
        </h1>
        <div className="flex flex-col items-left shadow-2xl bg-none font-text text-xl text-[#183650] border-[#183650]  w-[40%] ml-12 mb-8 border h-full rounded-lg">
          <h1 className="text-left ml-8 mt-2 font-text p-2 ">
            {" "}
            <p>Email</p>{" "}
            <input
              required
              type="text"
              className=" rounded-lg outline-none focus:border-[#e79759] bg-slate-50 border-[1px] border-[#183650]"
            />
          </h1>
          <h2 className="text-left ml-8 mt-2 font-text p-2 border-b  mr-8">
            {" "}
            <p>Mot de passe</p>{" "}
            <input
              required
              type="email"
              className="rounded-lg outline-none focus:border-[#e79759] bg-slate-50 border-[1px] border-[#183650]"
            />
            <button
              type="button"
              className="self-end border-[1px] m-3 px-4 border-[#183650] hover:bg-[#183650] hover:text-white rounded-lg cursor-pointer"
            >
              {" "}
              Changer{" "}
            </button>
          </h2>

          <h1 className="text-left ml-8 font-text p-2 border-b mr-8 ">
            {" "}
            <p>Notifications</p>{" "}
            <button
              type="button"
              className="self-end border-[1px] mr-3 px-4  border-[#1c9d22] hover:bg-[#1c9d22] hover:text-white rounded-lg cursor-pointer"
            >
              {" "}
              Activer{" "}
            </button>
            <button
              type="button"
              className="self-end border-[1px] m-3 px-4 border-[#c53e1f] hover:bg-[#c53e1f] hover:text-white rounded-lg cursor-pointer "
            >
              {" "}
              Désactiver{" "}
            </button>
          </h1>
          <h1 className="text-left ml-8 mt-2 font-text p-2">
            {" "}
            <p> Aide </p>
          </h1>
          <h1 className="text-left ml-8 mt-2 font-text p-2 ">
            {" "}
            <p> Changer de compte </p>
          </h1>
          <h1 className="text-left ml-8 mt-2 font-text p-2 border-b">
            {" "}
            <p> Informations générales </p>
          </h1>
          <h1 className="text-center ml-8 font-text mt-20 ">
            {" "}
            <button
              type="button"
              className="border-[1px] mr-3 px-4  border-[#183650] hover:bg-[#183650] hover:text-white rounded-lg cursor-pointer"
            >
              {" "}
              Sauvegarder{" "}
            </button>
          </h1>
        </div>
      </div>
    </div>
  );
}

export default Settings;

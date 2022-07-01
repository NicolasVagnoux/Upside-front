import React from "react";
import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <div className="grid grid-cols-3">
      <div className="col-start-1 col-end-3 h-[100vh] flex flex-col justify-center items-center">
        <img
          className="w-[600px] -skew-x-6 mb-16 mr-64 mt-6 animate-leftSlideIn"
          src="./assets/welcome.svg"
          alt="welcome"
        />
        <img
          className="w-[350px] animate-topSlideIn"
          src="./assets/upside2.png"
          alt="upside"
        />
        <img
          className="w-[300px] mt-16 ml-96 animate-rightSlideIn"
          src="./assets/apside.png"
          alt="apside"
        />
        <img
          className="w-[400px] m-8 -skew-x-6 animate-opacity"
          src="./assets/gestionprojet.svg"
          alt="gestion"
        />
      </div>
      <div className="z-20 bg-white h-[100vh] flex justify-center items-center">
        <form className="w-[80%] h-[75%] border-[1px] border-grey shadow-2xl text-[#183650] rounded-xl flex flex-col justify-start items-center font-text pt-10">
          <p className="mb-10 text-3xl text-center">
            Connectez-vous à votre compte Upside !
          </p>
          <div className="flex flex-col items-start justify-center w-[80%]">
            <label className="mb-2 text-xl" htmlFor="id">
              Identifiant :
            </label>
            <input
              className="w-[100%] border-grey border-[2px] rounded-lg px-2 py-2"
              type="text"
              id="id"
            />
          </div>
          <div className="flex flex-col items-start justify-center mt-8 w-[80%]">
            <label className="mb-2 text-xl" htmlFor="password">
              Mot de passe :
            </label>
            <input
              className="w-[100%] border-grey border-[2px] rounded-lg px-2 py-2"
              type="password"
              id="password"
            />
          </div>
          <div className="flex flex-row-reverse justify-end items-center mt-8 w-[80%] gap-2">
            <label className="text-xl" htmlFor="check">
              Rester connecté
            </label>
            <input
              className="border-grey accent-[#183650] w-[20px] h-[20px] border-[2px] rounded-lg px-2 py-2"
              type="checkbox"
              id="check"
            />
          </div>
          <Link to="/home">
            <button
              className="border-[1px] bg-opacity-20 hover:bg-opacity-100 hover:text-white bg-[#e79759] border-[#e79759] text-xl mt-10 rounded-xl py-2 px-6"
              type="button"
            >
              Me connecter
            </button>
          </Link>
        </form>
      </div>
    </div>
  );
};

export default Landing;

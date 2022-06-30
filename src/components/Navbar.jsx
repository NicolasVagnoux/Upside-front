import React from "react";
import { Link } from "react-router-dom";
import navbar from "../../data/navbar";

const Navbar = () => {
  return (
    // Navbar complète
    <div className="fixed py-4 h-full w-[80px] bg-[#183650] flex flex-col justify-between items-center">
      <img
        className="w-[50px] shadow-2xl"
        src="./assets/upside.png"
        alt="upside"
      />
      {/* Liste */}
      <ul className="flex flex-col items-center justify-center gap-8">
        {navbar &&
          navbar.map((item) => (
            <Link to={item.link}>
              <img
                className="w-[25px] shadow-2xl hover:scale-110 transition"
                src={item.src}
                alt="img"
              />
            </Link>
          ))}
      </ul>
      <Link to="/">
        <img
          className="w-[30px] shadow-2xl cursor-pointer"
          src="./assets/logout.svg"
          alt="logout"
        />
      </Link>
    </div>
  );
};

export default Navbar;

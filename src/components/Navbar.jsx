import React from "react";
import { Link } from "react-router-dom";
import navbar from "../../data/navbar";

const Navbar = () => {
  return (
    // Navbar complète
    <div className="fixed py-4 h-full w-[80px] bg-[#183650] flex flex-col justify-between items-center">
      <img
        className="w-[50px] logo-shadow-2xl"
        src="./assets/upside.png"
        alt="upside"
      />
      {/* Liste */}
      <ul className="flex flex-col items-center justify-center gap-8">
        {navbar &&
          navbar.map((item) => (
            <Link to={item.link}>
              <img
                className="w-[25px] logo-shadow-2xl"
                src={item.src}
                alt="img"
              />
            </Link>
          ))}
      </ul>
      <img
        className="w-[30px] logo-shadow-2xl cursor-pointer"
        src="./assets/logout.svg"
        alt="logout"
      />
    </div>
  );
};

export default Navbar;

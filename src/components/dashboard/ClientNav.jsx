import React from "react";

// ----- @ mui -----
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";
import Badge from "@mui/material/Badge";
import Avatar from "@mui/material/Avatar";

const ClientNav = () => {
  return (
    <div className="w-full h-16">
      <nav className="w-full h-16">
        <ul className="flex h-16 items-center justify-end gap-7">
          <img
            src="/assets/frenchFlag.svg"
            alt="drapeau français"
            className="w-8 h-8 cursor-pointer"
          />
          <li>
            <Badge badgeContent={4} color="primary" className="animate-pulse">
              <NotificationsActiveIcon className="text-slate-500 cursor-pointer" />
            </Badge>
          </li>
          <li>
            <Avatar
              alt="Photo de profil"
              src="https://cdn-icons-png.flaticon.com/512/145/145843.png"
            />
          </li>
          <li></li>
        </ul>
      </nav>
    </div>
  );
};

export default ClientNav;

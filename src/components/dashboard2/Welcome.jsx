import React from "react";

// ----- @mui Imports -----
import Typography from "@mui/material/Typography";

const Welcome = () => {
  return (
    <div className="w-full flex flex-wrap items-center mx-10">
      <div className="flex gap-20 items-end justify-end mb-9">
        <div className="w-32 h-auto">
          <img
            src="https://www.thinksmartgrids.fr/wp-content/uploads/2016/08/SAFT-logo.png"
            alt="company logo"
          />
        </div>
        <Typography
          sx={{ fontSize: 30 }}
          color="text.secondary"
          className="font-bold 
            bg-gradient-to-r bg-clip-text  text-transparent 
            from-blue-900 via-blue-400 to-blue-100
            animate-text font-title"
        >
          YOUR COMPANY HUB{" "}
        </Typography>
      </div>
    </div>
  );
};

export default Welcome;

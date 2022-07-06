import React from "react";

// ----- @mui Imports -----
import Typography from "@mui/material/Typography";

const Welcome = () => {
  return (
    <div className="flex flex-wrap items-center w-full mx-10">
      <div className="flex items-end justify-end gap-20 mb-9">
        <div className="w-32 h-auto">
          <img
            src="https://www.thinksmartgrids.fr/wp-content/uploads/2016/08/SAFT-logo.png"
            alt="company logo"
          />
        </div>
        <Typography
          sx={{ fontSize: 30 }}
          color="text.secondary"
          className="font-bold text-transparent bg-gradient-to-r bg-clip-text from-blue-900 via-blue-400 to-blue-100 animate-text font-title"
        >
          LE HUB{" "}
        </Typography>
      </div>
    </div>
  );
};

export default Welcome;

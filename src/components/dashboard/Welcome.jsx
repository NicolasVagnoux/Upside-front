import React from "react";

// ----- @mui Imports -----
import Typography from "@mui/material/Typography";

const Welcome = () => {
  return (
    <div className="w-full flex flex-wrap items-center m-10">
      <div>
        <Typography
          sx={{ fontSize: 30 }}
          color="text.secondary"
          className="pb-3 font-bold 
            bg-gradient-to-r bg-clip-text  text-transparent 
            from-blue-900 via-blue-400 to-blue-100
            animate-text"
        >
          Bonjour Nicolas,
        </Typography>
      </div>
    </div>
  );
};

export default Welcome;

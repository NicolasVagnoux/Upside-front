import React, { useState } from "react";

// --- @mui import ---
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";

import { createTheme, ThemeProvider } from "@mui/material/styles";
import ProjectDesc from "./ProjectDesc";

// ----- Color theme provider -----
const theme = createTheme({
  palette: {
    background: {
      paper: "#bbdefb",
    },
  },
});

const ClientCard = () => {
  const [open, setOpen] = useState(false);

  // ----- Function : handle modal opening & closing -----
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div className="flex flex-wrap items-center m-10">
      <div>
        <ThemeProvider theme={theme}>
          <Card
            color="paper"
            className=" w-72 cursor-pointer"
            onClick={handleOpen}
          >
            <CardContent>
              <h2
                sx={{ fontSize: 20 }}
                color="text.secondary"
                className="font-bold pb-3"
              >
                Evolution 4
              </h2>

              <div className="flex justify-between item-center mb-3">
                <Avatar
                  alt="Remy Sharp"
                  src="https://mui.com/static/images/avatar/2.jpg"
                />

                <p className="text-xs mt-2">
                  Project Manager : Ghislain Lescuyer
                </p>
              </div>

              <Typography
                sx={{ mb: 0.5 }}
                color="text.secondary"
                className="pb-3"
              >
                Fin du projet dans <span className="font-bold"> 90 jours</span>
              </Typography>
              <Typography
                sx={{ mb: 0.5 }}
                color="text.secondary"
                className="pb-3"
              >
                Avancement ↔️ 60%
              </Typography>
            </CardContent>
          </Card>
        </ThemeProvider>
      </div>
      {/* ----- CARD modal ----- */}
      <ProjectDesc open={open} handleClose={handleClose} />
    </div>
  );
};

export default ClientCard;

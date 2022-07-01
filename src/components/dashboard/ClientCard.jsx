import React, { useState } from "react";
import axios from "axios";

// --- @mui import ---
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";

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
              <Typography
                sx={{ fontSize: 20 }}
                color="text.secondary"
                className="pb-3"
              >
                Evolution 4
              </Typography>

              <Stack direction="row" spacing={2}>
                <Avatar
                  alt="Remy Sharp"
                  src="https://mui.com/static/images/avatar/2.jpg"
                />

                <Typography sx={{ fontSize: 12 }} className="pb-3">
                  Project Manager : Ghislain Lescuyer
                </Typography>
              </Stack>

              <Typography
                sx={{ mb: 0.5 }}
                color="text.secondary"
                className="pb-3"
              >
                Fin du projet le 30/09/2022
              </Typography>
              <Typography
                sx={{ mb: 0.5 }}
                color="text.secondary"
                className="pb-3"
              >
                Avancement ↔️ 60%
              </Typography>
              <Typography
                sx={{ mb: 0.5 }}
                color="text.secondary"
                className="pb-2"
              >
                Fin du projet dans : 90 jours
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

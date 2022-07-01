import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

import { createTheme, ThemeProvider } from "@mui/material/styles";

// ----- Color theme provider -----
const theme = createTheme({
  palette: {
    background: {
      paper: "#FBB05B",
    },
  },
});

const ContactCard = () => {
  return (
    <div className="flex w-full justify-around">
      <ThemeProvider theme={theme}>
        <div className="flex flex-wrap w-full justify-end items-center ">
          <Card
            color="paper"
            className=" w-full h-52 flex justify-center items-center gap-10"
          >
            <div className="bg-[#FBB05B] w-1/2 flex justify-center items-center">
              <p className="font-bigtitle text-7xl text-white w-4/5">
                VOTRE CONTACT
              </p>
              <div className="w-[300px] h-80 rounded-3xl">
                <img
                  alt="Client manager"
                  src="../../icons/img.jpg"
                  className="object-cover w-full h-full"
                />
              </div>
            </div>
            <CardContent>
              <h5 className="pt-2 text-3xl font-title">John St. Maurice</h5>
              <h3 className="pb-2 font-bold font-title italic pt-1">
                APSIDE Client Manager
              </h3>

              <Typography
                sx={{ mb: 0.5 }}
                color="text.secondary"
                className="pb-1"
              >
                Client Manager
              </Typography>

              <div className="flex justify-start items-center font-text" />
              <div className="m-auto mt-1">
                <p>john@apside.com</p>
                <p>06.77.78.77.78</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </ThemeProvider>
    </div>
  );
};

export default ContactCard;

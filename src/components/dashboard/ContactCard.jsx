import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
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
    <div className="flex flex-wrap w-full justify-center items-center ">
      <ThemeProvider theme={theme}>
        <Card color="paper" className=" w-72 h-52">
          <CardContent>
            <Stack direction="row" spacing={2}>
              <Avatar
                alt="Client manager"
                src="https://www.shareicon.net/data/512x512/2016/09/15/829471_user_512x512.png"
              />
              <h5 className="pt-2">Estelle St. Maurice</h5>
            </Stack>
            <h3 className="pb-4 font-bold italic pt-3">
              APSIDE Client Manager
            </h3>

            <Typography
              sx={{ mb: 0.5 }}
              color="text.secondary"
              className="pb-1"
            >
              Client Manager
            </Typography>

            <div className="flex justify-start items-center"></div>
            <div className="m-auto mt-3">
              <p>estelle@apside.com</p>
              <p>06.77.78.77.78</p>
            </div>
          </CardContent>
        </Card>
      </ThemeProvider>
    </div>
  );
};

export default ContactCard;

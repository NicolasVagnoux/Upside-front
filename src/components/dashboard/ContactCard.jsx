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
      paper: "#ffb74d",
    },
  },
});

const ContactCard = () => {
  return (
    <div className="flex flex-wrap items-center m-10">
      <div>
        <ThemeProvider theme={theme}>
          <Card color="paper" className=" w-72 h-52 cursor-pointer">
            <CardContent>
              <Typography
                sx={{ fontSize: 20 }}
                color="text.secondary"
                className="pb-4"
              >
                APSIDE CONTACT
              </Typography>

              <Typography
                sx={{ mb: 0.5 }}
                color="text.secondary"
                className="pb-4"
              >
                Client Manager
              </Typography>

              <div className="flex">
                <Stack direction="row" spacing={2}>
                  <Avatar
                    alt="Client manager"
                    src="https://resize.elle.fr/article/var/plain_site/storage/images/loisirs/cinema/news/avatar-2-une-premiere-bande-annonce-en-mai-4010741/96462268-1-fre-FR/Avatar-2-une-premiere-bande-annonce-en-mai.jpg"
                  />
                  <Typography sx={{ fontSize: 12 }}>Nicolas Vagnoux</Typography>
                </Stack>

                <Typography sx={{ fontSize: 12 }} className="pt-2">
                  Avatar@apside.com
                </Typography>
              </div>
            </CardContent>
          </Card>
        </ThemeProvider>
      </div>
    </div>
  );
};

export default ContactCard;

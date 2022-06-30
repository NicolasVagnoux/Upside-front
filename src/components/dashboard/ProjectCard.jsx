import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
// import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { createTheme, ThemeProvider } from "@mui/material/styles";
// import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
// import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
// import ProjectDesc from "./ProjectDesc";

// ----- Color theme provider -----
const theme = createTheme({
  palette: {
    background: {
      paper: "#bbdefb",
    },
  },
});

// ----------------------------------------------

const ProjectCard = () => {
  // const [isClicked, setIsClicked] = useState(false);

  // const handleClick = () => {
  //   setIsClicked(!isClicked);
  // };

  return (
    <div className="flex flex-wrap items-center m-10">
      <div>
        <ThemeProvider theme={theme}>
          <Card color="paper" className=" w-72 cursor-pointer">
            <CardContent>
              <Typography
                sx={{ fontSize: 20 }}
                color="text.secondary"
                className="pb-3"
              >
                NEO Project
              </Typography>
              <Typography sx={{ fontSize: 12 }} className="pb-3">
                Estelle Chardac
              </Typography>
              <Typography
                sx={{ mb: 0.5 }}
                color="text.secondary"
                className="pb-3"
              >
                IT consulting
              </Typography>
              {/* <button
                className="w-full flex justify-end items-center"
                onClick={handleClick}
              >
                {isClicked ? <ArrowDropUpIcon /> : <ArrowDropDownIcon />}
              </button> */}
            </CardContent>
            {/* {isClicked && <ProjectDesc />} */}
          </Card>
        </ThemeProvider>
      </div>
    </div>
  );
};

export default ProjectCard;

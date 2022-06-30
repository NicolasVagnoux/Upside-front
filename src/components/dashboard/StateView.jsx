import * as React from "react";
import Card from "@mui/material/Card";
import PropTypes from "prop-types";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import { createTheme, ThemeProvider } from "@mui/material/styles";

// ----- Color theme provider -----
const theme = createTheme({
  palette: {
    background: {
      paper: "#e8eaf6",
    },
  },
});

// ----------------------------------------------
function CircularProgressWithLabel(props, { value }) {
  return (
    <Box sx={{ position: "relative", display: "inline-flex" }}>
      <CircularProgress variant="determinate" {...props} />
      <Box
        sx={{
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
          position: "absolute",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Typography
          variant="caption"
          component="div"
          color="text.secondary"
          className="pl-24 pt-4"
        >
          {`${Math.round({ value })}%`}
        </Typography>
      </Box>
    </Box>
  );
}

const StateView = () => {
  const [progress, setProgress] = React.useState(10);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prevProgress) =>
        prevProgress >= 100 ? 20 : prevProgress + 10
      );
    }, 10000);
    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <div className="flex flex-wrap items-center m-10">
      <div>
        <ThemeProvider theme={theme}>
          <Card color="paper" className=" w-72 cursor-pointer">
            <CardContent>
              <Typography sx={{ fontSize: 20 }} color="text.secondary">
                PROGRESSION
              </Typography>
              <CircularProgressWithLabel
                value={progress}
                className="ml-24 mt-4"
              />
            </CardContent>
          </Card>
        </ThemeProvider>
      </div>
    </div>
  );
};

export default StateView;

CircularProgressWithLabel.propTypes = {
  value: PropTypes.number.isRequired,
};

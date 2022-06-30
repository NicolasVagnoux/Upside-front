import React from "react";
import PropTypes from "prop-types";

// ----- Components -----
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";

// ----- Package dependencies -----
import { Animated } from "react-animated-css";

const ProjectDesc = ({ open, handleClose }) => {
  // ----- Function : modal styling -----
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 500,
    bgcolor: "background.paper",
    border: "2px solid",
    boxShadow: 24,
    p: 2,
  };

  return (
    <div className="">
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        className="bp1:z-50"
      >
        <Box sx={style} className="rounded-lg bg-slate-900">
          <Animated
            animationIn="fadeInDown"
            animationOut="fadeInDown"
            isVisible
          >
            <Typography
              id="modal-modal-title"
              variant="h4"
              component="h2"
              className="bp1:px-24 text-center"
            >
              BIENVENUE SUR LA MODALE
            </Typography>
          </Animated>
        </Box>
      </Modal>
    </div>
  );
};

ProjectDesc.propTypes = {
  open: PropTypes.bool,
  handleClose: PropTypes.func.isRequired,
};

ProjectDesc.defaultProps = {
  open: false,
};

export default ProjectDesc;

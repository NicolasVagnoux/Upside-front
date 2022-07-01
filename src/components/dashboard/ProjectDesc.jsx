import React from "react";
import PropTypes from "prop-types";

// ----- Components -----
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
            <h2
              id="modal-modal-title"
              className="text-center text-xl font-extrabold pb-7"
            >
              - Evolution 4 -
            </h2>
            <h4 className="text-xl font-bold pb-3">Description</h4>
            <p className="pb-3">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
              accusantium, officia enim laudantium, ullam voluptate et odit
              temporibus sit voluptas quod. Iusto eos debitis voluptate adipisci
              ipsa ad ex commodi.
            </p>
            <h6 className="text-lg font-bold pb-3">Objectifs</h6>
            <ol>
              <li>➡️ Objectif 1</li>
              <li>➡️ Objectif 2</li>
              <li>➡️ Objectif 3</li>
            </ol>
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

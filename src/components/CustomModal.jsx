import React from "react";

import { Modal, Box, Typography, Button } from "@mui/material";

import NewTeamForm from "./NewTeamForm";
import Info from "./Info";

const CustomModal = ({ open, handleClose }) => {
  return (
    <Modal open={open} onClose={handleClose}>
      <Box sx={boxStyle}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "100%",
          }}
        >
          <Typography variant="h6" align="center">
            Create a new team
          </Typography>
          <Info />
        </div>

        <NewTeamForm />
        <Button variant="contained" sx={{ width: "40%", alignSelf: "center" }}>
          Create
        </Button>
      </Box>
    </Modal>
  );
};

const boxStyle = {
  position: "absolute",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "white",
  borderRadius: 2,
  p: 4,
};

export default CustomModal;

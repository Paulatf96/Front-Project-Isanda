import React from "react";
import Tooltip from "@mui/material/Tooltip";
import InfoIcon from "@mui/icons-material/Info";
import InfoTwoToneIcon from "@mui/icons-material/InfoTwoTone";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";

const Info = () => {
  const title =
    "Cada equipo debe estar formado por tres personas: Un Project leader, un Engineering Architect y un Account Manager y los tres miembros deben pertenecer al mismo Projects availability.";
  return (
    <Tooltip title={title}>
      <InfoOutlinedIcon color="primary" fontSize="small" sx={{ ml: 1 }} />
    </Tooltip>
  );
};

export default Info;

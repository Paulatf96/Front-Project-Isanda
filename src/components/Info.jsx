import React from "react";
import Tooltip from "@mui/material/Tooltip";
import InfoIcon from "@mui/icons-material/Info";
import InfoTwoToneIcon from "@mui/icons-material/InfoTwoTone";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";

const Info = () => {
  const title =
    "Each team must be composed of three people: a Project Leader, an Engineering Architect, and an Account Manager, and all three members must belong to the same Projects availability.";
  return (
    <Tooltip title={title}>
      <InfoOutlinedIcon color="primary" fontSize="small" sx={{ ml: 1 }} />
    </Tooltip>
  );
};

export default Info;

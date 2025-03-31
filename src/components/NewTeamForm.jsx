import {
  FormControl,
  Select,
  MenuItem,
  InputLabel,
  TextField,
} from "@mui/material";
import React from "react";

// a. Cada equipo debe estar formado por tres personas: Un Project leader, un Engineering Architect y
// un Account Manager.
// b. Los tres miembros deben pertenecer al mismo Projects availability.
// c. Se deben visualizar todos los equipos que se han armado (diseño libre).
// d. No se debe permitir los mismos miembros en dos equipos.
// e. Se debe poder eliminar uno o todos los equipos.

const NewTeamForm = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "16px",
        padding: "16px",
      }}
    >
      <TextField required label="Team Name" variant="outlined" />
      <FormControl fullWidth sx={{ minWidth: 200 }}>
        <InputLabel id="project-leader">Project Leader</InputLabel>
        <Select
          labelId="project-leader"
          id="project-leader"
          sx={{
            backgroundColor: "#fff",
            borderRadius: 2,
          }}
        >
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>
      <FormControl fullWidth sx={{ minWidth: 200 }}>
        <InputLabel id="engineering-architect">
          Engineering Architect
        </InputLabel>
        <Select
          labelId="engineering-architect"
          id="engineering-architect"
          sx={{
            backgroundColor: "#fff",
            borderRadius: 2,
          }}
        >
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>
      <FormControl fullWidth sx={{ minWidth: 200 }}>
        <InputLabel id="account-manager">Account Manager</InputLabel>
        <Select
          labelId="account-manager"
          id="account-manager"
          sx={{
            backgroundColor: "#fff",
            borderRadius: 2,
          }}
        >
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
};

export default NewTeamForm;

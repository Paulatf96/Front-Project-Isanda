import React, { useContext } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Typography,
  IconButton,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { GeneralContext } from "../context/GeneralContext";

const CustomTable = ({ isTeam = false, rows, id, onDelete, title }) => {
  return (
    <TableContainer
      component={Paper}
      sx={{
        mt: 3,
        borderRadius: 2,
        boxShadow: 3,
        overflow: "hidden",
        position: "relative",
      }}
    >
      <Typography
        variant="h6"
        sx={{
          fontWeight: "bold",
          textAlign: "center",
          padding: 1,
          backgroundColor: "#e0e0e0",
          borderBottom: "1px solid #ccc",
        }}
      >
        {isTeam ? title : "All Members"}
      </Typography>

      {isTeam && (
        <IconButton
          onClick={() => onDelete?.(id)}
          style={{ position: "absolute", top: 5, right: 10 }}
        >
          <DeleteIcon />
        </IconButton>
      )}

      <Table size="small">
        <TableHead>
          <TableRow sx={{ backgroundColor: "#f0f0f0" }}>
            <TableCell
              sx={{ fontWeight: "bold", textAlign: "center", width: 80 }}
            >
              Photo
            </TableCell>
            <TableCell sx={{ fontWeight: "bold", width: 120 }}>
              Member
            </TableCell>
            <TableCell sx={{ fontWeight: "bold", width: 120 }}>Role</TableCell>
            <TableCell sx={{ fontWeight: "bold", width: 250 }}>
              Projects Availability
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((member) => (
            <TableRow
              key={member.name}
              sx={{
                "&:hover": { backgroundColor: "#f1f1f1" },
                transition: "background-color 0.3s ease",
              }}
            >
              <TableCell sx={{ textAlign: "center" }}>
                <img
                  src={member.photo}
                  alt={member.name}
                  style={{ width: 45, height: 45, borderRadius: "50%" }}
                />
              </TableCell>
              <TableCell>{member.name}</TableCell>
              <TableCell>{member.role}</TableCell>
              <TableCell>
                <ul style={{ margin: 0, paddingLeft: 16 }}>
                  {member.projects.map((project) => (
                    <li
                      key={project + member.name}
                      style={{ fontSize: "0.9rem" }}
                    >
                      {project}
                    </li>
                  ))}
                </ul>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default CustomTable;

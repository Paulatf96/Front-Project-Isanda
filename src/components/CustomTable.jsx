import React from "react";
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

const CustomTable = ({ isTeam = true }) => {
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
        {isTeam ? "Team" : "All Members"}
      </Typography>

      {isTeam && (
        <IconButton style={{ position: "absolute", top: 5, right: 10 }}>
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
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{
                "&:hover": { backgroundColor: "#f1f1f1" },
                transition: "background-color 0.3s ease",
              }}
            >
              <TableCell sx={{ textAlign: "center" }}>
                <img
                  src={row.photo}
                  alt={row.name}
                  style={{ width: 45, height: 45, borderRadius: "50%" }}
                />
              </TableCell>
              <TableCell>{row.name}</TableCell>
              <TableCell>{row.role}</TableCell>
              <TableCell>
                <ul style={{ margin: 0, paddingLeft: 16 }}>
                  {row.projects.map((project) => (
                    <li key={project + row.name} style={{ fontSize: "0.9rem" }}>
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

const rows = [
  {
    name: "Ana Gómez",
    photo: "https://randomuser.me/api/portraits/women/1.jpg",
    role: "Project Leader",
    projects: ["Sistema de Gestión Empresarial", "Plataforma de E-commerce"],
    inTeam: true,
  },
  {
    name: "Carlos Pérez",
    photo: "https://randomuser.me/api/portraits/men/2.jpg",
    role: "Engineering Architect",
    projects: ["Sistema de Gestión Empresarial", "Aplicación de Reservas"],
    inTeam: true,
  },
  {
    name: "Laura Sánchez",
    photo: "https://randomuser.me/api/portraits/women/3.jpg",
    role: "Account Manager",
    projects: ["Plataforma de E-commerce", "App Móvil"],
    inTeam: true,
  },
  {
    name: "Diego Ramírez",
    photo: "https://randomuser.me/api/portraits/men/4.jpg",
    role: "Software Engineer",
    projects: ["Sistema de Gestión Empresarial", "App Móvil"],
    inTeam: false,
  },
  {
    name: "Mariana López",
    photo: "https://randomuser.me/api/portraits/women/5.jpg",
    role: "UX/UI Designer",
    projects: ["Plataforma de E-commerce", "Aplicación de Reservas"],
    inTeam: true,
  },
  {
    name: "Javier Torres",
    photo: "https://randomuser.me/api/portraits/men/6.jpg",
    role: "Frontend Developer",
    projects: ["Sistema de Gestión Empresarial", "App Móvil"],
    inTeam: true,
  },
  {
    name: "Sofía Herrera",
    photo: "https://randomuser.me/api/portraits/women/7.jpg",
    role: "Backend Developer",
    projects: ["Plataforma de E-commerce", "App Móvil"],
    inTeam: false,
  },
  {
    name: "Luis Fernández",
    photo: "https://randomuser.me/api/portraits/men/8.jpg",
    role: "Full Stack Developer",
    projects: ["Sistema de Gestión Empresarial", "Aplicación de Reservas"],
    inTeam: true,
  },
  {
    name: "Elena Castro",
    photo: "https://randomuser.me/api/portraits/women/9.jpg",
    role: "Data Analyst",
    projects: ["Sistema de Gestión Empresarial", "Plataforma de E-commerce"],
    inTeam: false,
  },
  {
    name: "Fernando Ruiz",
    photo: "https://randomuser.me/api/portraits/men/10.jpg",
    role: "DevOps Engineer",
    projects: ["Plataforma de E-commerce", "Sistema de Gestión Empresarial"],
    inTeam: false,
  },
  {
    name: "Clara Moreno",
    photo: "https://randomuser.me/api/portraits/women/11.jpg",
    role: "QA Engineer",
    projects: ["Plataforma de E-commerce", "App Móvil"],
    inTeam: true,
  },
  {
    name: "Gabriel Silva",
    photo: "https://randomuser.me/api/portraits/men/12.jpg",
    role: "Database Administrator",
    projects: ["Sistema de Gestión Empresarial", "Aplicación de Reservas"],
    inTeam: false,
  },
  {
    name: "Paula Méndez",
    photo: "https://randomuser.me/api/portraits/women/13.jpg",
    role: "Product Manager",
    projects: ["Aplicación de Reservas", "Plataforma de E-commerce"],
    inTeam: true,
  },
  {
    name: "Ricardo Orozco",
    photo: "https://randomuser.me/api/portraits/men/14.jpg",
    role: "Security Engineer",
    projects: ["Sistema de Gestión Empresarial", "App Móvil"],
    inTeam: false,
  },
  {
    name: "Andrea Bustamante",
    photo: "https://randomuser.me/api/portraits/women/15.jpg",
    role: "Business Analyst",
    projects: ["Plataforma de E-commerce", "Aplicación de Reservas"],
    inTeam: true,
  },
  {
    name: "Hugo Torres",
    photo: "https://randomuser.me/api/portraits/men/16.jpg",
    role: "Scrum Master",
    projects: ["Sistema de Gestión Empresarial", "Plataforma de E-commerce"],
    inTeam: false,
  },
  {
    name: "Verónica Salazar",
    photo: "https://randomuser.me/api/portraits/women/17.jpg",
    role: "Software Engineer",
    projects: ["Aplicación de Reservas", "App Móvil"],
    inTeam: true,
  },
  {
    name: "Daniel Espinoza",
    photo: "https://randomuser.me/api/portraits/men/18.jpg",
    role: "Technical Writer",
    projects: ["Sistema de Gestión Empresarial", "Plataforma de E-commerce"],
    inTeam: false,
  },
  {
    name: "Natalia Fuentes",
    photo: "https://randomuser.me/api/portraits/women/19.jpg",
    role: "Marketing Specialist",
    projects: ["Plataforma de E-commerce", "Aplicación de Reservas"],
    inTeam: true,
  },
  {
    name: "Pablo Estrada",
    photo: "https://randomuser.me/api/portraits/men/20.jpg",
    role: "Customer Support",
    projects: ["Sistema de Gestión Empresarial", "App Móvil"],
    inTeam: false,
  },
];

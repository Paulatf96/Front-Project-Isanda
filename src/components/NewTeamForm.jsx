import React, { useContext, useEffect, useMemo, useState } from "react";
import {
  FormControl,
  Select,
  MenuItem,
  InputLabel,
  TextField,
  Button,
} from "@mui/material";
import { GeneralContext } from "../context/GeneralContext";

const NewTeamForm = () => {
  const { members, setNewTeam } = useContext(GeneralContext);
  const [selectedTeam, setSelectedTeam] = useState({
    projectLeaderId: "",
    engineeringArchitectId: "",
    accountManagerId: "",
  });
  const availableMembers = members.filter((member) => !member.inTeam);

  const getCommonProjects = () => {
    const selectedMembers = Object.values(selectedTeam).filter((id) => id);
    if (selectedMembers.length === 0) return [];

    const selectedProjects = availableMembers
      .filter((member) => selectedMembers.includes(member.id))
      .map((member) => member.projects);

    return selectedProjects.reduce((a, b) => a.filter((p) => b.includes(p)));
  };

  const getFilteredMembers = (role) => {
    return availableMembers.filter((member) => {
      if (member.role !== role) return false;
      if (
        !selectedTeam.projectLeaderId &&
        !selectedTeam.engineeringArchitectId &&
        !selectedTeam.accountManagerId
      ) {
        return true;
      }

      return member.projects.some((project) =>
        getCommonProjects().includes(project)
      );
    });
  };

  const handleSelect = (role, id) => {
    setSelectedTeam((prev) => ({ ...prev, [role]: id }));
    setNewTeam((prev) => ({ ...prev, [role]: id }));
  };

  const handleChange = (value) => {
    setNewTeam((prev) => ({ ...prev, ["name"]: value }));
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "16px",
        padding: "16px",
      }}
    >
      <TextField
        required
        onChange={(e) => handleChange(e.target.value)}
        label="Team Name"
        variant="outlined"
      />
      <FormControl fullWidth>
        <InputLabel>Project Leader</InputLabel>
        <Select
          value={selectedTeam.projectLeader}
          onChange={(e) => handleSelect("projectLeaderId", e.target.value)}
        >
          {getFilteredMembers("Project Leader").map((member) => (
            <MenuItem key={member.id} value={member.id}>
              {member.name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <FormControl fullWidth>
        <InputLabel>Engineering Architect</InputLabel>
        <Select
          value={selectedTeam.engineeringArchitect}
          onChange={(e) =>
            handleSelect("engineeringArchitectId", e.target.value)
          }
        >
          {getFilteredMembers("Engineering Architect").map((member) => (
            <MenuItem key={member.id} value={member.id}>
              {member.name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <FormControl fullWidth>
        <InputLabel>Account Manager</InputLabel>
        <Select
          value={selectedTeam.accountManager}
          onChange={(e) => handleSelect("accountManagerId", e.target.value)}
        >
          {getFilteredMembers("Account Manager").map((member) => (
            <MenuItem key={member.id} value={member.id}>
              {member.name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
};

export default NewTeamForm;

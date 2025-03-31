import { useContext, useEffect, useState } from "react";

import "./App.css";
import CustomTable from "./components/CustomTable.jsx";
import CustomModal from "./components/CustomModal.jsx";
import { GeneralContext } from "./context/GeneralContext.jsx";

import { fetchMembers, createTeam, fetchTeams, deleteTeam } from "./api/api";

import AddIcon from "@mui/icons-material/Add";
import { Typography, Button } from "@mui/material";

function App() {
  const [open, setOpen] = useState();

  const { setMembers, newTeam, members, teams, setTeams } =
    useContext(GeneralContext);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  useEffect(() => {
    const getMembers = async () => {
      const response = await fetchMembers();
      setMembers(response);
    };

    getMembers();
    getTeams();
  }, [newTeam]);

  const handleCreateTeam = async () => {
    await createTeam(newTeam);
    await getTeams();
    handleClose();
  };

  const handleDeleteTeam = async (id) => {
    await deleteTeam(id);
    await getTeams();
  };

  const getTeams = async () => {
    const teams = await fetchTeams();
    setTeams(teams);
  };

  return (
    <>
      <Typography variant="h3" component="h1">
        Personal Table
      </Typography>
      <Button
        variant="outlined"
        startIcon={<AddIcon />}
        onClick={() => {
          handleOpen();
        }}
        sx={{ mt: 2 }}
      >
        New team
      </Button>
      {teams?.length > 0 &&
        teams?.map((team) => (
          <CustomTable
            isTeam={true}
            rows={team.members}
            id={team.id}
            onDelete={handleDeleteTeam}
            key={team.id}
            title={team.name}
          />
        ))}
      <CustomTable rows={members} />
      <CustomModal
        open={open}
        handleClose={handleClose}
        handleCreateTeam={handleCreateTeam}
      />
    </>
  );
}

export default App;

import { useState } from "react";

import "./App.css";
import CustomTable from "./components/CustomTable.jsx";
import CustomModal from "./components/CustomModal.jsx";

import AddIcon from "@mui/icons-material/Add";
import { Typography, Button } from "@mui/material";

function App() {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
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
      <CustomTable />
      <CustomModal open={open} handleClose={handleClose} />
    </>
  );
}

export default App;

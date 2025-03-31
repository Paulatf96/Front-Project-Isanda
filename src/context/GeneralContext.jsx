import { createContext, useContext, useState } from "react";

const GeneralContext = createContext();

const GeneralContextProvider = ({ children }) => {
  const [users, setUsers] = useState([]);
  const [newTeam, setNewTeam] = useState([]);
  const [teams, setTeams] = useState([]);

  return (
    <GeneralContext.Provider
      value={{ users, setUsers, newTeam, setNewTeam, teams, setTeams }}
    >
      {children}
    </GeneralContext.Provider>
  );
};

export { GeneralContext, GeneralContextProvider };

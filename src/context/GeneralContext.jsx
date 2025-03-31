import { createContext, useContext, useState } from "react";

const GeneralContext = createContext();

const GeneralContextProvider = ({ children }) => {
  const [members, setMembers] = useState([]);
  const [newTeam, setNewTeam] = useState([]);
  const [teams, setTeams] = useState([]);

  return (
    <GeneralContext.Provider
      value={{ members, setMembers, newTeam, setNewTeam, teams, setTeams }}
    >
      {children}
    </GeneralContext.Provider>
  );
};

export { GeneralContext, GeneralContextProvider };

const fetchMembers = async () => {
  try {
    const response = await fetch("http://localhost:8080/members");
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
};

const createTeam = async (team) => {
  try {
    return await fetch("http://localhost:8080/create/team", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(team),
    });
  } catch (error) {
    console.error(error);
  }
};

const deleteTeam = async (teamId) => {
  try {
    return await fetch("http://localhost:8080/delete/team", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(teamId),
    });
  } catch (error) {
    console.error(error);
  }
};

const fetchTeams = async () => {
  try {
    const response = await fetch("http://localhost:8080/teams");
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
};

export { fetchMembers, createTeam, deleteTeam, fetchTeams };

const URL_BASE = "http://localhost:8080";

const fetchMembers = async () => {
  try {
    const response = await fetch(`${URL_BASE}/members`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
};

const createTeam = async (team) => {
  try {
    return await fetch(`${URL_BASE}/create/team`, {
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
    return await fetch(`${URL_BASE}/delete/team`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ teamId }),
    });
  } catch (error) {
    console.error(error);
  }
};

const fetchTeams = async () => {
  try {
    const response = await fetch(`${URL_BASE}/teams`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
};

export { fetchMembers, createTeam, deleteTeam, fetchTeams };

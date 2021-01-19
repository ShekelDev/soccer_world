import { types } from "store/types";

const teams = (state = [], action) => {
    switch (action.type) {
        case types.teams.teamsSet:
            return insertTeams(state, action.payload);
        case types.teams.addCoords:
            return addCoords(state, action.payload);
        default:
            return state;
    }
};

const insertTeams = (teams, { newTeams, leagueId }) => {
    const tmpTeams = { ...teams };
    newTeams.forEach((team) => {
        tmpTeams[team.team_id] = { ...team, leagueId };
    });
    return tmpTeams;
};

const addCoords = (teams, { teamId, position }) => {
    teams[teamId] = { ...teams[teamId], position };
    return teams;
};

export default teams;

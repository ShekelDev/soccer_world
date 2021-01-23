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
    newTeams.forEach((team) => {
        teams[team.team_id] = { ...team, leagueId };
    });
    return { ...teams };
};

const addCoords = (teams, { teamId, position }) => {
    teams[teamId] = { ...teams[teamId], position };
    return { ...teams };
};

export default teams;

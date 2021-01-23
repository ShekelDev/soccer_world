import { types } from "store/types";

const standings = (state = {}, action) => {
    switch (action.type) {
        case types.standings.standingsSet:
            return insertStandings(state, action.payload);
        default:
            return state;
    }
};

const insertStandings = (standings, { newStandings, leagueId }) => {
    newStandings.forEach((standing) => {
        standings[standing.team_id] = { ...standing, leagueId };
    });
    return { ...standings };
};

export default standings;

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
    const tmpStandings = { ...standings };
    newStandings.forEach((standing) => {
        tmpStandings[leagueId] = standing;
    });
    return tmpStandings;
};

export default standings;

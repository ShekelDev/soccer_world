import { types } from "store/types";

const leagues = (state = {}, action) => {
    switch (action.type) {
        case types.leagues.leagueSet:
            return insertLeagues(state, action.payload);
        default:
            return state;
    }
};

const insertLeagues = (leagues, newLeagues) => {
    newLeagues.forEach((league) => {
        league.type === "League" && (leagues[league.league_id] = league);
    });
    return { ...leagues };
};

export default leagues;

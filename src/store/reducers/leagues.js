import { types } from "store/types";

const leagues = (state = [], action) => {
    switch (action.type) {
        case types.leagues.leagueSet:
            return insertLeagues(state, action.payload);
        default:
            return state;
    }
};

const insertLeagues = (leagues, newLeagues) => {
    const tmpLeagues = [...leagues];
    newLeagues.forEach((league) => {
        tmpLeagues[league.league_id] = league;
    });
    return tmpLeagues;
};

export default leagues;

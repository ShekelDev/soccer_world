import { types } from "store/types";

const headers = {
    "x-rapidapi-key": process.env.REACT_APP_RAPID_API_KEY,
    "x-rapidapi-host": process.env.REACT_APP_RAPID_API_HOST,
    useQueryString: true,
};

export const getLeagues = (country, onGetSuccess = () => {}, onFailure = () => {}) => {
    return apiAction({
        url: `https://api-football-v1.p.rapidapi.com/v2/leagues/country/${country}/2020`,
        method: "GET",
        type: types.leagues.leagueGet,
        headers,
        onSuccess: (response) => {
            onGetSuccess();
            return {
                type: types.leagues.leagueSet,
                payload: response.api.leagues,
            };
        },
        onFailure,
    });
};

export const getStandings = (leagueId, onGetSuccess = () => {}, onFailure = () => {}) => {
    return apiAction({
        url: `https://api-football-v1.p.rapidapi.com/v2/leagueTable/${leagueId}`,
        method: "GET",
        type: types.standings.standingsGet,
        headers,
        onSuccess: (response) => {
            onGetSuccess();
            return {
                type: types.standings.standingsSet,
                payload: { newStandings: response.api.standings[0], leagueId },
            };
        },
        onFailure,
    });
};

export const getTeams = (leagueId, onGetSuccess = () => {}, onFailure = () => {}) => {
    return apiAction({
        url: `https://api-football-v1.p.rapidapi.com/v2/teams/league/${leagueId}`,
        method: "GET",
        type: types.teams.teamsGet,
        headers,
        onSuccess: (response) => {
            onGetSuccess();
            return {
                type: types.teams.teamsSet,
                payload: { newTeams: response.api.teams, leagueId },
            };
        },
        onFailure,
    });
};

export const addTeamCoords = (teamId, position) => {
    return {
        type: types.teams.addCoords,
        payload: { teamId, position },
    };
};

const apiAction = ({ type, payload = {}, url, method, data, headers = {}, onSuccess, onFailure }) => {
    return {
        type,
        payload,
        metadata: {
            api: {
                url,
                method,
                data,
                headers,
                onSuccess,
                onFailure,
            },
        },
    };
};

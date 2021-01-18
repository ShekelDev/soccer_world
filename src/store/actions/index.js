import { RAPID_API_KEY, RAPID_API_HOST } from "constant";
import { types } from "store/types";

const headers = {
    "x-rapidapi-key": RAPID_API_KEY,
    "x-rapidapi-host": RAPID_API_HOST,
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

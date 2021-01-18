import { types } from "store/types";
import { headers } from "store/actions";

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

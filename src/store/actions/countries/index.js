import { types } from "store/types";
import { headers } from "store/actions";

export const getCountries = (onGetSuccess = () => {}, onFailure = () => {}) => {
    return apiAction({
        url: `https://api-football-v1.p.rapidapi.com/v2/countries`,
        method: "GET",
        type: types.countries.countriesGet,
        headers,
        onSuccess: (response) => {
            onGetSuccess();
            return {
                type: types.countries.countriesSet,
                payload: response.api.countries[0],
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

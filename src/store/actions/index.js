import { RAPID_API_KEY, RAPID_API_HOST } from "constant";

export * from "store/actions/countries";
export const headers = {
    "x-rapidapi-key": RAPID_API_KEY,
    "x-rapidapi-host": RAPID_API_HOST,
    useQueryString: true,
};

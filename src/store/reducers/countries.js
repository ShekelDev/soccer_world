import { types } from "store/types";

const countries = (state = [], action) => {
    switch (action.type) {
        case types.countries.countriesSet:
            return [...action.payload];
        default:
            return state;
    }
};

export default countries;

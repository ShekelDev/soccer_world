import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createSelector } from "reselect";
import { getCountries } from "store/actions";
import { countryCoords } from "constant";

const useCountries = () => {
    const dispatch = useDispatch();
    const countries = useSelector(selectCountries);

    useEffect(() => {
        dispatch(getCountries());
    }, []);

    return countries;
};

const getCountriesState = (state) => state.countries;

const getCountriesWithCoords = (countries) => {
    return countries.map((country) => {
        return {
            ...country,
            coords: countryCoords[country.code],
        };
    });
};

const selectCountries = createSelector([getCountriesState], (countries) => getCountriesWithCoords(countries));

export default useCountries;

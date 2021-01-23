import { useSelector } from "react-redux";
import { createSelector } from "reselect";

const useLeagues = (country) => {
    const leagues = useSelector((state) => selectLeagues(state, country));

    return { leagues };
};

export default useLeagues;

const getCountry = (_, country) => country;
const getLeaguesState = (state) => state.leagues;

const selectLeagues = createSelector([getLeaguesState, getCountry], (leagues, country) =>
    Object.values(leagues)?.filter((league) => league.country.toLowerCase() === country.toLowerCase())
);

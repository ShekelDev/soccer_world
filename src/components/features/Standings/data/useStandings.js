import { useSelector } from "react-redux";
import { createSelector } from "reselect";

const useStandings = (leagueId) => {
    const standings = useSelector((state) => selectStandings(state, leagueId));
    const leagueName = useSelector((state) => selectLeagueName(state, leagueId));

    return { standings, leagueName };
};

const getLeagueId = (_, leagueId) => leagueId;
const getStandingsState = (state) => state.standings;

const selectStandings = createSelector([getStandingsState, getLeagueId], (standings, leagueId) =>
    Object.values(standings)
        ?.filter((standing) => standing.leagueId == leagueId)
        .sort((a, b) => (a.rank > b.rank ? 1 : -1))
);

const getLeaguesState = (state) => state.leagues;
const selectLeagueName = createSelector(
    [getLeaguesState, getLeagueId],
    (leagues, leagueId) => Object.values(leagues)?.find((league) => league.league_id == leagueId)?.name
);

export default useStandings;

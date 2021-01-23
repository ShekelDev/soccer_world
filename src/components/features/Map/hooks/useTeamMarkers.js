import { useSelector } from "react-redux";
import { createSelector } from "reselect";

const useTeamMarkers = () => {
    const teamMarkers = useSelector(selectTeams);

    return { teamMarkers };
};

const getTeamsState = (state) => state.teams;
const selectTeams = createSelector([getTeamsState], (teams) => Object.values(teams).filter((team) => team.position));

export default useTeamMarkers;

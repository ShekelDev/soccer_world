import React, { useEffect } from "react";
import { createSelector } from "reselect";
import { getTeams, addTeamCoords } from "store/actions";
import { useDispatch, useSelector } from "react-redux";
import { getGeocode } from "use-places-autocomplete";
import Standing from "./Standing";
import { BaseStandings, Header, StandingsList } from "./style";

const Standings = (props) => {
    const dispatch = useDispatch();
    const { leagueId } = props.match.params;
    const teams = useSelector((state) => state.teams);
    const standings = useSelector((state) => selectStandings(state, leagueId));

    useEffect(() => {
        dispatch(getTeams(leagueId));
    }, [leagueId]);

    const handleTeamClick = async (teamId) => {
        const geolocation = await getGeocode({ address: `${teams[teamId].venue_name}` });
        const lat = geolocation[0].geometry.location.lat();
        const lng = geolocation[0].geometry.location.lng();
        dispatch(addTeamCoords(teamId, { lat, lng }));
    };

    return (
        <BaseStandings>
            <Header>League Standings</Header>
            <StandingsList>
                {standings.map((standing) => (
                    <Standing key={standing.rank} {...standing} onClick={handleTeamClick} />
                ))}
            </StandingsList>
        </BaseStandings>
    );
};

export default Standings;

const getLeagueId = (_, leagueId) => leagueId;
const getStandingsState = (state) => state.standings;

const selectStandings = createSelector([getStandingsState, getLeagueId], (standings, leagueId) =>
    Object.values(standings)
        ?.filter((standing) => standing.leagueId == leagueId)
        .sort((a, b) => (a.rank > b.rank ? 1 : -1))
);

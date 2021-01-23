import React, { useEffect } from "react";
import { useHistory } from "react-router";
import { createSelector } from "reselect";
import { getTeams, addTeamCoords } from "store/actions";
import { useDispatch, useSelector } from "react-redux";
import { getGeocode } from "use-places-autocomplete";
import Text from "components/common/Text";
import List from "components/common/List";
import UnitCard from "components/common/UnitCard";
import BackButton from "components/common/BackButton";
import { BaseStandings, Header } from "./style";

const Standings = (props) => {
    const history = useHistory();
    const dispatch = useDispatch();
    const { leagueId } = props.match.params;
    const teams = useSelector((state) => state.teams);
    const leagueName = useSelector((state) => selectLeagueName(state, leagueId));
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

    const handleBackClick = () => {
        history.goBack();
    };

    return (
        <BaseStandings>
            <Header>
                <Text size="42px" isBold>
                    {leagueName}
                </Text>
                <BackButton onClick={handleBackClick} />
            </Header>
            <List height="calc(100vh - 260px)">
                {standings.map((standing, index) => (
                    <UnitCard
                        key={standing.rank}
                        index={index}
                        primaryValue={standing.teamName}
                        description={standing.description}
                        onClick={handleTeamClick}
                    />
                ))}
            </List>
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

const getLeaguesState = (state) => state.leagues;
const selectLeagueName = createSelector(
    [getLeaguesState, getLeagueId],
    (leagues, leagueId) => Object.values(leagues)?.find((league) => league.league_id == leagueId)?.name
);

import React from "react";
import { URL } from "constant";
import { useHistory } from "react-router";
import { createSelector } from "reselect";
import { getStandings } from "store/actions";
import { useDispatch, useSelector } from "react-redux";
import List from "components/common/List";
import UnitCard from "components/common/UnitCard";
import { BaseLeagues } from "./style";

const Leagues = (props) => {
    const history = useHistory();
    const dispatch = useDispatch();
    const { country } = props.match.params;
    const leagues = useSelector((state) => selectLeagues(state, country));

    const handleLeagueClick = (leagueId) => {
        dispatch(getStandings(leagueId));
        history.push(`/${URL.standings}/${leagueId}`);
    };

    return (
        <BaseLeagues>
            <List height={"calc(100vh - 160px)"}>
                {leagues.map((league, index) => (
                    <UnitCard
                        key={league.league_id}
                        primaryValue={league.name}
                        index={index}
                        description={`Ends on ${league.season_end}`}
                        onClick={() => handleLeagueClick(league.league_id)}
                    />
                ))}
            </List>
        </BaseLeagues>
    );
};

export default Leagues;

const getCountry = (_, country) => country;
const getLeaguesState = (state) => state.leagues;

const selectLeagues = createSelector([getLeaguesState, getCountry], (leagues, country) =>
    Object.values(leagues)?.filter((league) => league.country.toLowerCase() === country.toLowerCase())
);

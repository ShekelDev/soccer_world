import React from "react";
import { createSelector } from "reselect";
import { useSelector } from "react-redux";
import { BaseLeagues, Header, LeagueList, League } from "./style";

const Leagues = (props) => {
    const { country } = props.match.params;
    const leagues = useSelector((state) => selectLeagues(state, country));

    return (
        <BaseLeagues>
            <Header>{country} Leagues</Header>
            <LeagueList>
                {leagues.map((league) => (
                    <League key={league.league_id}>{league.name}</League>
                ))}
            </LeagueList>
        </BaseLeagues>
    );
};

export default Leagues;

const getCountry = (_, country) => country;
const getLeaguesState = (state) => state.leagues;

const selectLeagues = createSelector([getLeaguesState, getCountry], (leagues, country) =>
    Object.values(leagues)?.filter((league) => league.country.toLowerCase() === country.toLowerCase())
);

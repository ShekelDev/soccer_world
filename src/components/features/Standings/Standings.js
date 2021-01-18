import React from "react";
import { URL } from "constant";
import { useHistory } from "react-router";
import { createSelector } from "reselect";
import { getStandings } from "store/actions";
import { useDispatch, useSelector } from "react-redux";
import Standing from "./Standing";
import { BaseStandings, Header, StandingsList } from "./style";

const Standings = (props) => {
    const history = useHistory();
    const dispatch = useDispatch();
    const { leagueId } = props.match.params;
    const standings = useSelector((state) => selectStandings(state, leagueId));

    console.log(standings);

    return (
        <BaseStandings>
            <Header>League Standings</Header>
            <StandingsList>
                {standings.map((team) => (
                    <Standing key={team.rank} {...team} />
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

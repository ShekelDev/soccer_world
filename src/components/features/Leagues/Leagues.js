import React from "react";
import { URL } from "constant";
import { useHistory } from "react-router";
import { getStandings } from "store/actions";
import { useDispatch } from "react-redux";
import { useLeagues } from "./hooks";
import List from "components/common/List";
import UnitCard from "components/common/UnitCard";
import { BaseLeagues } from "./style";

const Leagues = (props) => {
    const history = useHistory();
    const dispatch = useDispatch();
    const { country } = props.match.params;
    const { leagues } = useLeagues(country);

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
                        index={index}
                        primaryValue={league.name}
                        secondaryValue={`Ends on ${league.season_end}`}
                        onClick={() => handleLeagueClick(league.league_id)}
                    />
                ))}
            </List>
        </BaseLeagues>
    );
};

export default Leagues;

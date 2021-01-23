import React, { useState, useEffect } from "react";
import { useHistory } from "react-router";
import { getTeams, addTeamCoords } from "store/actions";
import { useDispatch } from "react-redux";
import { useTeams, useStandings } from "./hooks";
import { getGeocode } from "use-places-autocomplete";
import Team from "./Team";
import Text from "components/common/Text";
import List from "components/common/List";
import UnitCard from "components/common/UnitCard";
import BackButton from "components/common/BackButton";
import { BaseStandings, Header } from "./style";

const Standings = (props) => {
    const history = useHistory();
    const dispatch = useDispatch();
    const { leagueId } = props.match.params;
    const { teams } = useTeams();
    const { leagueName, standings } = useStandings(leagueId);
    const [openTeam, setOpenTeam] = useState();

    useEffect(() => {
        dispatch(getTeams(leagueId));
    }, [leagueId]);

    const handleTeamClick = async (teamId) => {
        setOpenTeam(teamId !== openTeam && teamId);
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
                {standings.map((standing) => (
                    <UnitCard
                        key={standing.team_id}
                        id={standing.team_id}
                        logo={standing.logo}
                        primaryValue={standing.teamName}
                        secondaryValue={standing.description}
                        isOpen={openTeam === standing.team_id}
                        onClick={handleTeamClick}
                    >
                        <Team {...standing.all} />
                    </UnitCard>
                ))}
            </List>
        </BaseStandings>
    );
};

export default Standings;

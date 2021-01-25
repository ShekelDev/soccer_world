import React from "react";
import Text from "components/common/Text";
import { BaseTeamStats } from "./style";

const TeamStats = (props) => {
    return (
        <BaseTeamStats>
            <Text size="18px" fontWeight={600}>
                Win:{props.win}
            </Text>
            <Text size="18px" fontWeight={600}>
                Lose:{props.lose}
            </Text>
            <Text size="18px" fontWeight={600}>
                Draw:{props.draw}
            </Text>
            <Text size="18px" fontWeight={600}>
                GA:{props.goalsAgainst}
            </Text>
            <Text size="18px" fontWeight={600}>
                GF:{props.goalsFor}
            </Text>
            <Text size="18px" fontWeight={600}>
                MP:{props.matchsPlayed}
            </Text>
        </BaseTeamStats>
    );
};

export default TeamStats;

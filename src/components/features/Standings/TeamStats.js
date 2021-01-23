import React from "react";
import Text from "components/common/Text";
import { BaseTeamStats } from "./style";

const TeamStats = (props) => {
    return (
        <BaseTeamStats>
            <Text size="18px" isBold>
                Win:{props.win}
            </Text>
            <Text size="18px" isBold>
                Lose:{props.lose}
            </Text>
            <Text size="18px" isBold>
                Draw:{props.draw}
            </Text>
            <Text size="18px" isBold>
                GA:{props.goalsAgainst}
            </Text>
            <Text size="18px" isBold>
                GF:{props.goalsFor}
            </Text>
            <Text size="18px" isBold>
                MP:{props.matchsPlayed}
            </Text>
        </BaseTeamStats>
    );
};

export default TeamStats;

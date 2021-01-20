import React from "react";
import Text from "components/common/Text";
import Initials from "components/common/Initials";
import { BaseLeague, Name } from "./style";

const League = (props) => {
    return (
        <BaseLeague onClick={props.onClick}>
            <Initials value={props.name} index={props.index} />
            <Name>
                <Text size="36px" isBold>
                    {props.name}
                </Text>
                <Text size="22px" color="lightgray">
                    Ends on {props.season_end}
                </Text>
            </Name>
        </BaseLeague>
    );
};

export default React.memo(League);

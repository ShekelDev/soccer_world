import React from "react";
import Text from "components/common/Text";
import { BaseLeague, Placeholder, Name } from "./style";

const League = (props) => {
    return (
        <BaseLeague onClick={props.onClick}>
            <Placeholder />
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

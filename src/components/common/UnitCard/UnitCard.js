import React from "react";
import Text from "components/common/Text";
import Initials from "components/common/Initials";
import { BaseUnitCard, Info } from "./style";

const UnitCard = (props) => {
    return (
        <BaseUnitCard onClick={props.onClick}>
            <Initials value={props.primaryValue} index={props.index} />
            <Info>
                <Text size="36px" isBold>
                    {props.primaryValue}
                </Text>
                <Text size="22px" color="lightgray">
                    {props.description}
                </Text>
            </Info>
        </BaseUnitCard>
    );
};

export default UnitCard;

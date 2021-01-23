import React from "react";
import Text from "components/common/Text";
import Initials from "components/common/Initials";
import { BaseUnitCard, Info } from "./style";

const UnitCard = (props) => {
    const handleClick = () => {
        props.onClick(props.id);
    };

    return (
        <BaseUnitCard onClick={handleClick}>
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

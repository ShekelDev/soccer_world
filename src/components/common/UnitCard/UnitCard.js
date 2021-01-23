import React from "react";
import Text from "components/common/Text";
import Logo from "components/common/Logo";
import Initials from "components/common/Initials";
import { BaseUnitCard, Info } from "./style";

const UnitCard = (props) => {
    const handleClick = () => {
        props.onClick(props.id);
    };

    return (
        <BaseUnitCard onClick={handleClick}>
            {props.logo ? <Logo url={props.logo} /> : <Initials value={props.primaryValue} />}
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

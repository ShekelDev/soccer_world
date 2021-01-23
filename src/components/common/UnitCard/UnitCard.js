import React from "react";
import Text from "components/common/Text";
import Logo from "components/common/Logo";
import Initials from "components/common/Initials";
import { BaseUnitCard, Main, Info, Secondary } from "./style";

const UnitCard = (props) => {
    const handleClick = () => {
        props.onClick(props.id);
    };

    return (
        <BaseUnitCard>
            <Main onClick={handleClick} isOpen={props.isOpen}>
                {props.logo ? <Logo url={props.logo} /> : <Initials value={props.primaryValue} />}
                <Info>
                    <Text size="36px" isBold>
                        {props.primaryValue}
                    </Text>
                    <Text size="22px" color="lightgray">
                        {props.secondaryValue}
                    </Text>
                </Info>
            </Main>
            {props.isOpen && <Secondary>{props.children}</Secondary>}
        </BaseUnitCard>
    );
};

export default UnitCard;

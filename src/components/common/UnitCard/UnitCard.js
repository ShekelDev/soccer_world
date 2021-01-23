import React from "react";
import Text from "components/common/Text";
import Logo from "components/common/Logo";
import Initials from "components/common/Initials";
import arrowDark from "assets/icons/arrowDark.png";
import { BaseUnitCard, Main, TeamSummary, Info, Secondary, Handle, HandleWrapper } from "./style";

const UnitCard = (props) => {
    const handleClick = () => {
        props.onClick(props.id);
    };

    return (
        <BaseUnitCard>
            <Main onClick={handleClick} isOpen={props.isOpen}>
                <TeamSummary>
                    {props.logo ? <Logo url={props.logo} /> : <Initials value={props.primaryValue} />}
                    <Info>
                        <Text size="36px" isBold>
                            {props.primaryValue}
                        </Text>
                        <Text size="22px" color="lightgray">
                            {props.secondaryValue}
                        </Text>
                    </Info>
                </TeamSummary>
                {props.children && (
                    <HandleWrapper>
                        <Handle isOpen={props.isOpen} src={arrowDark} />
                    </HandleWrapper>
                )}
            </Main>
            {props.isOpen && <Secondary>{props.children}</Secondary>}
        </BaseUnitCard>
    );
};

export default UnitCard;

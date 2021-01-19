import React from "react";
import { BaseStanding, LogoWrapper, TeamLogo, TeamDetails } from "./style";

const Standing = (props) => {
    const handleClick = () => {
        props.onClick(props.team_id);
    };

    return (
        <BaseStanding onClick={handleClick}>
            <LogoWrapper>
                <TeamLogo src={props.logo} alt="" />
            </LogoWrapper>
            <TeamDetails>{props.teamName}</TeamDetails>
        </BaseStanding>
    );
};

export default React.memo(Standing);

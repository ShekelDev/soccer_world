import React from "react";
import arrow from "assets/icons/arrow.png";
import { BaseBackButton, IconWrapper, BackIcon } from "./style";

const BackButton = (props) => {
    return (
        <BaseBackButton onClick={props.onClick}>
            <IconWrapper>
                <BackIcon src={arrow} />
            </IconWrapper>
        </BaseBackButton>
    );
};

export default BackButton;

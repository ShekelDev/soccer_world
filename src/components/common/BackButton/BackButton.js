import React from "react";
import { IoChevronBack } from "react-icons/io5";
import { BaseBackButton, IconWrapper } from "./style";

const BackButton = (props) => {
    return (
        <BaseBackButton onClick={props.onClick}>
            <IconWrapper>
                <IoChevronBack />
            </IconWrapper>
        </BaseBackButton>
    );
};

export default BackButton;

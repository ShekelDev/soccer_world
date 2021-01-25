import React from "react";
import { BaseText } from "./style";

const Text = (props) => {
    return (
        <BaseText size={props.size} color={props.color} fontWeight={props.fontWeight} letterSpacing={props.letterSpacing}>
            {props.children}
        </BaseText>
    );
};

export default Text;

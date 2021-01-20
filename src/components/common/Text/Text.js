import React from "react";
import { BaseText } from "./style";

const Text = (props) => {
    return (
        <BaseText size={props.size} color={props.color} isBold={props.isBold}>
            {props.children}
        </BaseText>
    );
};

export default Text;

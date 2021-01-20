import React from "react";
import Text from "components/common/Text";
import { BaseButton } from "./style";

const Button = (props) => {
    return (
        <BaseButton onClick={props.onClick}>
            <Text size="40px" color="#c7ccd4" isBold>
                {props.value}
            </Text>
        </BaseButton>
    );
};

export default Button;

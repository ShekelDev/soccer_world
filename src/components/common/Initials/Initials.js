import React from "react";
import { toInitials } from "global/helpers";
import Text from "components/common/Text";
import { BaseInitials } from "./style";

const Initials = (props) => {
    return (
        <BaseInitials bgColor={BACKGROUND_COLORS[props.index]}>
            <Text size="38px" isBold color="white">
                {toInitials(props.value)}
            </Text>
        </BaseInitials>
    );
};

const BACKGROUND_COLORS = {
    0: "#D7838B",
    1: "#88B1E9",
};

export default Initials;

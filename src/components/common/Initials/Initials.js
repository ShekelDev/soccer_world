import React from "react";
import { getInitials } from "global/helpers";
import Text from "components/common/Text";
import { BaseInitials } from "./style";

const Initials = (props) => {
    const initials = getInitials(props.value);

    const getColorKey = () => {
        const [firstLetter, secondLetter] = initials.split("");
        const colorKey = (firstLetter.charCodeAt(0) + secondLetter.charCodeAt(0)) % 5;
        return BACKGROUND_COLORS[colorKey];
    };

    return (
        <BaseInitials bgColor={getColorKey()}>
            <Text size="38px" isBold color="white">
                {initials}
            </Text>
        </BaseInitials>
    );
};

const BACKGROUND_COLORS = {
    0: "#D7838B",
    1: "#88B1E9",
    2: "#42D6AD",
    3: "#C9B2E0",
    4: "#E2AD47",
};

export default React.memo(Initials);

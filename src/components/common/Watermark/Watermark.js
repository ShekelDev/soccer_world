import React from "react";
import { useLocation } from "react-router-dom";
import Text from "components/common/Text";
import { BaseWatermark } from "./style";

const Watermark = (props) => {
    const location = useLocation();

    return (
        location.pathname !== "/" && (
            <BaseWatermark>
                <Text size="28px" color="#B2BAC5" fontWeight={700} letterSpacing={"2px"}>
                    {props.label}
                </Text>
            </BaseWatermark>
        )
    );
};

export default Watermark;

import React from "react";
import { useLocation } from "react-router-dom";
import Text from "components/common/Text";
import { BaseWatermark } from "./style";

const Watermark = (props) => {
    const location = useLocation();

    return (
        location.pathname !== "/" && (
            <BaseWatermark>
                <Text size="38px" color="#A9AEB6" isBold>
                    {props.label}
                </Text>
            </BaseWatermark>
        )
    );
};

export default Watermark;

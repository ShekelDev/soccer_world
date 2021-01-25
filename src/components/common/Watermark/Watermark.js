import React from "react";
import { useLocation } from "react-router-dom";
import Text from "components/common/Text";
import { BaseWatermark } from "./style";

const Watermark = (props) => {
    const location = useLocation();

    return (
        location.pathname !== "/" && (
            <BaseWatermark>
                <Text size="30px" color="#A9AEB6" fontWeight={700}>
                    {props.label}
                </Text>
            </BaseWatermark>
        )
    );
};

export default Watermark;

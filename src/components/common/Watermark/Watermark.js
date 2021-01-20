import React from "react";
import Text from "components/common/Text";
import { BaseWatermark } from "./style";

const Watermark = (props) => {
    return (
        <BaseWatermark>
            <Text size="38px" color="#A9AEB6" isBold>
                {props.label}
            </Text>
        </BaseWatermark>
    );
};

export default Watermark;

import React from "react";
import { BaseList } from "./style";

const List = (props) => {
    return <BaseList height={props.height}>{props.children}</BaseList>;
};

export default React.memo(List);

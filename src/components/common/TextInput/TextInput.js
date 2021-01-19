import React from "react";
import { BaseTextInput } from "./style";

const TextInput = (props) => {
    const handleChange = (e) => {
        props.onChange(e.target.value);
    };

    return <BaseTextInput placeholder={props.placeholder} value={props.value} onChange={handleChange} size={props.size} padding={props.padding} />;
};

export default React.memo(TextInput);

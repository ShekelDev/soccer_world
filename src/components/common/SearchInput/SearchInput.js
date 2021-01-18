import React from "react";
import { TextField } from "@material-ui/core";
import { BaseSearchInput } from "./style";

const SearchInput = (props) => {
    const handleChange = (e) => {
        props.onChange(e.target.value);
    };

    return (
        <BaseSearchInput>
            <TextField value={props.value} onChange={handleChange} type="search" label="Search" variant="outlined" style={{ width: "100%" }} />
        </BaseSearchInput>
    );
};

export default React.memo(SearchInput);

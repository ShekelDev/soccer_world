import React from "react";
import TextInput from "../TextInput";
import magnify from "assets/icons/magnify.png";
import { BaseSearchInput, IconWrapper, SearchIcon } from "./style";

const SearchInput = (props) => {
    const handleChange = (value) => {
        props.onChange(value);
    };

    return (
        <BaseSearchInput>
            <IconWrapper>
                <SearchIcon src={magnify} />
            </IconWrapper>
            <TextInput value={props.value} placeholder="Search" onChange={handleChange} size="23px" padding="10px 26px 12px 55px" />
        </BaseSearchInput>
    );
};

export default React.memo(SearchInput);

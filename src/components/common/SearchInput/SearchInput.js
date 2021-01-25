import React, { useState } from "react";
import TextInput from "../TextInput";
import magnify from "assets/icons/magnify.png";
import { BaseSearchInput, IconWrapper, SearchIcon } from "./style";

const SearchInput = (props) => {
    const [hasValue, setHasValue] = useState(false);

    const handleChange = (value) => {
        setHasValue(value.length > 0);
        props.onChange(value);
    };

    return (
        <BaseSearchInput>
            <IconWrapper>
                <SearchIcon src={magnify} />
            </IconWrapper>
            <TextInput value={props.value} placeholder="Search" onChange={handleChange} size="32px" padding="16px 26px 16px 70px" />
        </BaseSearchInput>
    );
};

export default React.memo(SearchInput);

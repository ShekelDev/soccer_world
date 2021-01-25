import styled from "styled-components";

export const BaseSearchInput = styled.div`
    display: flex;
    position: relative;
`;

export const IconWrapper = styled.div`
    display: flex;
    position: absolute;
    align-items: center;
    justify-content: flex-end;
    height: 100%;
    width: 40px;
    z-index: 2;
`;

export const SearchIcon = styled.img`
    height: 22px;
`;

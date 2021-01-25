import styled from "styled-components";

export const BaseSearchInput = styled.div`
    display: flex;
    position: relative;
`;

export const IconWrapper = styled.div`
    display: flex;
    position: absolute;
    top: 2px;
    align-items: center;
    justify-content: flex-end;
    height: 74px;
    width: 55px;
    z-index: 2;
`;

export const SearchIcon = styled.img`
    height: 26px;
`;

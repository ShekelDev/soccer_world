import styled from "styled-components";

export const BaseSearchInput = styled.div`
    display: flex;
    position: relative;
`;

export const IconWrapper = styled.div`
    display: flex;
    position: absolute;
    top: 2px;
    font-size: 34px;
    align-items: center;
    justify-content: flex-end;
    height: 74px;
    width: 55px;
    z-index: 2;
`;

export const SearchIcon = styled.img`
    height: 26px;
    filter: ${({ hasValue }) => hasValue && "invert(10%) sepia(79%) saturate(7068%) hue-rotate(244deg) brightness(56%) contrast(120%)"};
    transition: filter 0.2s ease-in-out;
`;

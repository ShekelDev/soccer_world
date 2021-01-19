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
    color: ${({ hasValue }) => (hasValue ? "navy" : "#bbb5b5")};
    width: 55px;
    z-index: 2;
    transition: color 0.2s ease-in-out;
`;

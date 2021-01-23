import styled from "styled-components";

export const BaseBackButton = styled.div`
    display: flex;
    border: 3px solid #bec5cd;
    border-radius: 13px;
    height: 44px;
    width: 44px;
    cursor: pointer;
    &:hover {
        border-color: darkgray;
    }
`;

export const IconWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 40px;
    color: #c7ccd4;
    width: 100%;
    height: 100%;
`;

export const BackIcon = styled.img`
    transform: rotate(90deg);
    height: 12px;
`;

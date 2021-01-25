import styled from "styled-components";

export const BaseInitials = styled.div`
    display: flex;
    height: 66px;
    width: 66px;
    background: #e2ad47;
    border-radius: 16px;
    justify-content: center;
    align-items: center;
    background: ${({ bgColor }) => bgColor};
`;

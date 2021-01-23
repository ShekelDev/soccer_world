import styled from "styled-components";

export const BaseInitials = styled.div`
    display: flex;
    height: 75px;
    width: 75px;
    background: #e2ad47;
    border-radius: 25px;
    justify-content: center;
    align-items: center;
    background: ${({ bgColor }) => bgColor};
`;

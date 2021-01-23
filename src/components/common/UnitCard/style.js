import styled from "styled-components";

export const BaseUnitCard = styled.div`
    display: flex;
    flex-direction: column;
`;

export const Main = styled.div`
    display: flex;
    border-radius: 30px;
    padding: 20px 25px;
    box-sizing: border-box;
    background: white;
    cursor: pointer;
    gap: 35px;
    direction: ltr;
    ${({ isOpen }) => isOpen && "border-bottom-left-radius: 0px"};
    ${({ isOpen }) => isOpen && "border-bottom-right-radius: 0px"};
`;

export const Info = styled.div`
    display: flex;
    flex-direction: column;
`;

export const Secondary = styled.div`
    background: white;
    direction: ltr;
    border-bottom-left-radius: 30px;
    border-bottom-right-radius: 30px;
`;

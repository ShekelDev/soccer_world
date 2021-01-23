import styled from "styled-components";

export const BaseUnitCard = styled.div`
    display: flex;
    flex-direction: column;
`;

export const Main = styled.div`
    display: flex;
    border-radius: 30px;
    padding: 22px 25px;
    box-sizing: border-box;
    background: white;
    cursor: pointer;
    direction: ltr;
    justify-content: space-between;
    ${({ isOpen }) => isOpen && "border-bottom-left-radius: 0px"};
    ${({ isOpen }) => isOpen && "border-bottom-right-radius: 0px"};
`;

export const Info = styled.div`
    display: flex;
    flex-direction: column;
    max-width: 260px;
`;

export const Secondary = styled.div`
    background: white;
    direction: ltr;
    border-bottom-left-radius: 30px;
    border-bottom-right-radius: 30px;
`;

export const TeamSummary = styled.div`
    display: flex;
    gap: 18px;
`;

export const HandleWrapper = styled.div`
    display: flex;
    align-items: center;
    padding-inline-end: 25px;
`;

export const Handle = styled.img`
    transform: rotate(${({ isOpen }) => (isOpen ? "180deg" : 0)});
    transition: transform 0.15s ease-in-out;
`;

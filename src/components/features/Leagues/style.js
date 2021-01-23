import styled from "styled-components";

export const BaseLeagues = styled.div`
    display: flex;
    flex-direction: column;
    width: 100vw;
    padding-inline-start: 10px;
    padding-inline-end: 20px;
`;

export const BaseLeague = styled.div`
    display: flex;
    border-radius: 30px;
    padding: 20px 25px;
    box-sizing: border-box;
    background: white;
    cursor: pointer;
    gap: 35px;
    direction: ltr;
`;

export const Header = styled.div`
    display: flex;
    padding-inline-start: 55px;
    padding-inline-end: 15px;
    align-items: center;
    height: 120px;
    text-transform: capitalize;
`;

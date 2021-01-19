import styled from "styled-components";

export const BaseLeagues = styled.div`
    display: flex;
    flex-direction: column;
    width: 100vw;
`;

export const Header = styled.div`
    display: flex;
    font-size: 60px;
    text-transform: capitalize;
`;

export const LeagueList = styled.div`
    display: flex;
    flex-direction: column;
    overflow: auto;
    gap: 5px;
`;

export const League = styled.div`
    display: flex;
    font-size: 22px;
    border: 2px solid darkgray;
    border-radius: 7px;
    padding: 10px 7px;
    box-sizing: border-box;
    cursor: pointer;
    transition: all 0.1s ease-in-out;
    &:hover {
        border-color: black;
    }
`;

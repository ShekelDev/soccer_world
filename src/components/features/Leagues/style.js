import styled from "styled-components";

export const BaseLeagues = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100vw;
    padding: 25px;
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
    gap: 20px;
`;

export const BaseLeague = styled.div`
    display: flex;
    border-radius: 30px;
    padding: 20px 25px;
    box-sizing: border-box;
    background: white;
    cursor: pointer;
    gap: 35px;
`;

export const Placeholder = styled.div`
    height: 75px;
    width: 75px;
    background: #e2ad47;
    border-radius: 25px;
`;

export const Name = styled.div`
    display: flex;
    flex-direction: column;
`;

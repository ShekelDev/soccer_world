import styled from "styled-components";

export const BaseStandings = styled.div`
    display: flex;
    flex-direction: column;
    width: 100vw;
`;

export const Header = styled.div`
    display: flex;
    font-size: 60px;
    text-transform: capitalize;
`;

export const StandingsList = styled.div`
    display: flex;
    flex-direction: column;
    overflow: auto;
    padding: 0px 10px;
    gap: 5px;
`;

export const BaseStanding = styled.div`
    display: flex;
    border: 2px solid darkgray;
    border-radius: 7px;
    box-sizing: border-box;
    padding: 10px 7px;
    justify-content: flex-start;
    align-items: center;
    width: 100%;
    cursor: pointer;
`;

export const LogoWrapper = styled.div`
    min-width: 40%;
    margin-inline-start: 20px;
`;

export const TeamDetails = styled.div`
    display: flex;
    flex-direction: column;
    font-size: 40px;
`;

export const TeamLogo = styled.img``;

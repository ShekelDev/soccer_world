import styled from "styled-components";

export const BaseStandings = styled.div`
    display: flex;
    flex-direction: column;
    width: 100vw;
    padding-inline-start: 10px;
    padding-inline-end: 20px;
`;

export const Header = styled.div`
    display: flex;
    font-size: 60px;
    padding-inline-start: 55px;
    padding-inline-end: 15px;
    align-items: center;
    justify-content: space-between;
    height: 120px;
    text-transform: capitalize;
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

export const BaseTeam = styled.div`
    display: grid;
    width: 100%;
    justify-content: center;
    grid-template-columns: 100px 100px 100px;
    grid-template-rows: 40px 40px;
    padding: 5px 0px 18px;
`;

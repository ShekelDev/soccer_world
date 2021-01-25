import styled from "styled-components";

export const BaseTextInput = styled.input`
    background: white;
    color: #484848;
    padding: ${({ padding }) => padding || "16px 26px"};
    border-radius: 50px;
    border: none;
    font-size: ${({ size }) => size || "16px"};
    font-weight: 500;
    outline: none;
    width: 100%;
    box-sizing: border-box;
    ::placeholder {
        color: darkgray;
    }
`;

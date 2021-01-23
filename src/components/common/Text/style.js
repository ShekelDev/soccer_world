import styled from "styled-components";

export const BaseText = styled.div`
    font-size: ${({ size }) => size || "14px"};
    font-weight: ${({ isBold }) => (isBold ? 700 : 400)};
    color: ${({ color }) => color || "292929"};
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
`;

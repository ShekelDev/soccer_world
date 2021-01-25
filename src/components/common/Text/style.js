import styled from "styled-components";

export const BaseText = styled.div`
    font-size: ${({ size }) => size || "14px"};
    font-weight: ${({ fontWeight }) => fontWeight || 400};
    letter-spacing: ${({ letterSpacing }) => letterSpacing};
    color: ${({ color }) => color || "#2B2A2A"};
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    line-height: 1.38;
`;

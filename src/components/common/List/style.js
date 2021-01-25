import styled from "styled-components";

export const BaseList = styled.div`
    display: flex;
    flex-direction: column;
    gap: 26px;
    padding: 0px 15px;
    direction: rtl;
    overflow: auto;
    height: ${({ height }) => height || "100%"};
`;

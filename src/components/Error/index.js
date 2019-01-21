import { light, danger } from "../constants";
import styled from "styled-components";
import React from "react";

const ErrorStyled = styled.div`
    color: ${light};
    background-color: ${danger};
    position: absolute;
    padding: 3px 5px;
    bottom: -2px;
    font-size: 13px;
`;

const ErrorWrapper = styled.div`
    position: relative;
`;
export default ({ error }) => (
    <ErrorWrapper>
        {error ? <ErrorStyled>{error.message}</ErrorStyled> : null}
    </ErrorWrapper>
);

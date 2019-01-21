import React from "react";
import { func } from "prop-types";
import styled from "styled-components";

const preventDefaultEvent = cb => {
    return e => {
        e.preventDefault();
        cb();
    };
};

function Form({ className, onSubmit, children }) {
    return (
        <form className={className} onSubmit={preventDefaultEvent(onSubmit)}>
            {children}
        </form>
    );
}

Form.propTypes = {
    onSubmit: func
};

export default styled(Form)`
    display: flex;
    justify-content: center;
    align-items: stretch;
    & > :first-child {
        flex: 1;
        margin-right: 5px;
    }
    @media (max-width: 480px) {
        display: block;
        & > * {
            width: 100%;
            margin-bottom: 10px;
        }
    }
`;

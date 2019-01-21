import React from "react";
import styled from "styled-components";
import { func, string } from "prop-types";
import { dark } from "../constants";
import { lighten } from "polished";

const Button = ({ disabled, className, value, onClick, children }) => {
    return (
        <button
            disabled={disabled}
            type="submit"
            className={className}
            value={value}
            onClick={onClick}
        >
            {children}
        </button>
    );
};

Button.propTypes = {
    value: string,
    onClick: func
};

export default styled(Button)`
    border: none;
    color: #fff;
    background-color: ${dark};
    border-radius: 3px;
    &:disabled {
        background-color: ${lighten(0.3, dark)};
    }
    ${props =>
        props.theme === "hollow" &&
        `background-color: white;
            color: ${dark};;
            border: 1px solid ${dark}`}
    ${props =>
        props.size === "sm"
            ? `height: 20px;
        padding: 0 4px;
        font-size: 12px;`
            : `height: 50px;
        padding: 0 24px;
        font-size: 16px;`}
`;

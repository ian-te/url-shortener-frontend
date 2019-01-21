import React from "react";
import { func, string } from "prop-types";
import styled from "styled-components";
import { danger, light, dark, darkLighter } from "../constants";

const getValueFromEvent = cb => e => cb(e.target.value);

const Input = React.forwardRef((props, ref) => {
    const { className, value, onChange } = props;
    return (
        <input
            {...props}
            ref={ref}
            formNoValidate={true}
            className={className}
            value={value}
            onChange={getValueFromEvent(onChange)}
        />
    );
});

Input.propTypes = {
    value: string,
    onChange: func
};

export default styled(Input)`
    border: 2px solid ${dark};
    height: 50px;
    font-size: 14px;
    color: ;
    padding: 0 20px;
    box-sizing: border-box;
    border-radius: 3px;
    outline: 0;
    ${props =>
        props.error &&
        `
        border-color: ${danger}
    `}
    &:disabled {
        border-color: ${darkLighter};
    }
    &:focus {
        background-color: ${light};
    }
`;

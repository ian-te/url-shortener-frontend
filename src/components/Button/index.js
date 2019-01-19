import React from "react";
import { func, string } from "prop-types";

const Input = ({ value, onChange, children }) => {
    return (
        <button type="submit" value={value} onClick={onChange}>
            {children}
        </button>
    );
};

Input.propTypes = {
    value: string,
    onChange: func
};

import React from "react";
import { func, string } from "prop-types";

const Button = ({ value, onChange, children }) => {
    return (
        <button type="submit" value={value} onClick={onChange}>
            {children}
        </button>
    );
};

Button.propTypes = {
    value: string,
    onClick: func
};

export default Button;

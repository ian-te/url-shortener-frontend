import React from "react";
import { func, string } from "prop-types";

const Input = ({ value, onChange }) => {
    return <input type="text" value={value} onChange={onChange} />;
};

Input.propTypes = {
    value: string,
    onChange: func
};

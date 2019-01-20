import React from "react";
import { func } from "prop-types";

function Form({ onSubmit, children }) {
    return <form onSubmit={onSubmit}>{children}</form>;
}

Form.propTypes = {
    onSubmit: func
};

export default Form;

import styled from "styled-components";
import React from "react";
import Button from "../Button";
import { link } from "../constants";

class ShortLink extends React.Component {
    copyToClipboard(text) {
        const textField = document.createElement("textarea");
        textField.innerText = text;
        document.body.appendChild(textField);
        textField.select();
        document.execCommand("copy");
        textField.remove();
    }
    render = () => {
        const { href, className } = this.props;
        return (
            <div className={className}>
                <a href={href}>{href}</a>
                <Button
                    onClick={() => this.copyToClipboard(href)}
                    size="sm"
                    theme="hollow"
                >
                    Copy
                </Button>
            </div>
        );
    };
}

export default styled(ShortLink)`
    display: flex;
    justify-content: space-between;
    margin-top: 10px;
    a {
        color: ${link};
    }
`;

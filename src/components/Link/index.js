import React from "react";
import { string } from "prop-types";
import styled from "styled-components";
import ShortLink from "../ShortLink";
import { dark, darkLighter } from "../constants";

const Heading = styled.h4`
    color: ${dark};
    font-size: 18px;
    font-weight: normal;
    margin: 0 0 7px;
`;

const InitialLink = styled.a`
    display: block;
    text-overflow: ellipsis;
    overflow: hidden;
    color: ${darkLighter};
    text-decoration: none;
`;

const Link = ({ className, title, url, shortUrl }) => (
    <div className={className}>
        <Heading>{title}</Heading>
        <InitialLink target="_blank" noref nofollower href={url}>
            {url}
        </InitialLink>
        <ShortLink href={shortUrl} />
    </div>
);

Link.propTypes = {
    title: string.isRequired,
    url: string.isRequired
};

export default styled(Link)`
    margin: 10px 0;
    padding: 10px 0;
    text-align: left;
    &:not(:last-child) {
        border-bottom: 1px solid #ccc;
    }
`;

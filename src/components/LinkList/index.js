import React from "react";
import Link from "../Link";
import styled from "styled-components";
import { dark } from "../constants";

function LinkList({ links, className }) {
    return (
        links.length > 0 && (
            <div className={className}>
                {links.map((item, key) => (
                    <Link key={item.id || key} {...item} />
                ))}
            </div>
        )
    );
}

LinkList.propTypes = {};

export default styled(LinkList)`
    max-width: 500px;
    margin: 20px auto;
    border: 1px solid ${dark};
    padding: 0 20px;
`;

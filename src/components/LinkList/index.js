import React from "react";
import Link from "../Link";
import { arrayOf } from "prop-types";

function LinkList({ items }) {
    return items.map((item, key) => (
        <div key={item.id || key}>
            <Link {...item} />
        </div>
    ));
}

LinkList.propTypes = {};

export default LinkList;

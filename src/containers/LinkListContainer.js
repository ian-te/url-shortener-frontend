import { connect } from "react-redux";
import React from "react";
import LinkList from "../components/LinkList";

const LinkListContainer = ({ links }) => <LinkList links={links} />;

const mapStateToProps = state => ({
    links: state.generatedLinks.reverse()
});

export default connect(mapStateToProps)(LinkListContainer);

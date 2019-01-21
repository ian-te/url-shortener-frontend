import React from "react";
import FormContainer from "../../containers/FormContainer";
import LinkListContainer from "../../containers/LinkListContainer";
import ErrorContainer from "../../containers/ErrorContainer";
import ShortenerWrapper from "../../components/ShortenerWrapper";

const Main = () => (
    <ShortenerWrapper>
        <ErrorContainer />
        <FormContainer />
        <LinkListContainer />
    </ShortenerWrapper>
);

export default Main;

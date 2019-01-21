import { connect } from "react-redux";
import { urlInputUpdate, generateUrl } from "../actions";
import Input from "../components/Input";
import Button from "../components/Button";
import Form from "../components/Form";

import React from "react";

class FormContainer extends React.Component {
    constructor(props) {
        super(props);
        this.input = React.createRef();
    }
    componentDidUpdate(prevProps) {
        const input = this.input.current;
        if (prevProps.loading && !this.props.loading && !this.props.error) {
            input.focus();
            input.setSelectionRange(0, this.props.inputValue.length);
        }
    }
    render() {
        const {
            loading,
            inputValue,
            urlInputUpdate,
            generateUrl,
            error
        } = this.props;
        return (
            <Form disabled={loading} onSubmit={() => generateUrl(inputValue)}>
                <Input
                    ref={this.input}
                    disabled={loading}
                    onChange={urlInputUpdate}
                    value={inputValue}
                    error={error ? error : undefined}
                    placeholder={"Your URL here"}
                />
                <Button disabled={loading}>Shorten URL</Button>
            </Form>
        );
    }
}

const mapStateToProps = state => ({
    inputValue: state.inputValue,
    loading: state.urlLoading,
    error: state.error
});

const mapDispatchToProps = {
    urlInputUpdate,
    generateUrl
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(FormContainer);

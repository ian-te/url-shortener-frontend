import Error from "../components/Error";
import { connect } from "react-redux";

const mapStateToProps = state => ({
    error: state.error
});

export default connect(mapStateToProps)(Error);

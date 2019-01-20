import { createStore } from "redux";
import formReducer from "./reducers/formReducer";

const configureStore = () => {
    const store = createStore(
        formReducer,
        window.__REDUX_DEVTOOLS_EXTENSION__ &&
            window.__REDUX_DEVTOOLS_EXTENSION__()
    );

    return store;
};

export default configureStore;

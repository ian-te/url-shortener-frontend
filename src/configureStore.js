import { createStore, applyMiddleware, compose } from "redux";
import formReducer from "./reducers/formReducer";
import thunk from "redux-thunk";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const configureStore = () => {
    const store = createStore(
        formReducer,
        composeEnhancers(applyMiddleware(thunk))
    );

    return store;
};

export default configureStore;

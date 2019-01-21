import {
    URL_INPUT_UPDATE,
    GENERATE_URL,
    URL_GENERATED,
    URL_GENERATED_ERROR
} from "../actions";

const initialState = {
    inputValue: "",
    urlLoading: false,
    generatedLinks: [],
    isValid: false,
    error: false
};

export default (state = initialState, action) => {
    switch (action.type) {
        case URL_INPUT_UPDATE:
            return {
                ...state,
                inputValue: action.payload
            };
        case GENERATE_URL: {
            return {
                ...state,
                urlLoading: true,
                error: false
            };
        }
        case URL_GENERATED:
            return {
                ...state,
                generatedLinks: [...state.generatedLinks, action.payload],
                inputValue: action.payload.shortUrl || "",
                urlLoading: false,
                error: false
            };
        case URL_GENERATED_ERROR:
            return {
                ...state,
                urlLoading: false,
                error: action.payload
            };
        default:
            return state;
    }
};

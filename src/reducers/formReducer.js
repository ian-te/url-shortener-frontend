import {
    URL_INPUT_UPDATE,
    GENERATE_URL,
    URL_GENERATED,
    URL_GENERATED_ERROR
} from "../actions";

const initialState = {
    inputValue: "",
    urlLoading: false,
    generatedLinks: [
        {
            id: 1,
            shortUrl: "https://sh.rt/scFAe8",
            url: "https://www.wrike.com/workspace.htm",
            title: "Wrike"
        }
    ]
};

export default (state = initialState, action) => {
    switch (action.type) {
        case URL_INPUT_UPDATE:
            return {
                ...state,
                inputValue: action.payload
            };
        case GENERATE_URL:
            return {
                ...state,
                urlLoading: true
            };
        case URL_GENERATED:
            return {
                ...state,
                generatedLinks: [...state.generatedLinks, action.payload],
                urlLoading: false
            };
        case URL_GENERATED_ERROR:
            return {
                ...state,
                error: action.payload
            };
        default:
            return state;
    }
};

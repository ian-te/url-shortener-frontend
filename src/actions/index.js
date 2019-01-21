import { shortenUrl } from "../api";
import { validateUrl } from "../utils/validateUrl";
export const URL_INPUT_UPDATE = "URL_INPUT_UPDATE";
export const GENERATE_URL = "GENERATE_URL";
export const URL_GENERATED = "URL_GENERATED";
export const URL_GENERATED_ERROR = "URL_GENERATED_ERROR";

export const urlInputUpdate = payload => ({
    type: URL_INPUT_UPDATE,
    payload
});

export const generateUrl = url => dispatch => {
    const urlValidationResult = validateUrl(url);
    if (urlValidationResult.message) {
        return dispatch(urlGeneratedError(urlValidationResult));
    }
    dispatch({ type: GENERATE_URL });
    return shortenUrl(url)
        .then(result => dispatch(urlGenerated(result.data)))
        .catch(result => dispatch(urlGeneratedError(result)));
};

export const urlGeneratedError = payload => ({
    type: URL_GENERATED_ERROR,
    payload
});

export const urlGenerated = payload => ({
    type: URL_GENERATED,
    payload
});

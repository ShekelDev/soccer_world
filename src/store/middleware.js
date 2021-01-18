import axios from "axios";

export const middleware = ({ dispatch }) => (next) => (action) => {
    action.metadata?.api && apiRequest(action, dispatch);
    next(action);
};

const apiRequest = async (action, dispatch) => {
    const { url, method, data, headers, onSuccess, onFailure } = action.metadata.api;
    try {
        const response = await axios({ url, method, headers: { "Content-type": "application/json", ...headers }, data });
        const actionData = onSuccess(response.data);
        dispatch({ ...actionData });
    } catch (exception) {
        console.log(exception.message);
        onFailure();
    }
};

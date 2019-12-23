import {CHANGE_SEARCHFIELD, REQUEST_ROBOTS_FAILED, REQUEST_ROBOTS_PENDING, REQUEST_ROBOTS_SUCCESS} from "./constants";
import {apiCall} from "./api/api";

type Action = {
    type: string;
    payload: string;
}

export const setSearchField = (text: string) => {
    return {
        type: CHANGE_SEARCHFIELD,
        payload: text
    }
};


export const requestRobots = () => (dispatch: any) => {
    dispatch({type: REQUEST_ROBOTS_PENDING});
    apiCall("https://jsonplaceholder.typicode.com/users")
        .then(users => dispatch({type: REQUEST_ROBOTS_SUCCESS, payload: users}))
        .catch(err => dispatch({type: REQUEST_ROBOTS_FAILED, payload: err}))
};
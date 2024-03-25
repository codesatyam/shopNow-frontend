// reducer.ts

import * as ActionTypes from '../actionTypes';

interface UserState {
    loading: boolean;
    user: any; // Define your user interface here
    error: string | null;
}

const initialState: UserState = {
    loading: false,
    user: null,
    error: null
};

const userReducer = (state = initialState, action: any): UserState => {
    switch (action.type) {
        case ActionTypes.LOGIN_REQUEST:
        case ActionTypes.LOGOUT_REQUEST:
        case ActionTypes.SIGNUP_REQUEST:
            return {
                ...state,
                loading: true,
                error: null
            };
        case ActionTypes.LOGIN_SUCCESS:
        case ActionTypes.SIGNUP_SUCCESS:
            return {
                ...state,
                loading: false,
                user: action.payload,
                error: null
            };
        case ActionTypes.LOGOUT_SUCCESS:
            return {
                ...state,
                loading: false,
                user: null,
                error: null
            };
        case ActionTypes.LOGIN_FAILURE:
        case ActionTypes.LOGOUT_FAILURE:
        case ActionTypes.SIGNUP_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload
            };
        default:
            return state;
    }
};

export default userReducer;

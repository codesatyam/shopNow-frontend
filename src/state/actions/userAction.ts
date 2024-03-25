// actions.ts

import * as ActionTypes from '../actionTypes'
import { login, logout, signup } from '../../services/user';

export const loginUser = (email: string, password: string) => async (dispatch: any) => {
    dispatch({ type: ActionTypes.LOGIN_REQUEST });

    try {
        const user = await login(email, password);
        dispatch({ type: ActionTypes.LOGIN_SUCCESS, payload: user });
    } catch (error) {
        dispatch({ type: ActionTypes.LOGIN_FAILURE, payload: error});
    }
};

export const logoutUser = () => async (dispatch: any) => {
    dispatch({ type: ActionTypes.LOGOUT_REQUEST });

    try {
        await logout();
        dispatch({ type: ActionTypes.LOGOUT_SUCCESS });
    } catch (error) {
        dispatch({ type: ActionTypes.LOGOUT_FAILURE, payload: error });
    }
};

export const signupUser = (name: string, email: string, password: string) => async (dispatch: any) => {
    dispatch({ type: ActionTypes.SIGNUP_REQUEST });

    try {
        const user = await signup(name, email, password);
        dispatch({ type: ActionTypes.SIGNUP_SUCCESS, payload: user });
    } catch (error) {
        dispatch({ type: ActionTypes.SIGNUP_FAILURE, payload: error});
    }
};

import axios from '~/utils/httpRequest';
import {
    loginFailed,
    loginStart,
    loginSuccess,
    logoutFailed,
    logoutStart,
    logoutSuccess,
    registerFailed,
    registerStart,
    registerSuccess,
} from '../slices/authSlice';
import config from '~/config';

export const registerUser = async (user, dispatch, navigate) => {
    dispatch(registerStart());
    try {
        await axios.post(`/auth/register`, user);
        dispatch(registerSuccess());
        navigate(config.routes.login);
    } catch (err) {
        dispatch(registerFailed());
    }
};

export const loginUser = async (user, dispatch, navigate) => {
    dispatch(loginStart());
    try {
        const res = await axios.post(`/auth/login`, user, { withCredentials: true });
        dispatch(loginSuccess(res.data));
        navigate(config.routes.homeAdmin);
    } catch (err) {
        dispatch(loginFailed(err.response.data));
    }
};

export const logoutUser = async (dispatch, navigate, accessToken, axiosJWT) => {
    dispatch(logoutStart());
    try {
        await axiosJWT.post('/auth/logout', '', {
            headers: { token: `bearer ${accessToken}` },
        });
        dispatch(logoutSuccess());
        navigate(config.routes.login);
    } catch (err) {
        dispatch(logoutFailed(err.response.data));
    }
};

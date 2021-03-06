import { ACTION_TYPES } from './constants';
import { Token } from '../../models/Token';

export const fetchToken = (code: string) => ({
  type: ACTION_TYPES.FETCH_TOKEN,
  payload: code,
});

export const setToken = (token: Token) => ({
  type: ACTION_TYPES.SET_TOKEN,
  payload: token,
});

export const signOut = () => ({
  type: ACTION_TYPES.SIGN_OUT
});

export const clearToken = () => ({
  type: ACTION_TYPES.CLEAR_TOKEN
});


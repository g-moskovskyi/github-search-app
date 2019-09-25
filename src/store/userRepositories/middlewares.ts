import { Action } from '../types';
import { ACTION_TYPES } from './constants';
import { UserRepository } from '../../models/UserRepositories';
import { setUserRepositories } from './actions';
import { getAccessToken } from '../auth/selectors';
import { ApiRequest } from '../../apis/ApiRequest';
import { subscribe } from '../../utils/redux';

const fetchUserRepositories = async (action: Action<undefined>, next: any, dispatch: any, getState: any) => {
	try {
		const state = getState();
		console.log('state', state);
		const accessToken = getAccessToken(state);
		console.log('accessToken', accessToken)
		const url = `/user/repos`;
		const response = await ApiRequest.get<Array<UserRepository>>(url, { token: accessToken });
		dispatch(setUserRepositories(response));
	} catch (e) {
		throw e;
	}
	next(action);
};

const fetchMiddleware = ({ dispatch, getState }: any) => (next: (action: Action<any>) => void) => subscribe(
	ACTION_TYPES.FETCH_REPOSITORIES,
	fetchUserRepositories
)(next, dispatch, getState);


export const userRepoMiddlewares = [fetchMiddleware];

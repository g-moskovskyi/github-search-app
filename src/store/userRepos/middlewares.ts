import { Action } from '../types';
import { ACTION_TYPES } from './constants';
import { Repository } from '../../models/Repository';
import { setUserRepos } from './actions';
import { getAccessToken } from '../auth/selectors';
import { ApiRequest } from '../../apis/ApiRequest';
import { subscribe } from '../../utils/redux';

const fetchUserRepos = async (action: Action<undefined>, next: any, dispatch: any, getState: any) => {
	try {
		const state = getState();
		const accessToken = getAccessToken(state);
		const url = `/user/repos`;
		const response = await ApiRequest.get<Array<Repository>>(url, { token: accessToken });
		dispatch(setUserRepos(response));
	} catch (e) {
		throw e;
	}
	next(action);
};

const fetchMiddleware = ({ dispatch, getState }: any) => (next: (action: Action<any>) => void) => subscribe(
	ACTION_TYPES.FETCH_REPOS,
	fetchUserRepos
)(next, dispatch, getState);


export const userRepoMiddlewares = [fetchMiddleware];

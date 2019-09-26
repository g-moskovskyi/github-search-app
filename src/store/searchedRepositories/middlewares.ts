import { Action } from '../types';
import { ACTION_TYPES } from './constants';
import { setSearchedRepositories } from './actions';
import { getAccessToken } from '../auth/selectors';
import { ApiRequest } from '../../apis/ApiRequest';
import { subscribe } from '../../utils/redux';
import { SearchedRepository } from '../../models/SearchedRepository';

const fetchSearchedRepositories = async (action: Action<undefined>, next: any, dispatch: any, getState: any) => {
	try {
		const state = getState();
		console.log('state', state);
		const accessToken = getAccessToken(state);
		console.log('accessToken', accessToken)
		const url = `/search/repositories`;
		const response = await ApiRequest.get<Array<SearchedRepository>>(url, { token: accessToken });
		dispatch(setSearchedRepositories(response));
	} catch (e) {
		throw e;
	}
	next(action);
};

const fetchMiddleware = ({ dispatch, getState }: any) => (next: (action: Action<any>) => void) => subscribe(
	ACTION_TYPES.FETCH_REPOSITORIES,
	fetchSearchedRepositories
)(next, dispatch, getState);


export const searchedRepoMiddlewares = [fetchMiddleware];

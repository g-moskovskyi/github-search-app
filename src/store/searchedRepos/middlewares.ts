import { Action } from '../types';
import { ACTION_TYPES } from './constants';
import { setSearchedRepos } from './actions';
import { getAccessToken } from '../auth/selectors';
import { ApiRequest } from '../../apis/ApiRequest';
import { subscribe } from '../../utils/redux';
import { SearchedRepo } from '../../models/SearchedRepo';

const fetchSearchedRepos = async (action: Action<undefined>, next: any, dispatch: any, getState: any) => {
	try {
		const state = getState();
		const accessToken = getAccessToken(state);
		const url = `/search/repositories`;
		const response = await ApiRequest.get<Array<SearchedRepo>>(url, { token: accessToken });
		dispatch(setSearchedRepos(response));
	} catch (e) {
		throw e;
	}
	next(action);
};

const fetchMiddleware = ({ dispatch, getState }: any) => (next: (action: Action<any>) => void) => subscribe(
	ACTION_TYPES.FETCH_REPOS,
	fetchSearchedRepos
)(next, dispatch, getState);


export const searchedRepoMiddlewares = [fetchMiddleware];

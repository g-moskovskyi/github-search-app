import { Action } from '../types';
import { ACTION_TYPES } from './constants';
import { setSearchResult } from './actions';
import { getAccessToken } from '../auth/selectors';
import { ApiRequest } from '../../apis/ApiRequest';
import { subscribe } from '../../utils/redux';
import { SearchedRepos } from '../../models/SearchedRepos';
import { getSearchParams } from '../searchParams/selectors';
import { SearchParams } from '../../models/SearchParams';

const fetchSearchResult = async (action: Action<undefined>, next: any, dispatch: any, getState: any) => {
	try {
		const state = getState();
		const accessToken = getAccessToken(state);
		const { params }: any = getSearchParams(state);
		const url = `/search/repositories?q=${params.q}`;
		const response = await ApiRequest.get<SearchedRepos>(url, { token: accessToken });
		dispatch(setSearchResult(response));
	} catch (e) {
		throw e;
	}
	next(action);
};


const fetchMiddleware = ({ dispatch, getState }: any) => (next: (action: Action<any>) => void) => subscribe(
	ACTION_TYPES.FETCH_RESULT,
	fetchSearchResult,
)(next, dispatch, getState);


export const searchResultMiddlewares = [fetchMiddleware];

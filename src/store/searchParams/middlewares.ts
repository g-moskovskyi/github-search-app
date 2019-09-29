import { Store } from 'redux';
import { Action } from '../types';
import { ACTION_TYPES } from './constants';
import { setSearchParams, clearSearchParams } from './actions';
import { push } from 'connected-react-router';
import { PATHES } from '../../components/App/App.pathes';
import { SearchParams } from '../../models/SearchParams';


const startSearchMiddleware = ({ dispatch }: Store) => (next: (action: Action<any>) => void) => (action: Action<any>) => {
	if (action.type === ACTION_TYPES.START_SEARCH) {
		const params: SearchParams = action.payload;
		console.log('params', params);
		dispatch(push(PATHES.SEARCH_RESULT));
		dispatch(setSearchParams(params));
	}
	next(action);
};

export const searchParamsMiddlewares = [startSearchMiddleware];

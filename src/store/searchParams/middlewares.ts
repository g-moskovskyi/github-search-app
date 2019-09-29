import { Store } from 'redux';
import { Action } from '../types';
import { ACTION_TYPES } from './constants';
import { setSearchParams, clearSearchParams } from './actions';
import { push } from 'connected-react-router';
import { PATHES } from '../../components/App/App.pathes';
import { SearchParams } from '../../models/SearchParams';


const setParamsMiddleware = ({ dispatch }: Store) => (next: (action: Action<any>) => void) => (action: Action<any>) => {
	if (action.type === ACTION_TYPES.SET_PARAMS) {
		const params: SearchParams = action.payload;
		console.log('params', params)
		dispatch(setSearchParams(params));
	}
	next(action);
};

const clearParamsMiddleware = ({ dispatch }: Store) => (next: (action: Action<any>) => void) => (action: Action<any>) => {
	if (action.type === ACTION_TYPES.CLEAR_PARAMS) {
		dispatch(push(PATHES.HOME));
		dispatch(clearSearchParams());
	}
	next(action);
};


export const searchParamsMiddlewares = [setParamsMiddleware, clearParamsMiddleware];

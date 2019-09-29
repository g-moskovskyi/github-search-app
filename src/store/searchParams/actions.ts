import { ACTION_TYPES } from './constants';
import { SearchParams } from '../../models/SearchParams';

export const setSearchParams = (params: SearchParams | undefined) => ({
  type: ACTION_TYPES.SET_PARAMS,
  payload: params,
});

export const clearSearchParams = () => ({
  type: ACTION_TYPES.CLEAR_PARAMS
});



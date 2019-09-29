import { SearchParams } from '../../models/SearchParams';
import { Action } from '../types';
import { ACTION_TYPES } from './constants';

export interface SearchParamsState {
  params: SearchParams | undefined;
}

export const INITIAL_STATE = {
  params: undefined,
};

export default (state: SearchParamsState = INITIAL_STATE, action: Action<SearchParams>) => {
  switch (action.type) {
    case ACTION_TYPES.SET_PARAMS:
      return {
        ...state,
        params: action.payload
      };
    case ACTION_TYPES.CLEAR_PARAMS:
      return {
        ...INITIAL_STATE
      };
    default:
      return state;
  }
};

import { Action } from '../types';
import { ACTION_TYPES } from './constants';
import { SearchedRepos } from '../../models/SearchedRepos';

export interface SearchResultState {
  searchedRepos: SearchedRepos | undefined;
}

export const INITIAL_STATE = {
  searchedRepos: undefined,
};

export default (state: SearchResultState = INITIAL_STATE, action: Action<SearchedRepos>) => {
  switch (action.type) {
    case ACTION_TYPES.SET_RESULT:
      return {
        ...state,
        searchedRepos: action.payload
      };
    case ACTION_TYPES.CLEAR_RESULT:
      return {
        ...INITIAL_STATE
      };
    default:
      return state;
  }
};

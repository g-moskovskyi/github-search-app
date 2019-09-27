import { Action } from '../types';
import { ACTION_TYPES } from './constants';
import { SearchedRepo } from '../../models/SearchedRepo';

export interface SearchedReposState {
  items: Array<SearchedRepo> | undefined;
}

export const INITIAL_STATE = {
  items: undefined,
};

export default (state: SearchedReposState = INITIAL_STATE, action: Action<Array<SearchedRepo>>) => {
  switch (action.type) {
    case ACTION_TYPES.SET_REPOS:
      return {
        ...state,
        items: action.payload
      };
    case ACTION_TYPES.CLEAR_REPOS:
      return {
        ...INITIAL_STATE
      };
    default:
      return state;
  }
};

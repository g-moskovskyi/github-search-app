import { Action } from '../types';
import { ACTION_TYPES } from './constants';
import { SearchedRepository } from '../../models/SearchedRepository';

export interface SearchedRepositoriesState {
  items: Array<SearchedRepository> | undefined;
}

export const INITIAL_STATE = {
  items: undefined,
};

export default (state: SearchedRepositoriesState = INITIAL_STATE, action: Action<Array<SearchedRepository>>) => {
  switch (action.type) {
    case ACTION_TYPES.SET_REPOSITORIES:
      return {
        ...state,
        items: action.payload
      };
    case ACTION_TYPES.CLEAR_REPOSITORIES:
      return {
        ...INITIAL_STATE
      };
    default:
      return state;
  }
};

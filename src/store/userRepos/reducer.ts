import { Repository } from '../../models/Repository';
import { Action } from '../types';
import { ACTION_TYPES } from './constants';

export interface UserReposState {
  items: Array<Repository> | undefined;
}

export const INITIAL_STATE = {
  items: undefined,
};

export default (state: UserReposState = INITIAL_STATE, action: Action<Array<Repository>>) => {
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

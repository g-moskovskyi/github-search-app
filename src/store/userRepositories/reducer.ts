import { UserRepository } from '../../models/UserRepositories';
import { Action } from '../types';
import { ACTION_TYPES } from './constants';

export interface UserRepositoriesState {
  items: Array<UserRepository> | undefined;
}

export const INITIAL_STATE = {
  items: undefined,
};

export default (state: UserRepositoriesState = INITIAL_STATE, action: Action<Array<UserRepository>>) => {
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

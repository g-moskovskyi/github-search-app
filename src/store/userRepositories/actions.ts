import { ACTION_TYPES } from './constants';
import { UserRepository } from '../../models/UserRepositories';

export const fetchUserRepositories = () => ({
  type: ACTION_TYPES.FETCH_REPOSITORIES,
});

export const setUserRepositories = (items: Array<UserRepository> | undefined) => ({
  type: ACTION_TYPES.SET_REPOSITORIES,
  payload: items,
});



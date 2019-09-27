import { ACTION_TYPES } from './constants';
import { Repository } from '../../models/Repository';

export const fetchUserRepos = () => ({
  type: ACTION_TYPES.FETCH_REPOS,
});

export const setUserRepos = (items: Array<Repository> | undefined) => ({
  type: ACTION_TYPES.SET_REPOS,
  payload: items,
});



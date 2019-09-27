import { ACTION_TYPES } from './constants';
import { SearchedRepo } from '../../models/SearchedRepo';

export const fetchSearchedRepos = () => ({
  type: ACTION_TYPES.FETCH_REPOS,
});

export const setSearchedRepos = (items: Array<SearchedRepo> | undefined) => ({
  type: ACTION_TYPES.SET_REPOS,
  payload: items,
});



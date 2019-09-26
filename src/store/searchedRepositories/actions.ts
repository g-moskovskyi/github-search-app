import { ACTION_TYPES } from './constants';
import { SearchedRepository } from '../../models/SearchedRepository';

export const fetchSearchedRepositories = () => ({
  type: ACTION_TYPES.FETCH_REPOSITORIES,
});

export const setSearchedRepositories = (items: Array<SearchedRepository> | undefined) => ({
  type: ACTION_TYPES.SET_REPOSITORIES,
  payload: items,
});



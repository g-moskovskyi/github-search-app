import { ACTION_TYPES } from './constants';
import { SearchedRepos } from '../../models/SearchedRepos';

export const fetchSearchResult = () => ({
  type: ACTION_TYPES.FETCH_RESULT
});

export const setSearchResult = (searchResult: SearchedRepos | undefined) => ({
  type: ACTION_TYPES.SET_RESULT,
  payload: searchResult,
});



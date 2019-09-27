import { AppState } from '../index';
import { SearchedRepo } from '../../models/SearchedRepo';

// @ts-ignore
export const getSearchedRepos = (state: AppState): Array<SearchedRepo> => state.searchedRepos;
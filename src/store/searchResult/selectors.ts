import { AppState } from '../index';
import { SearchedRepos } from '../../models/SearchedRepos';

// @ts-ignore
export const getSearchResult = (state: AppState): SearchedRepos[] => state.searchResult;
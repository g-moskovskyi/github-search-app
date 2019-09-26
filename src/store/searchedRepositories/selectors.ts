import { AppState } from '../index';
import { SearchedRepository } from '../../models/SearchedRepository';

// @ts-ignore
export const getSearchedRepositories = (state: AppState): Array<SearchedRepository> => state.searchedRepositories;
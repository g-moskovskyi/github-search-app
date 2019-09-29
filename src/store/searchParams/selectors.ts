import { AppState } from '../index';
import { SearchParams } from '../../models/SearchParams';

// @ts-ignore
export const getSearchParams = (state: AppState): SearchParams => state.searchParams;
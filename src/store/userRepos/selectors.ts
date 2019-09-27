import { AppState } from '../index';
import { Repository } from '../../models/Repository';

// @ts-ignore
export const getUserRepos = (state: AppState): Array<Repository> => state.userRepos;
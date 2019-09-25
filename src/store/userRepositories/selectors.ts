import { AppState } from '../index';
import { UserRepository } from '../../models/UserRepositories';

// @ts-ignore
export const getUserRepositories = (state: AppState): Array<UserRepository> => state.userRepositories;
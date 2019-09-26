import { UserRepository } from '../../models/UserRepository';

export interface HomeProps {
}

export interface StateProps {
	userRepositories: Array<UserRepository>;
}

export interface DispatchProps {
	onFetchUserRepositories: () => void
}
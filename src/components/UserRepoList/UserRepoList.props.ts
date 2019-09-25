import { UserRepository } from '../../models/UserRepositories';

export interface HomeProps {
}

export interface StateProps {
	userRepositories: Array<UserRepository>;
}

export interface DispatchProps {
	onFetchUserRepositories: () => void
}
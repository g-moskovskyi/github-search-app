import { Repository } from '../../models/Repository';

export interface HomeProps {
}

export interface StateProps {
	userRepos: Array<Repository>;
}

export interface DispatchProps {
	onFetchUserRepos: () => void
}
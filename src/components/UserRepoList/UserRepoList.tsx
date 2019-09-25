import React from 'react';
import { AppState } from '../../store';
import { StateProps, DispatchProps } from './UserRepoList.props';
import { getUserRepositories } from '../../store/userRepositories/selectors';
import { connect } from 'react-redux';
import { ThunkDispatch } from 'redux-thunk';
import { fetchUserRepositories } from '../../store/userRepositories';


class UserRepoList extends React.PureComponent<StateProps & DispatchProps> {
    public componentDidMount(): void {
        this.props.onFetchUserRepositories();
    }
    render() {
        const items = this.props.userRepositories
        console.log('items', items);
        return null
    }
}

const mapStateToProps = (state: AppState): StateProps => {
    return {
        userRepositories: getUserRepositories(state)
    };
};

const mapDispatchToProps = (dispatch: ThunkDispatch<any, any, any>) => ({
    onFetchUserRepositories: () => dispatch(fetchUserRepositories()),
});

const ConnectedComponent = connect(mapStateToProps, mapDispatchToProps)(UserRepoList);

export { ConnectedComponent as UserRepoList };

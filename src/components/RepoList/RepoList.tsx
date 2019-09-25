import React from 'react';
import { RouteComponentProps } from 'react-router';
import { AppState } from '../../store';
import { connect } from 'react-redux';


class RepoList extends React.PureComponent<RouteComponentProps>{
    public render() {
        return (
            <div >
                <h2>RepoList</h2>
                <h3>Token:</h3>
            </div>
        )
    }
}

const mapStateToProps = (state: AppState) => {
    if (state.auth.token)
        return {
            access_token: state.auth.token.access_token,
            token_type: state.auth.token.token_type,
            scope: state.auth.token.scope
        };
};
const ConnectedRepoList = connect(mapStateToProps)(RepoList);
export { ConnectedRepoList as RepoList };
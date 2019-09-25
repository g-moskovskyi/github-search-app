import React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { Page } from '../Page';
import { getIsSignedIn } from '../../store/auth/selectors';
import { AppState } from '../../store';
import { connect } from 'react-redux';
import { UserRepoList } from '../UserRepoList';

interface StateProps {
    isSignedIn: boolean;
}

class Home extends React.PureComponent<StateProps & RouteComponentProps>{

    public render() {
        if (this.props.isSignedIn) {
            return (
                <Page title={'HOME'} >
                    <div >
                        <UserRepoList />
                    </div>
                </Page>
            )
        }
        else {
            return (
                <Page title={'HOME'} >
                    <div >
                        <h2>Please sigh in</h2>
                    </div>
                </Page>
            )
        }
    }
}

const mapStateToProps = (state: AppState) => {
    return {
        isSignedIn: getIsSignedIn(state),
        // @ts-ignore
    };
};

const ConnectedProtectedRoute = connect(mapStateToProps)(Home);

export { ConnectedProtectedRoute as Home };

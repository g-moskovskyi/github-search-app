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
        const homepageContent = () => {
            if (this.props.isSignedIn) {
                return (<UserRepoList />)
            }
            return (<h2>Please sigh in</h2>)
        }
        return (<Page title={'HOME'} >
            {homepageContent()}
        </Page>)
    }
}
const mapStateToProps = (state: AppState) => {
    return {
        isSignedIn: getIsSignedIn(state),
    };
};

const ConnectedProtectedRoute = connect(mapStateToProps)(Home);

export { ConnectedProtectedRoute as Home };

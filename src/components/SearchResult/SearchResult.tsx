import React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { Page } from '../Page';
import { getIsSignedIn } from '../../store/auth/selectors';
import { AppState } from '../../store';
import { connect } from 'react-redux';
import { SearchResultList } from '../SearchResultList';
import { push } from 'connected-react-router';
import { ThunkDispatch } from 'redux-thunk';
import { PATHES } from '../App/App.pathes';
import { StateProps, DispatchProps } from './SearchResult.props';

class SearchResult extends React.PureComponent<StateProps & DispatchProps & RouteComponentProps>{

    public render() {
        const searchResultContent = () => {
            if (this.props.isSignedIn) {
                return (<SearchResultList />)
            }
            else {
                this.props.onHomeRedirect();
                return (null)
            }

        }
        return (<Page title={'SEARCH RESULT'} >
            {searchResultContent()}
        </Page>)
    }
}
const mapStateToProps = (state: AppState) => {
    return {
        isSignedIn: getIsSignedIn(state),
    };
};

const mapDispatchToProps = (dispatch: ThunkDispatch<any, any, any>) => ({
    onHomeRedirect: () => dispatch(push(PATHES.HOME)),
});

const ConnectedProtectedRoute = connect(mapStateToProps, mapDispatchToProps)(SearchResult);

export { ConnectedProtectedRoute as SearchResult };

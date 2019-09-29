import React from 'react';
import { push } from 'connected-react-router';
import { PATHES } from '../../components/App/App.pathes';

import styles from './Header.styles';
import { WithStyles, withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';
import { Button, Typography } from '@material-ui/core';

import { Action, Dispatch } from 'redux';
import { connect } from 'react-redux';
import { AppState } from '../../store';
import { signOut } from '../../store/auth';
import { SearchParams } from '../../models/SearchParams';
import { setSearchParams, clearSearchParams } from '../../store/searchParams';
import { StateProps, DispatchProps } from './Header.props';



const key = process.env.REACT_APP_CLIENT_ID;
const redirectUri = process.env.REACT_APP_REDIRECT_URI;
const scope = process.env.REACT_APP_SCOPE;


class Header extends React.PureComponent<StateProps & DispatchProps & WithStyles<typeof styles>> {
    public render() {
        const { classes } = this.props;
        return (
            <div className={classes.root} >
                <AppBar position="static">
                    <Toolbar>
                        <Typography className={classes.title} variant="h2" noWrap>
                            <Button
                                variant="contained"
                                color="primary"
                                onClick={this.props.onHomeRedirect}
                            >
                                HOME
                        </Button>
                            <Button
                                variant="contained"
                                color="primary"
                                // onClick={(): void => { this.props.onSetSearchParams({ 'q': 'adaasdsd' }) }}
                                onClick={this.props.onSearchRedirect}
                            >
                                prapa
                        </Button>
                            {this.renderAuthControls()}
                        </Typography>
                        <div className={classes.search}>
                            <div className={classes.searchIcon}>
                                <SearchIcon />
                            </div>
                            <InputBase
                                placeholder="Search…"
                                classes={{
                                    root: classes.inputRoot,
                                    input: classes.inputInput,
                                }}
                                onKeyUp={(e) => {
                                    if (e.keyCode === 13) {
                                        console.log('Input done');
                                        push(PATHES.SEARCH_RESULT);

                                    }
                                }}

                                // onChange={(e) => { this.props.onSetSearchParams({ 'q': e.currentTarget.value }) }}
                                inputProps={{ 'aria-label': 'search' }}
                            />
                        </div>
                    </Toolbar>
                </AppBar>
            </div >
        )
    }

    private renderAuthControls = () => {
        if (this.props.isSignedIn) {
            return <>
                <Button
                    variant="contained"
                    color="primary"
                    onClick={this.props.onSignOut}>
                    Sign Out
                </Button>
            </>;
        } else {
            const AUTH_URL = `https://github.com/login/oauth/authorize?client_id=${key}&redirect_uri=${redirectUri}&scope=${scope}`;
            return <>
                <Button
                    variant="contained"
                    color="primary"
                    href={AUTH_URL}>
                    Sign In
                </Button>
            </>
        }
    };
}



const mapStateToProps: any = (state: AppState): StateProps => {
    return {
        isSignedIn: !!state.auth.token,
    };
};

const mapDispatchToProps = (dispatch: Dispatch<Action<any>>): DispatchProps => {
    return {
        onSignOut: () => dispatch(signOut()),
        onSetSearchParams: (params: SearchParams) => dispatch(setSearchParams(params)),
        onClearSearchParams: () => dispatch(clearSearchParams()),
        onSearchRedirect: () => dispatch(push(PATHES.SEARCH_RESULT)),
        onHomeRedirect: () => dispatch(push(PATHES.HOME))
    };
};

const WrappedSearchAppBar: any = withStyles<any>(styles)(Header);

const ConnectedComponent = connect<StateProps, DispatchProps>(mapStateToProps, mapDispatchToProps)(WrappedSearchAppBar);

export { ConnectedComponent as Header };





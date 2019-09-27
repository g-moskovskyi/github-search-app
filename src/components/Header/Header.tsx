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

interface StateProps {
    isSignedIn: boolean;
}

interface DispatchProps {
    onSignOut: () => void;
}

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
                                onClick={(): void => { push(PATHES.HOME) }}
                            >
                                HOME
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
                                // onSubmit
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

const WrappedSearchAppBar: any = withStyles<any>(styles)(Header);

const mapStateToProps: any = (state: AppState): StateProps => {
    return {
        isSignedIn: !!state.auth.token,

    };
};

const mapDispatchToProps = (dispatch: Dispatch<Action<any>>): DispatchProps => {
    return {
        onSignOut: () => dispatch(signOut()),
    };
};

const ConnectedComponent = connect<StateProps, DispatchProps>(mapStateToProps, mapDispatchToProps)(WrappedSearchAppBar);

export { ConnectedComponent as Header };




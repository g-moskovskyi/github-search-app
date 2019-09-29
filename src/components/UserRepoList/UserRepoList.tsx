import React from 'react';
import { AppState } from '../../store';
import { StateProps, DispatchProps } from './UserRepoList.props';
import { getUserRepos } from '../../store/userRepos/selectors';
import { connect } from 'react-redux';
import { ThunkDispatch } from 'redux-thunk';
import { fetchUserRepos } from '../../store/userRepos';

import { List, ListItem, Divider, ListItemAvatar, Avatar, Grid, ListItemText } from '@material-ui/core';
import { Folder } from '@material-ui/icons/';
import styles from './UserRepoList.styles';
import { WithStyles, withStyles } from '@material-ui/core/styles';

import { Repository } from '../../models/Repository';


class UserRepoList extends React.PureComponent<StateProps & DispatchProps & WithStyles<typeof styles>> {
    public componentDidMount(): void {
        this.props.onFetchUserRepos();
    }

    ListItem() {
        const { classes } = this.props;
        const { items }: any = this.props.userRepos;

        if (!items) return (
            <h2>Loading...</h2>
        );
        return (
            items.map((item: Repository) => (
                <div key={item.id}>
                    <ListItem className={classes.item} button alignItems='center' onClick={() => {
                        window.open(item.html_url, '_blank');
                    }}>
                        <ListItemAvatar  >
                            <Avatar className={classes.yellowAvatar} >
                                <Folder />
                            </Avatar>
                        </ListItemAvatar>
                        <ListItemText primary={item.name} />
                    </ListItem>
                    <Divider variant="inset" component="li" />
                </div>
            )
            )
        )

    }
    public render() {
        return (
            <div>
                <h2>User repositories:</h2>
                <Grid container spacing={1}>
                    <List >
                        <>
                            {this.ListItem()}
                        </>
                    </List>
                </Grid>
            </div>
        )
    }
}

const mapStateToProps = (state: AppState): StateProps => {
    return {
        userRepos: getUserRepos(state)
    };
};

const mapDispatchToProps = (dispatch: ThunkDispatch<any, any, any>) => ({
    onFetchUserRepos: () => dispatch(fetchUserRepos()),
});
const WrappedUserRepoList: any = withStyles<any>(styles)(UserRepoList);
const ConnectedComponent = connect(mapStateToProps, mapDispatchToProps)(WrappedUserRepoList);

export { ConnectedComponent as UserRepoList };

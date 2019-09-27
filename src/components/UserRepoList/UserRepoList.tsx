import React from 'react';
import { AppState } from '../../store';
import { StateProps, DispatchProps } from './UserRepoList.props';
import { getUserRepos } from '../../store/userRepos/selectors';
import { connect } from 'react-redux';
import { ThunkDispatch } from 'redux-thunk';
import { fetchUserRepos } from '../../store/userRepos';

import { List, ListItem, Divider, Link, ListItemAvatar, Avatar, Grid } from '@material-ui/core';
import { Folder } from '@material-ui/icons/';

import { Repository } from '../../models/Repository';


class UserRepoList extends React.PureComponent<StateProps & DispatchProps> {
    public componentDidMount(): void {
        this.props.onFetchUserRepos();
    }

    ListItem() {
        const { items }: any = this.props.userRepos;
        if (!items) return (
            <h2>Loading...</h2>
        );
        return (
            items.map((item: Repository) => (
                <div key={item.id}>
                    <ListItem alignItems="flex-start">
                        <ListItemAvatar>
                            <Avatar >
                                <Folder />
                            </Avatar>
                        </ListItemAvatar>
                        <Link
                            onClick={() => {
                                window.open(item.html_url, '_blank');
                            }}>
                            {item.name}</Link>
                    </ListItem>
                    <Divider variant="inset" component="li" />
                </div>
            )
            )
        )

    }
    public render() {
        return (
            <>
                <h2>User repositories:</h2>
                <Grid container spacing={2}>
                    <List>
                        <>
                            {this.ListItem()}
                        </>
                    </List>
                </Grid>
            </>
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

const ConnectedComponent = connect(mapStateToProps, mapDispatchToProps)(UserRepoList);

export { ConnectedComponent as UserRepoList };

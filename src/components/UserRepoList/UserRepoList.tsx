import React from 'react';
import { AppState } from '../../store';
import { StateProps, DispatchProps } from './UserRepoList.props';
import { getUserRepositories } from '../../store/userRepositories/selectors';
import { connect } from 'react-redux';
import { ThunkDispatch } from 'redux-thunk';
import { fetchUserRepositories } from '../../store/userRepositories';

import { List, ListItem, Divider, Link, ListItemAvatar, Avatar, Grid } from '@material-ui/core';
import { Folder } from '@material-ui/icons/';

import { UserRepository } from '../../models/UserRepository';


class UserRepoList extends React.PureComponent<StateProps & DispatchProps> {
    public componentDidMount(): void {
        this.props.onFetchUserRepositories();
    }

    ListItem() {
        const { items }: any = this.props.userRepositories;
        if (!items) return (
            <h2>Loading...</h2>
        );
        return (
            items.map((item: UserRepository) => (
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
        userRepositories: getUserRepositories(state)
    };
};

const mapDispatchToProps = (dispatch: ThunkDispatch<any, any, any>) => ({
    onFetchUserRepositories: () => dispatch(fetchUserRepositories()),
});

const ConnectedComponent = connect(mapStateToProps, mapDispatchToProps)(UserRepoList);

export { ConnectedComponent as UserRepoList };

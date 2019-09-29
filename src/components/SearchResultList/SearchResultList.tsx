import React from 'react';
import { AppState } from '../../store';
import { StateProps, DispatchProps } from './SearchResultList.props';
import { connect } from 'react-redux';
import { ThunkDispatch } from 'redux-thunk';
import { Repository } from '../../models/Repository';
import { fetchSearchResult } from '../../store/searchResult';

import { List, ListItem, Divider, ListItemAvatar, Grid, Avatar, ListItemText } from '@material-ui/core';
import { Folder } from '@material-ui/icons/';
import styles from './SearchResultList.styles'
import { WithStyles, withStyles } from '@material-ui/core/styles';
import { getSearchResult } from '../../store/searchResult/selectors';



class SearchResultList extends React.PureComponent<StateProps & DispatchProps & WithStyles<typeof styles>> {
    public componentDidMount(): void {
        this.props.onFetchSearchResult();
    }

    ListItem() {
        const { classes } = this.props;
        console.log('classes', classes);
        const result = this.props.searchResult.searchedRepos;
        console.log('result', result);
        if (!result) return (
            <h2>Loading...</h2>
        );
        return (
            result.items.map((item: Repository) => (
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
        console.log('searchResult.total_count', this.props.searchResult.searchedRepos)
        return (
            <>
                <h2>Searched repositories:</h2>
                <Grid container spacing={0}>
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
        searchResult: getSearchResult(state)
    };
};

const mapDispatchToProps = (dispatch: ThunkDispatch<any, any, any>) => ({
    onFetchSearchResult: () => dispatch(fetchSearchResult()),
});

const WrappedSearchResultList: any = withStyles<any>(styles)(SearchResultList);
const ConnectedComponent = connect(mapStateToProps, mapDispatchToProps)(WrappedSearchResultList);

export { ConnectedComponent as SearchResultList };

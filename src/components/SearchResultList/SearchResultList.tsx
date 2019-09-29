import React from 'react';
import { AppState } from '../../store';
import { StateProps, DispatchProps } from './SearchResultList.props';
import { connect } from 'react-redux';
import { ThunkDispatch } from 'redux-thunk';
import { Repository } from '../../models/Repository';
import { fetchSearchResult } from '../../store/searchResult';

import { List, ListItem, Divider, Link, ListItemAvatar, Grid, IconButton } from '@material-ui/core';
import { StarBorder } from '@material-ui/icons/';
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
                    <ListItem button alignItems='center'>
                        <ListItemAvatar >
                            <IconButton className={classes.yellowAvatar} aria-label={`star`} >
                                < StarBorder />
                            </IconButton>
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

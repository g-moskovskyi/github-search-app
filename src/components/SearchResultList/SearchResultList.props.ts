import { SearchedRepos } from '../../models/SearchedRepos';
import { SearchParams } from '../../models/SearchParams';

export interface HomeProps {
}

export interface StateProps {
    searchResult: any;
}

export interface DispatchProps {
    onFetchSearchResult: () => void;
}
import { SearchParams } from "../../models/SearchParams";

export interface StateProps {
    isSignedIn: boolean;
}

export interface DispatchProps {
    onSignOut: () => void;
    onStartSearch: (params: SearchParams) => void;
    onClearSearchParams: () => void;
    onSearchRedirect: () => void;
    onHomeRedirect: () => void;
}
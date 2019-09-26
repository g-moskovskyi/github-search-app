import React from 'react';
import { RouteComponentProps } from 'react-router';
import { Page } from '../Page';

class SearchResult extends React.PureComponent<RouteComponentProps>{
    public render() {
        return (
            <Page title={'ABOUT'}>
                <div >
                    <h2>About</h2>
                </div>
            </Page>
        )
    }
}



export { SearchResult };
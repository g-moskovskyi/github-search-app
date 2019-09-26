import { PATHES } from './App.pathes';
import * as React from 'react';
import { Redirect, RouteComponentProps } from 'react-router-dom';
import { Home } from '../Home';
import { SearchResult } from '../SearchResult';
import { Auth } from '../Auth';




export interface AppRoute {
	isProtected?: boolean;
	path: PATHES;
	render: (params: RouteComponentProps) => any;
}

export default [

	{
		path: PATHES.SEARCH_RESULT,
		render: (props: RouteComponentProps) => <SearchResult {...props} />,
	},
	{
		path: PATHES.AUTH,
		render: (props: RouteComponentProps) => <Auth {...props} />
	},
	{
		path: PATHES.NOT_FOUND,
		render: () => <h2>Not found!</h2>,
	},
	{
		path: PATHES.HOME,
		render: (props: RouteComponentProps) => <Home {...props} />,
		isProtected: true,
	},
	{
		path: PATHES.REDIRECT,
		render: () => <Redirect to={'/404'} />
	},
];
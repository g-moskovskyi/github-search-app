import * as React from 'react';
import Helmet from 'react-helmet';
import { SearchAppBar } from '../SearchAppBar'

interface Props {
	title: string;
	withHeader?: boolean;
}

export const Page: React.FC<Props> = ({ children, title }) => {
	return <>
		<Helmet>
			<title>{title}</title>
		</Helmet>
		<SearchAppBar />
		{}
		{children}
	</>;
};
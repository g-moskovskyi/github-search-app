import React from 'react';
import { Helmet } from 'react-helmet';
import { Header } from '../Header'
import './App.css';

interface Props {
	title: string;
	withHeader?: boolean;
}

export const Page: React.FC<Props> = ({ title, children }) => {
	return (
		<div>
			<Helmet>
				<title>{title}</title>
			</Helmet>
			<Header />
			{}
			{children}
		</div>
	)
};
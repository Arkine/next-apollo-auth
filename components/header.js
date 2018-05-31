import React from 'react';
import Link from 'next/link';

import {
	Container,
	Wrapper
} from '../styles/header';

import withData from '../lib/withData';

export default class Header extends React.Component {

	render() {
		return (
			<Container>
				<Link href="/login">Login</Link>
				<Link href="/signup">Signup</Link>
			</Container>
		);
	}
}
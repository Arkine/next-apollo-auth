import React from 'react';
import Link from 'next/link';

import { Wrapper } from '../styles/header';

export default class Header extends React.Component {

	render() {
		return (
			<Wrapper>
				<Link href="/login">Login</Link>
				<Link href="/signup">Signup</Link>
			</Wrapper>
		);
	}
}
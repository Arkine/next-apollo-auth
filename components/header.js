import React from 'react';
import Link from 'next/link';

export default class Header extends React.Component {

	render() {
		return (
			<header>
				<Link href="/login">Login</Link>
				<Link href="/signup">Signup</Link>
			</header>
		);
	}
}
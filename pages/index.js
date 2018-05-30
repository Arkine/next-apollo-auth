import React from 'react';
import Link from 'next/link';

import withData from '../lib/withData';
import checkLoggedIn from '../lib/checkLoggedIn';

class Index extends React.Component {
	static async getInitialProps(context, apolloClient) {
		const { loggedInUser } = await checkLoggedIn(context, apolloClient);

		return {
			user: loggedInUser.getUser
		}
	}

	render() {
		const { user } = this.props;
		console.log(user);
		if (user) {
			return (
				<div>
					<h1> Hello {user.email}! </h1>
					<div>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
						eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
						ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
						aliquip ex ea commodo consequat. Duis aute irure dolor in
						reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
						pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
						culpa qui officia deserunt mollit anim id est laborum.
						<br />
						<Link href="/profile">
							<a>Go to Profile</a>
						</Link>
					</div>
				</div>
			)
		}

		return (
			<div>
				<h1>Next with Apollo</h1>
				<Link href="/login">
					<a>Login</a>
				</Link>{' '}
				or{' '}
				<Link href="/signup">
					<a>Signup</a>
				</Link>{' '}
				to view hidden resources
			</div>
		);
	}
}

export default withData(Index);

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
		// const { user } = this.props;
		return (
			<div>
				<h1>Home page</h1>
			</div>
		);

	}
}

export default withData(Index);

import React from 'react';
import Router from 'next/router';

import withData from '../lib/withData';
import checkLoggedIn from '../lib/checkLoggedIn';

import SignupForm from '../components/forms/signup';

class Signup extends React.Component {
	static async getInitialProps(context, apolloClient) {
		const { loggedInUser } = await checkLoggedIn(context, apolloClient);

		return {
			user: loggedInUser.getUser
		}
	}

	componentDidMount() {
		const { user } = this.props;
		
		if (user) {
			Router.push('/');
		}
	}

	render() {
		return (
			<div>
				<h1> Create An Account! </h1>
				<SignupForm />
			</div>
		);
	}
}

export default withData(Signup);
import React from 'react';
import Router from 'next/router';

import withData from '../lib/withData';
import checkLoggedIn from '../lib/checkLoggedIn';

import LoginForm from '../components/forms/login';

class Login extends React.Component {

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
				<h1>Login To Continue!</h1>
				<LoginForm />
			</div>
		);
	}
}

export default withData(Login);

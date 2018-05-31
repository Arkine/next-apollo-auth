import React from 'react';
import { graphql } from 'react-apollo';
import Router from 'next/router';

import LOGIN_QUERY from '../queries/login';

class login extends React.Component {
	state = {
		email: null,
		password: null,
		error: null
	}

	static async getInitialProps(context, apolloClient) {
		const { loggedInUser } = await checkLoggedIn(context, apolloClient);
		console.log('initial props...')
		// if (loggedInUser.getUser) {
			Router.push('/');
		// }

		// return {
			// user: loggedInUser.getUser
		// }
	}


	onFormSubmit = e => {
		e.preventDefault();
		let { email, password } = this.state;

		console.log('submitted');

		// Check non null email && password
		if (typeof email === 'string' && typeof password === 'string') {
			// trim fields
			email = email.trim();
			password = password.trim();

			// Check for email && password length
			if (email.length > 0 && password.length > 0) {
				console.log('good')
				this.props
					.loginMutator({
						variables: {
							email,
							password
						}
					})
					.then(() => {
						this.setState({ error: null })
						window.location = '/'
					})
					.catch( ({ graphQLErrors: err }) =>
						this.setState({ error: err[0].message })
					)
			} else {
				this.setState({ error: "Email & Password Field shouldn't be empty" })
			}
		} else {
			this.setState({ error: 'Email & Password Field Required!' })
		}
	}

	render() {
		return [
			<form onSubmit={this.onFormSubmit} key="form">
				<div>
					<span className="error">{this.state.error}</span>
					<label> Email Address </label>
					<input
						type="email"
						onInput={e => this.setState({ email: e.target.value })}
						placeholder="john@doe.com"
					/>
				</div>
				<div>
					<label> Password </label>
					<input
						type="password"
						onInput={e => this.setState({ password: e.target.value })}
						placeholder="******"
					/>
				</div>
				<div>
					<button type="submit"> Log In </button>
				</div>
			
			</form>,
		]
	}
}

export default graphql(LOGIN_QUERY, {
	name: 'loginMutator'
})(login);

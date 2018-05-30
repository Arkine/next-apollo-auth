import React from 'react';
import { graphql } from 'react-apollo';

import SIGNUP_QUERY from '../queries/addUser';

class signup extends React.Component {
	state = {
		email: null,
		name: null,
		password: null,
		error: null
	}

	onFormSubmit = e => {
		e.preventDefault()
		let { email, name, password } = this.state

		// Check non null email && password
		if (typeof email === 'string' && typeof password === 'string') {
			// trim fields
			email = email.trim()
			name = name.trim()
			password = password.trim()

			// Check for email && password length
			if (email.length > 0 && password.length > 0) {
				this.props.signupMutator({
						variables: {
							email,
							name,
							password
						}
					})
					.then(() => {
						this.setState({ error: null })
						window.location = '/login'
					})
					.catch(({ graphQLErrors: err }) =>
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
		return (
			<form onSubmit={this.onFormSubmit}>
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
					<label> Name </label>
					<input
						type="text"
						onInput={e => this.setState({ name: e.target.value })}
						placeholder="John Doe"
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
					<button> Sign up </button>
				</div>
				
			</form>
		)
	}
}

export default graphql(SIGNUP_QUERY, {
	name: 'signupMutator'
})(signup);

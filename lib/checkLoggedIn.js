import gql from 'graphql-tag';

// Handles checking if the user is logged in
export default (context, apolloClient) => {
	return apolloClient
		.query({
			query: gql`
				query {
					getUser {
						email
					}
				}
			`
		})
		.then(({ data }) => {
			console.log('this passed', data)
			return { loggedInUser: data }
		})
		.catch(e => {
			console.log('this failed')
			// Fail gracefully
			return { loggedInUser: {} }
		});
}

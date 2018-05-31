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
			return { loggedInUser: data };
		})
		.catch(e => {
			// Fail gracefully
			return { loggedInUser: {} };
		});
}

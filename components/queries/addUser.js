import gql from 'graphql-tag';

export default gql`
	mutation addUser($email: String!, $name: String, $password: String!) {
		addUser(email: $email, name: $name, password: $password) {
			email
		}
	}
`;
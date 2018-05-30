import {
	GraphQLObjectType
} from "graphql";

import getUser from './resolvers/getUser';

export default new GraphQLObjectType({
	name: 'Query',
	fields: () => ({
		getUser
	})
});
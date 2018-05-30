import {
	GraphQLObjectType
} from "graphql";

import addUser from './mutations/addUser';
import login from './mutations/login';

export default new GraphQLObjectType({
	name: 'Mutation',
	fields: {
		addUser,
		login
	}
})
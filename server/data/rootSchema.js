import {
	GraphQLSchema
} from 'graphql';

import query from './rootQuery';
import mutation from './rootMutation';

import UserType from './types/userType';

export default new GraphQLSchema({
	query,
	mutation,
	types: [
		UserType
	]
})
import mongoose from "mongoose";
import {
	GraphQLString
} from "graphql";

import UserType from "../types/userType";

const User = require('../../models/User');

export default {
	type: UserType,
	description: "add a user",
	args: {
		email: {
			type: GraphQLString
		},
		name: {
			type: GraphQLString
		},
		password: {
			type: GraphQLString
		}
	},

	resolve: (parent, { email, name, password }, { login }) => {
		const user = new User({ email, name });

		return new Promise((resolve, reject) => {
			return User.register(user, password, err => {
				if (err) {
					reject(err)
				} else {
					login(user, () => resolve(user))
				}
			})
		});
	}
}
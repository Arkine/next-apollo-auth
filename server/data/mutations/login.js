import mongoose from "mongoose";
import {
	GraphQLString
} from "graphql";

import UserType from "../types/userType";

const User = require('../../models/User');

export default {
	type: UserType,
	description: "login a user",
	args: {
		email: {
			type: GraphQLString
		},
		password: {
			type: GraphQLString
		}
	},
	resolve: (root, { email, password }, { login }, info) => {
		return new Promise((resolve, reject) => {
			return User.authenticate()(email, password, (err, user) => {
				// user returns false if username / email incorrect
				if (user) {
					login(user, () => resolve(user))
				} else {
					reject('Email / Password Incorrect')
				}
			});
		});
	}
}
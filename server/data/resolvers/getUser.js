import mongoose from "mongoose";
import {
	GraphQLID
} from "graphql";

import UserType from '../types/userType';

export default {
	type: UserType,
	description: "return a single user",
	resolve: (root, args, req) => {
		console.log('getting user', req);
		return new Promise((resolve, reject) => {
			if (req.user) {
				return resolve(req.user)
			}

			return reject('Not Authenticated!')
		})
	}
}
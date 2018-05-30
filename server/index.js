import express from 'express';
import session from 'express-session';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import passport from 'passport';
import expressValidator from 'express-validator';
import next from 'next';
import router from './routes';
import schema from './data/rootSchema';

const { graphqlExpress, graphiqlExpress } = require('apollo-server-express');

// Point to our environment variables folder
require('dotenv').config({
	path: '.env'
});

const MongoStore = require('connect-mongo')(session);

require('./services/passport');

mongoose.connect(process.env.MONGODB_URI);

const port = process.env.PORT || 3000;

const dev = process.env.NODE_ENV !== 'production';

const app = next({
	dev
});

// Next handles all of the request logic
const handle = app.getRequestHandler();

app.prepare().then(() => {
	const server = express();

	// Exposes a bunch of methods for validating data. Used heavily on userController.validateRegister
	server.use(expressValidator());

	// populates req.cookies with any cookies that came along with the request
	server.use(cookieParser());

	// Sessions allow us to store data on visitors from request to request
	// This keeps users logged in
	server.use(
		session({
			secret: process.env.APP_SECRET,
			key: 'token',
			resave: false,
			saveUninitialized: false,
			store: new MongoStore({
				mongooseConnection: mongoose.connection
			})
		})
	);

	// Passport JS is what we use to handle our logins
	server.use(passport.initialize());
	server.use(passport.session());

	// Add bodyparser on all requests
	server.use(bodyParser.json());

	server.use(
		'/graphql',
		graphqlExpress((req, res) => {
			let context = {
				login: req.login.bind(req),
				user: req.user
			}

			return {
				schema,
				context
			}
		})
	);

	server.use(
		'/graphiql',
		graphiqlExpress({
			endpointURL: '/graphql'
		})
	);

	router(server, passport);

	server.get('*', (req, res) => {
		return handle(req, res);
	});

	// Start express server
	server.listen(port, () => {

		console.log('> GraphQL Server Listening on Port', port);
	});
})

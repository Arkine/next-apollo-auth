import React from 'react';

import Header from '../components/header';
import Footer from '../components/footer';

import '../styles/global';

// Adds the header and footer to all pages
export default children => (
	<div>
		<Header />
			<main>
				{ children }
			</main>
		<Footer />
	</div>
);
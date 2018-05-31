import { injectGlobal } from "styled-components";
import normalize from 'styled-normalize';
import reset from 'styled-reset';

import variables from './variables';

export default injectGlobal`
	${reset}
	${normalize}
	html {
		font-size: 20px;
	}
	body {
		line-height: 1.6;
	}
	main {
		width: 100%;
		max-width: ${variables.rowWidth};
		margin: 0 auto;
	}

	form {
		input {
		}
	}
`;
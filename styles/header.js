import styled from 'styled-components';
import variables from './variables';

export const Container = styled.header`
	display: flex;
	justify-content: flex-end;

	background-color: #eee;

	a {
		padding: 0.5rem;
	}
`;

export const Wrapper = styled.div`
	width: 100%;
	max-with: ${variables.rowWidth};
`;
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';

const options = {
	method: 'GET',
	url: 'https://matchilling-chuck-norris-jokes-v1.p.rapidapi.com/jokes/random',
	headers: {
		accept: 'application/json',
		'X-RapidAPI-Key': '6727fd07abmshdddcbc34023c21fp187140jsnab366a7a51bd',
		'X-RapidAPI-Host': 'matchilling-chuck-norris-jokes-v1.p.rapidapi.com',
	},
};

const ChuckContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	margin: auto;
	width: 60%;
	text-align: center;
`;

const ChuckNorrisJoke = () => {
	const [joke, setJoke] = useState('');

	useEffect(() => {
		axios
			.request(options)
			.then((response) => {
				setJoke(response.data.value);
			})
			.catch((error) => {
				console.error(error);
			});
	}, []);

	return (
		<ChuckContainer>
			<h2 className='chuck_joke'>{joke}</h2>
		</ChuckContainer>
	);
};

export default ChuckNorrisJoke;

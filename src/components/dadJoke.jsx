import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';

const options = {
	method: 'GET',
	url: 'https://dad-jokes.p.rapidapi.com/random/joke',
	headers: {
		'X-RapidAPI-Key': '6727fd07abmshdddcbc34023c21fp187140jsnab366a7a51bd',
		'X-RapidAPI-Host': 'dad-jokes.p.rapidapi.com',
	},
};

const JokeContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	margin: 0 auto;
	width: 60%;
	text-align: center;
`;

const DadJoke = () => {
	const [setup, setSetup] = useState('');
	const [punchline, setPunchline] = useState('');

	useEffect(() => {
		axios
			.request(options)
			.then((response) => {
				setSetup(response.data.body[0].setup);
				setPunchline(response.data.body[0].punchline);
			})
			.catch((error) => {
				console.error(error);
			});
	}, []);

	return (
		<>
			<JokeContainer>
				<h2 className='dad_joke'>{setup}</h2>
				<h3 className='dad_joke'>{punchline}</h3>
			</JokeContainer>
		</>
	);
};

export default DadJoke;

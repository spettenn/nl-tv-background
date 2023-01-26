import './App.css';
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

//component imports
import { getNasaData } from './components/nasa';
import Clock from './components/time';
import LiveDate from './components/date';
import ChuckNorrisJoke from './components/joke';
import DadJoke from './components/dadJoke';

function App() {
	const [nasaData, setNasaData] = useState({});

	useEffect(() => {
		getNasaData().then((data) => {
			setNasaData(data);
		});
	}, []);

	const Main = styled.main`
		background: url(${nasaData.hdurl}) no-repeat center center/cover;
		height: 100vh;
		display: flex;
		flex-direction: column;
		justify-content: center;
	`;

	return (
		<>
			<Main>
				<div className='time_container'>
					<Clock />
					<h1>Norwegian lab</h1>
					<LiveDate />
				</div>
				<ChuckNorrisJoke />
				<DadJoke />
			</Main>
		</>
	);
}

export default App;

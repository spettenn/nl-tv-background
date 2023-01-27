import './App.css';
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import logo from './assets/NL-logo.png';

//component imports
import { getNasaData } from './components/nasa';
import Clock from './components/time';
import LiveDate from './components/date';
import Weather from './components/weather';
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
		padding: 1rem;
	`;
	return (
		<>
			<Main>
				<div className='time_container'>
					<img
						className=''
						height={60}
						width={300}
						src={logo}
						alt='Norwegian Lab Logo'
					/>
					<div className='wrapper'>
						<Clock />
					</div>
					<div className='wrapper'>
						<LiveDate />
					</div>

					<Weather />
				</div>
				<ChuckNorrisJoke />
				<DadJoke />
			</Main>
		</>
	);
}

export default App;

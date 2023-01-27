import React, { useEffect, useState } from 'react';
import axios from 'axios';
// sets the weather data from the API
function Weather() {
	const [weatherData, setWeatherData] = useState(null);
	const [error, setError] = useState(null);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const result = await axios(
					'https://api.openweathermap.org/data/2.5/weather',
					{
						params: {
							q: 'Oslo,NO',
							units: 'metric',
							appid: '7552f530894d325c717a2daba6487ca8',
						},
					}
				);
				setWeatherData(result.data);

				console.log(result.data.weather[0].main.toLowerCase());
				const iconCode = result.data.weather[0].icon;
				document.querySelector(
					'#weather-icon'
				).innerHTML = `<img src="https://openweathermap.org/img/wn/${iconCode}@2x.png" alt="Weather icon">`;
			} catch (error) {
				setError(error);
			}
		};
		fetchData();
	}, []);

	if (error) {
		return <div>An error occurred: {error.message}</div>;
	}

	if (!weatherData) {
		return (
			<div>
				<div className='container'>
					<div className='box'>
						<div className='loader'>
							<span></span>
						</div>
						<div className='loader'>
							<span></span>
						</div>
						<div className='loader'>
							<i></i>
						</div>
						<div className='loader'>
							<i></i>
						</div>
					</div>
				</div>
			</div>
		);
	}

	return (
		<div className='weather_container'>
			<h1 className='weather_place'>
				Current weather in {weatherData.name}, {weatherData.sys.country}
			</h1>
			<p className='weather_desc'>{weatherData.weather[0].description}</p>
			<p className='weather_temp'>{weatherData.main.temp}°C</p>
		</div>
	);
}

export default Weather;

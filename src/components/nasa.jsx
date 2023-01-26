const URL_NASA =
	'https://api.nasa.gov/planetary/apod?api_key=6OFB5peji9YjZTwX5XFWDcfcD5jYEHp0ayuQhVLX';

export const getNasaData = async () => {
	const response = await fetch(URL_NASA);
	return response.json();
};

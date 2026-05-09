import { useEffect, useState } from "react";

const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;

export function useWeather() {
	const [city, setCity] = useState("Umbuzeiro, pb");
	const [weather, setWeather] = useState(null);
	const [forecast, setForecast] = useState([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);

	async function fetchWeather({ lat, lon, city }) {
		try {
			setLoading(true);
			setError(null);

			const query =
				lat != null && lon != null
					? `&lat=${lat}&lon=${lon}`
					: `&city_name=${city}`;

			const response = await fetch(
				`https://api.hgbrasil.com/weather?format=json-cors&key=${API_KEY}${query}`,
			);

			const data = await response.json();

			if (data.results) {
				setWeather(data.results);
				setForecast(data.results.forecast.slice(0, 5));
			} else {
				setError("Não foi possível obter os dados do clima.");
			}
			
		} catch (err) {
			setError("Erro ao buscar clima: " + err);
		} finally {
			setLoading(false);
		}
	}

	useEffect(() => {
		if (!("geolocation" in navigator)) {
			fetchWeather({ city });
			return;
		}

		navigator.geolocation.getCurrentPosition(
			(position) => {
				const { latitude, longitude } = position.coords;
				fetchWeather({ lat: latitude, lon: longitude });
			},
			() => {
				fetchWeather({ city });
			},
		);
	}, []);

	useEffect(() => {
		if (city) {
			fetchWeather({ city });
		}
	}, [city]);

	return {
		setCity,
		weather,
		forecast,
		loading,
		error,
	};
}

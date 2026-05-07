import { useEffect, useState } from "react";
import SearchBar from "./SearchBar/index";
import WeatherCard from "./WeatherCard";

import styles from "./weather.module.css";
import ForecastList from "./ForecastList";

const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;

export default function Weather() {
	const [weather, setWeather] = useState(null);
	const [forecast, setForecast] = useState([]);

	useEffect(() => {
		async function fetchWeather() {
			try {
				const response = await fetch(
					`https://api.hgbrasil.com/weather?format=json-cors&key=${API_KEY}&city_name= Campina Grande, PB`,
				);

				const data = await response.json();
				if (data.results) {
					setWeather(data.results);
					setForecast(data.results.forecast.slice(1, 4));
				}
			} catch (error) {
				console.error("Erro ao buscar dados da API", error);
			}
		}
		fetchWeather();
	}, []);

	return (
		<div className={styles.app_container}>
			<SearchBar />

			{weather && (
				<>
					<h1>{weather.city}</h1>
					<WeatherCard weather={weather} />
					<ForecastList forecasts={forecast} />
				</>
			)}
		</div>
	);
}

import { useEffect, useState } from "react";
import { Loading } from "../../components/Common/Loading";

import SearchBar from "./SearchBar/index";
import WeatherCard from "./WeatherCard";
import ForecastList from "./ForecastList";

import styles from "./weather.module.css";
import Sunrise from "./Sunrise";

const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;

export default function Weather() {
	const [city, setCity] = useState("Umbuzeiro, pb");
	const [weather, setWeather] = useState(null);
	const [forecast, setForecast] = useState([]);

	const [loading, setLoading] = useState(true);

	useEffect(() => {
		async function fetchWeather() {
			setLoading(true);

			try {
				const response = await fetch(
					`https://api.hgbrasil.com/weather?format=json-cors&key=${API_KEY}&city_name=${city}`,
				);

				const data = await response.json();
				if (data.results) {
					setWeather(data.results);
					setForecast(data.results.forecast.slice(1, 2));
					console.log(data.results.forecast);
					setLoading(false);
				}
			} catch (error) {
				console.error("Erro ao buscar dados da API", error);
			} finally {
				setLoading(false);
			}
		}
		fetchWeather();
	}, [city]);

	if (loading) {
		return <Loading />;
	}

	return (
		<main className={styles.app}>
			<div className={styles.app_container}>
				<SearchBar onSearch={setCity} />

				{weather && (
					<>
						<h1>{weather.city}</h1>
						<WeatherCard weather={weather} />
						<Sunrise weather={weather} city={city} />
						<ForecastList forecasts={forecast} />
					</>
				)}
			</div>
		</main>
	);
}

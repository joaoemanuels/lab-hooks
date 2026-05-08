import { Loading } from "../../components/Common/Loading";
import { useWeather } from "../../hooks/useWeather";

import SearchBar from "./SearchBar/index";
import WeatherCard from "./WeatherCard";
import ForecastList from "./ForecastList";
import Sunrise from "./Sunrise";

import styles from "./weather.module.css";


export default function Weather() {
	const {  setCity, weather, forecast, loading, error } = useWeather();

	if (loading) {
		return <Loading />;
	}

	return (
		<main className={styles.app}>
			<div className={styles.app_container}>
				<SearchBar onSearch={setCity} />

				{error && <p>{error}</p>}

				{weather && (
					<>
						<h1>{weather.city}</h1>
						<WeatherCard weather={weather} />
						<Sunrise weather={weather} />
						<ForecastList forecasts={forecast} />
					</>
				)}
			</div>
		</main>
	);
}

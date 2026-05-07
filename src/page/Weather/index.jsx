import SearchBar from "./SearchBar/index";
import WeatherCard from "./WeatherCard";

import styles from "./weather.module.css";

export default function Weather() {
	return (
		<div className={styles.app_container}>
			<SearchBar />
			<h1>São Paulo. SP</h1>
			<WeatherCard />
		</div>
	);
}

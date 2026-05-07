import styles from "./weather-card.module.css";

const WeatherCard = ({ weather }) => {
	return (
		<section className={styles.weatherCard}>
			<p>Hoje ({weather.forecast[0].date})</p>

			<img
				src={`./icons-weather/${weather.condition_slug}.svg`}
				alt={weather.description}
			/>

			<h2 className={styles.temperature}>{weather.temp}°</h2>

			<p className={styles.condition}>{weather.description}</p>

			<div className={styles.humidity}>
				<div>
					<img src="./humidity.svg" alt="" />
					<p>Umidade:</p>
				</div>

				<span>{weather.humidity}%</span>
			</div>

			<div className={styles.minMax}>
				<div>
					<img src="./temp.svg" alt="" />
					<p>Min/Max:</p>
				</div>

				<span>
					{weather.forecast[0].min}/{weather.forecast[0].max}°
				</span>
			</div>
		</section>
	);
};

export default WeatherCard;

import styles from "./forecast-item.module.css";

const getWeekday = (dateString) => {
	const [day, month] = dateString.split("/");
	const dateObj = new Date(new Date().getFullYear(), month - 1, day);
	const weekday = Intl.DateTimeFormat("pt-BR", { weekday: "long" }).format(
		dateObj,
	);

	return weekday.charAt(0).toUpperCase() + weekday.split("-")[0].slice(1);
};

const ForecastItem = ({ date, min, max, condition, description }) => {
	return (
		<div className={styles.forecast_item}>
			<p>
				{getWeekday(date)} <br/> ({date})
			</p>
			<img src={`./icons-weather/${condition}.svg`} alt={description} />
			<span className={styles.forecast_temp}>
				{min}/{max}°
			</span>
		</div>
	);
};

export default ForecastItem;

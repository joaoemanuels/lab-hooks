import styles from "./forecast-list.module.css";
import ForecastItem from "../ForecastItem";

const ForecastList = ({ forecasts }) => {
	ForecastList;
	return (
		<section className={styles.forecast_lists}>
			{forecasts.map((forecast, index) => (
				<ForecastItem key={index} {...forecast} />
			))}
		</section>
	);
};

export default ForecastList;

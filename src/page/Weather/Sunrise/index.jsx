import styles from "./sunrise.module.css";

const Sunrise = ({weather}) => {

  return (
    <div className={styles.app_container}>
      <h1>{weather.city}</h1>
      <span>Nascer do sol: {weather.sunrise} | Pôr do sol: {weather.sunset}</span>
    </div>
  );
};

export default Sunrise;

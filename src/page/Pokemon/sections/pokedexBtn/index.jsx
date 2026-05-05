import styles from "./pokedex-btn.module.css";

export default function PokedexBtn() {
	return (
		<div className={styles.buttons}>
			<button className={`${styles.button} ${styles.button_prev}`}>
				Prev {"<"}
			</button>
			<button className={`${styles.button} ${styles.button_next}`}>
				Next {">"}
			</button>
		</div>
	);
}

import styles from "./pokedex-btn.module.css";

export default function PokedexBtn({ onNext, onPrev }) {
	return (
		<div className={styles.buttons}>
			<button
				className={`${styles.button} ${styles.button_prev}`}
				onClick={onPrev}
			>
				Prev {"<"}
			</button>
			<button
				className={`${styles.button} ${styles.button_next}`}
				onClick={onNext}
			>
				Next {">"}
			</button>
		</div>
	);
}

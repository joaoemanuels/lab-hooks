import styles from "./pokedex-form.module.css";

export default function PokedexForm() {
	return (
		<form className={styles.form}>
			<input
				type="search"
				className={styles.input__search}
				placeholder="Nome ou número"
				required
			/>
		</form>
	);
}

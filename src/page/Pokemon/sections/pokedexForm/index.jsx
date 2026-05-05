import styles from "./pokedex-form.module.css";

export default function PokedexForm({ search, setSearch, onSearch }) {
	return (
		<form
			className={styles.form}
			onSubmit={(e) => {
				e.preventDefault();
				onSearch();
			}}
		>
			<input
				type="text"
				value={search}
				onChange={(e) => setSearch(e.target.value)}
				className={styles.input__search}
				placeholder="Nome ou número"
				required
			/>
		</form>
	);
}

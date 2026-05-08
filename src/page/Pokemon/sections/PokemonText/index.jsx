import styles from "./pokedex-text.module.css";

export default function PokedexText({ name, id }) {
	return (
		<div>
			<h1 className={styles.pokemonData}>
				<span className={styles.pokemonNumber}>{id || "..."}</span> -
				<span className={styles.pokemonName}>{name || "loading..."}</span>
			</h1>
		</div>
	);
}

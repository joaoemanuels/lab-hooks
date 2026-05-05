import { useEffect, useState } from "react";
import styles from "./pokemon.module.css";

import pokedex from "../../assets/images/pokedex.png";
import PokedexForm from "./sections/pokedexForm";
import PokedexBtn from "./sections/pokedexBtn";
import PokedexText from "./sections/PokedexText";

import { fetchPokemon } from "../../services/pokemon";

export default function Pokemon() {
	const [pokemon, setPokemon] = useState(null);
	const [search, setSearch] = useState("626");

	const loadPokemon = async (name) => {
		try {
			const data = await fetchPokemon(name);
			setPokemon(data);
		} catch (error) {
			console.log(error);
			setPokemon(null);
		}
	};

	useEffect(() => {
		loadPokemon(search);
	}, [search]);

	return (
		<main>
			<img
				src={
					pokemon?.sprites?.versions?.["generation-v"]?.["black-white"]
						?.animated?.front_default
				}
				alt="pokemon"
				className={styles.pokemon__image}
			/>

			<PokedexText name={pokemon?.name} id={pokemon?.id} />

			<PokedexForm search={search} setSearch={setSearch} />

			<PokedexBtn onSearch={() => loadPokemon(search)} />

			<img src={pokedex} alt="pokedex" className={styles.pokedex} />
		</main>
	);
}

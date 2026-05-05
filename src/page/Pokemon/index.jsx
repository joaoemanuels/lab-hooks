import { useEffect, useState } from "react";
import styles from "./pokemon.module.css";

import pokedex from "../../assets/images/pokedex.png";
import PokedexForm from "./sections/pokedexForm";
import PokedexBtn from "./sections/pokedexBtn";
import PokedexText from "./sections/PokedexText";

import { fetchPokemon } from "../../services/pokemon";

export default function Pokemon() {
	const [pokemon, setPokemon] = useState(null);
	const [search, setSearch] = useState("25");

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
	}, []);

	const handleSearch = () => {
		if (!search) return;
		loadPokemon(search);
	};

	const handleNext = () => {
		if (!pokemon) return;
		const nextId = pokemon.id + 1;

		setSearch(nextId.toString());
		loadPokemon(nextId);
	};

	const handlePrev = () => {
		if (!pokemon) return;
		const prevId = pokemon.id - 1;

		if (prevId < 1) return;

		setSearch(prevId.toString());
		loadPokemon(prevId);
	};

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

			<PokedexForm
				search={search}
				setSearch={setSearch}
				onSearch={handleSearch}
			/>

			<PokedexBtn onNext={handleNext} onPrev={handlePrev} />

			<img src={pokedex} alt="pokedex" className={styles.pokedex} />
		</main>
	);
}

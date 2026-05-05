export const fetchPokemon = async (pokemon) => {
	const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);

	if (!response.ok) {
		throw new Error("Pokémon não encontrado");
	}

	const data = await response.json();

	return data;
};

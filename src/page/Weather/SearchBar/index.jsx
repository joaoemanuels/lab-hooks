import { useState } from "react";
import styles from "./search-bar.module.css";

const SearchBar = ({ onSearch }) => {
	const [inputValue, setInputValue] = useState("");

	function handleSubmit(event) {
		event.preventDefault();
		const trimmedValue = inputValue.trim();

		if (trimmedValue !== "") {
			onSearch(trimmedValue);
			setInputValue("");
		}
	}

	return (
		<form className={styles.form_search} onSubmit={handleSubmit}>
			<label className={styles.search_bar}>
				<input
					type="text"
					placeholder="Digite a cidade"
					value={inputValue}
					onChange={(event) => setInputValue(event.target.value)}
				/>
				<button type="submit">
					<img src="./search.svg" alt="ícone de busca" />
				</button>
			</label>
		</form>
	);
};

export default SearchBar;

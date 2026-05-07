import styles from "./search-bar.module.css";

const SearchBar = () => {
  return (
    <form className={styles.form_search}>
      <label className={styles.search_bar}>
        <input type="text" placeholder="Digite a cidade" />
        <button type="submit">
          <img src="./search.svg" alt="ícone de busca" />
        </button>
      </label>
    </form>
  );
};

export default SearchBar;

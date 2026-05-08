import { useState } from "react";
import styles from "./header.module.css";

export default function Header() {
	const [isDark, setIsDark] = useState(false);

	const toggleTheme = () => {
		setIsDark(!isDark);
		document.documentElement.setAttribute(
			"data-theme",
			isDark ? "light" : "dark",
		);
	};

	return (
		<header className={styles.header}>
			<div className={styles["search-container"]}>
				<svg
					className={styles["search-icon"]}
					width="20"
					height="20"
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					strokeWidth="2"
				>
					<circle cx="11" cy="11" r="8"></circle>
					<path d="m21 21-4.35-4.35"></path>
				</svg>

				<input
					type="text"
					placeholder="Buscar posts..."
					className={styles["search-input"]}
				/>
			</div>

			<div className={styles["header-right"]}>
				<button
					className={`${styles["icon-btn"]} ${styles["theme-toggle"]}`}
					onClick={toggleTheme}
					title="Toggle theme"
				>
					{isDark ? (
						<svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
							<path d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
						</svg>
					) : (
						<svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
							<path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
						</svg>
					)}
				</button>

				<div className={styles["user-menu"]}>
					<div className={styles["user-avatar"]}>U</div>

					<div className={styles["user-info"]}>
						<span className={styles["user-greeting"]}>Olá, Usuário!</span>

						<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
							<path d="M7 10l5 5 5-5z" />
						</svg>
					</div>
				</div>
			</div>
		</header>
	);
}

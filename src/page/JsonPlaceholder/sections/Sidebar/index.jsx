import styles from "./sidebar.module.css";

export default function Sidebar() {
	return (
		<aside className={styles.sidebar}>
			<div className={styles["sidebar-header"]}>
				<div className={styles.logo}>
					<span className={styles["logo-icon"]}>B</span>
					<span className={styles["logo-text"]}>BlogHub</span>
				</div>
			</div>

			<nav className={styles["sidebar-nav"]}>
				<a href="#posts" className={`${styles["nav-item"]} ${styles.active}`}>
					<svg
						className={styles["nav-icon"]}
						width="20"
						height="20"
						viewBox="0 0 24 24"
						fill="currentColor"
					>
						<path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4z" />
					</svg>
					<span>Posts</span>
				</a>

				<a href="#usuarios" className={styles["nav-item"]}>
					<svg
						className={styles["nav-icon"]}
						width="20"
						height="20"
						viewBox="0 0 24 24"
						fill="currentColor"
					>
						<path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
					</svg>
					<span>Usuários</span>
				</a>

				<a href="#sobre" className={styles["nav-item"]}>
					<svg
						className={styles["nav-icon"]}
						width="20"
						height="20"
						viewBox="0 0 24 24"
						fill="currentColor"
					>
						<path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z" />
					</svg>
					<span>Sobre</span>
				</a>
			</nav>

			<footer className={styles["sidebar-footer"]}>
				<p>
					Feito com <span className={styles.heart}>❤️</span>
				</p>
				<p>JSONPlaceholder API</p>
			</footer>
		</aside>
	);
}

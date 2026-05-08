import styles from "./post-card.module.css";

export default function PostCard({ post, isSelected, onSelect }) {
	return (
		<article
			className={`${styles["post-card"]} ${isSelected ? styles.selected : ""}`}
			onClick={onSelect}
		>
			<div className={styles["post-card-left"]}>
				<h3 className={styles["post-card-title"]}>{post.title}</h3>

				<p className={styles["post-card-excerpt"]}>{post.excerpt}</p>
			</div>

			<div className={styles["post-card-footer"]}>
				<div className={styles["post-meta"]}>
					<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
						<path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
					</svg>

					<span>{post.author}</span>
				</div>

				<div className={styles["post-comments"]}>
					<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
						<path d="M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM6 9h12v2H6V9zm13 8H6v-2h13v2zm0-4H6V11h13v2z" />
					</svg>

					<span>{post.comments} comentários</span>
				</div>
			</div>

			<svg
				className={styles["post-card-arrow"]}
				width="20"
				height="20"
				viewBox="0 0 24 24"
				fill="none"
				stroke="currentColor"
				strokeWidth="2"
			>
				<polyline points="9 18 15 12 9 6"></polyline>
			</svg>
		</article>
	);
}

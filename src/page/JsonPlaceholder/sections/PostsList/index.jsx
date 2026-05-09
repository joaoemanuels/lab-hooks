import PostCard from "../PostCard";

import styles from "./post-list.module.css";

export default function PostsList({ onSelectPost, selectedPostId, posts }) {

	return (
		<section className={styles["posts-section"]}>
			<div className={styles["posts-header"]}>
				<h1>Posts</h1>

				<p className={styles["posts-subtitle"]}>
					Veja todos os posts publicados
				</p>
			</div>

			<div className={styles["posts-toolbar"]}>
				<button className={styles["filter-btn"]}>
					<span>Todos os usuários</span>

					<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
						<path d="M7 10l5 5 5-5z" />
					</svg>
				</button>

				<button className={styles["btn-primary"]}>
					<svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
						<path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" />
					</svg>
					Novo Post
				</button>
			</div>

			<div className={styles["posts-list"]}>
				{posts.map((post) => (
					<PostCard
						key={post.id}
						post={post}
						comments={post.comments}
						isSelected={selectedPostId === post.id}
						onSelect={() => onSelectPost(post)}
					/>
				))}
			</div>

			<div className={styles.pagination}>
				<button className={`${styles["pagination-btn"]} ${styles.prev}`}>
					←
				</button>

				<button className={`${styles["pagination-btn"]} ${styles.active}`}>
					1
				</button>

				<button className={styles["pagination-btn"]}>2</button>
				<button className={styles["pagination-btn"]}>3</button>
				<button className={styles["pagination-btn"]}>4</button>
				<button className={styles["pagination-btn"]}>5</button>

				<span className={styles["pagination-dots"]}>...</span>

				<button className={styles["pagination-btn"]}>10</button>

				<button className={`${styles["pagination-btn"]} ${styles.next}`}>
					→
				</button>
			</div>
		</section>
	);
}

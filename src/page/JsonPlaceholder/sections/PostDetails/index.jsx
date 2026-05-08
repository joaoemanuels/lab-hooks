import CommentsList from "../CommentsList";

import styles from "./post-details.module.css";

export default function PostDetails({ post, onClose }) {
	return (
		<aside className={styles["post-details"]}>
			<button
				className={styles["close-btn"]}
				onClick={onClose}
			>
				<svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
					<path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
				</svg>
			</button>

			<div className={styles["details-header"]}>
				<h2>{post.title}</h2>

				<div className={styles["details-meta"]}>
					<div className={styles["meta-item"]}>
						<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
							<path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
						</svg>

						<span>{post.author}</span>
					</div>

					<div className={styles["meta-item"]}>
						<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
							<path d="M9 11H7v2h2v-2zm4 0h-2v2h2v-2zm4 0h-2v2h2v-2zm2-7h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V9h14v11z" />
						</svg>

						<span>01/01/2024</span>
					</div>
				</div>
			</div>

			<div className={styles["details-content"]}>
				<div className={styles["post-label"]}>
					Post #1
				</div>

				<p className={styles["details-body"]}>
					{post.excerpt} molestiae ut et quas totam nostrum rerum est autem
					sunt rem eveniet architecto
				</p>

				<p className={styles["details-body"]}>
					ipsam nobis necessitatibus eius impedit facilis has dolores dolorum
					dolorem temporibus officiis odit molestias consequatur ratione sequi
					quidem nihil doloreque
				</p>

				<p className={styles["details-body"]}>
					quisquam temporibus necessitatibus dolor quam impedit nobis magnam
					consequatur et doloremque doloribus quia molestiae accusamus iure
					provident voluptatem maiores...
				</p>
			</div>

			<div className={styles["comments-section"]}>
				<h3>Comentários ({post.comments})</h3>

				<CommentsList />
			</div>

			<button className={styles["view-all-comments"]}>
				Ver todos os comentários
			</button>
		</aside>
	);
}
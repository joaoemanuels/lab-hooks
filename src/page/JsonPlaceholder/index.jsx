import { useState } from "react";
import Header from "./sections/Header";
import PostDetails from "./sections/PostDetails";
import PostsList from "./sections/PostsList";
import Sidebar from "./sections/Sidebar";

import styles from "./jsonPlaceholder.module.css";

export default function JsonPlaceholder() {
	const [selectedPost, setSelectedPost] = useState(null);
	return (
		<div className={styles.bloghub}>
			<Sidebar />
			<main className={styles["main-content"]}>
				<Header />
				<div className={styles["content-wrapper"]}>
					<PostsList
						onSelectPost={setSelectedPost}
						selectedPostId={selectedPost?.id}
					/>
					{selectedPost && (
						<PostDetails
							post={selectedPost}
							onClose={() => setSelectedPost(null)}
						/>
					)}
				</div>
			</main>
		</div>
	);
}

import { useEffect, useState } from "react";
import { Loading } from "../../components/Common/Loading";

import Header from "./sections/Header";
import PostDetails from "./sections/PostDetails";
import PostsList from "./sections/PostsList";
import Sidebar from "./sections/Sidebar";

import styles from "./jsonPlaceholder.module.css";

export default function JsonPlaceholder() {
	const [selectedPost, setSelectedPost] = useState(null);
	const [posts, setPosts] = useState([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);

	async function fetchJsonPlaceholder() {
		try {
			setLoading(true);
			setError(null);

			const postsResponse = await fetch(
				"https://jsonplaceholder.typicode.com/posts",
			);

			const usersResponse = await fetch(
				"https://jsonplaceholder.typicode.com/users",
			);

			const commentsResponse = await fetch(
				"https://jsonplaceholder.typicode.com/comments",
			);

			const postsData = await postsResponse.json();
			const usersData = await usersResponse.json();
			const commentsData = await commentsResponse.json();

			const formattedPosts = postsData.map((post) => {
				const user = usersData.find((user) => user.id === post.userId);

				const comments = commentsData.filter(
					(comment) => comment.postId === post.id,
				);

				return {
					...post,
					author: user?.name,
					comments,
				};
			});

			if (postsData) {
				setPosts(formattedPosts);
			} else {
				setError("Não foi possível obter dados dos posts");
			}
			console.log(formattedPosts);
		} catch (err) {
			setError("Erro ao buscar posts: " + err);
		} finally {
			setLoading(false);
		}
	}

	useEffect(() => {
		fetchJsonPlaceholder();
	}, []);

	if (loading) {
		return <Loading />;
	}

	return (
		<div className={styles.bloghub}>
			<Sidebar />
			<main className={styles["main-content"]}>
				<Header />
				<div className={styles["content-wrapper"]}>
					{error && <p>{error}</p>}

					<PostsList
						posts={posts}
						onSelectPost={setSelectedPost}
						selectedPostId={selectedPost?.id}
					/>
					{selectedPost && (
						<PostDetails
							post={selectedPost}
							comments={selectedPost.comments}
							onClose={() => setSelectedPost(null)}
						/>
					)}
				</div>
			</main>
		</div>
	);
}

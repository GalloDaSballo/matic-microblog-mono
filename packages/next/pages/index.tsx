import Head from "next/head";
import Login from "../components/Login";
import usePosts from "../hooks/usePosts";
import styles from "../styles/Home.module.scss";
import Post from "../components/PostListItem";
import { useRouter } from "next/router";

const Home: React.FC = () => {
	const router = useRouter();
	const posts = usePosts();
	console.log(posts);

	return (
		<main>
			<Head>
				<title>Create Next App</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<div>
				<Login />
			</div>
			<div className={styles.container}>
				<div className={styles.containerHead}>
					<button
						type="button"
						className={styles.btn}
						onClick={() => router.push("/add-post")}
					>
						+ Add New
					</button>
				</div>
				<ul>
					{posts.map((post) => (
						<Post
							key={post.id}
							author={post.author}
							content={post.content}
							id={post.id}
							replyTo={post.replyTo}
							likes={post.likes}
							dislikes={post.dislikes}
						/>
					))}
				</ul>
			</div>
		</main>
	);
};

export default Home;

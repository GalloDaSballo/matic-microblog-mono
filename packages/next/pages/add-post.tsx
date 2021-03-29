import Head from "next/head";
import Login from "../components/Login";
import styles from "../styles/Home.module.scss";
import NewPostForm from "../components/NewPostForm";
import { useRouter } from "next/router";

const Home: React.FC = () => {
	const router = useRouter();

	return (
		<div>
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
						onClick={() => router.push("/")}
					>
						Go back
					</button>
				</div>
				<NewPostForm />
			</div>
		</div>
	);
};

export default Home;

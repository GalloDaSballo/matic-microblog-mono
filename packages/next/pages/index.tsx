import Head from "next/head";
import Link from "next/link";
import Login from "../components/Login";
import usePosts from "../hooks/usePosts";
import styles from "../styles/Home.module.css";
import {getFirst100Posts} from "../utils/graphql"

const Home: React.FC = () => {
  const posts = usePosts()
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div>
        <Login />
      </div>

      {posts.map(post => <Link href={`/post/${post.id}`}><a><div>{post.content}</div></a></Link>)}
    </div>
  );
};

export default Home;

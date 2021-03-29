import Head from "next/head";
import Login from "../components/Login";
import styles from "../styles/Home.module.css";

const Home: React.FC = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div>
        <Login />
      </div>
    </div>
  );
};

export default Home;

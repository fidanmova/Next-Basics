import Link from "next/link";
import Head from "next/head";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title> Next tutorial for beginners</title>
      </Head>
      <Link href="/about">About </Link>
      <h1 className={styles.homePageTitle}>Im the home page</h1>
    </div>
  );
}

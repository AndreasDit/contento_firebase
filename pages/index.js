import Head from 'next/head';
import styles from '../styles/Home.module.css';
import { useState, useEffect } from 'react';

export default function Home() {
  const [currentTime, setCurrentTime] = useState('');

  useEffect(() => {
    setCurrentTime(new Date().toLocaleString());
  }, []);

  return (
    <div className={styles.container}>
      <Head>
        <title>Firebase Test - Next.js</title>
        <meta name="description" content="Testing Next.js with Firebase" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Next.js</a> on Firebase!
        </h1>

        <p className={styles.description}>
          This page was rendered at: {currentTime}
        </p>

        <div className={styles.grid}>
          <div className={styles.card}>
            <h2>Firebase Deployment Test &rarr;</h2>
            <p>If you can see this page, your Next.js app is successfully deployed to Firebase!</p>
          </div>

          <div className={styles.card}>
            <h2>Environment &rarr;</h2>
            <p>Current environment: {process.env.NODE_ENV}</p>
          </div>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://nextjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by Next.js
        </a>
      </footer>
    </div>
  );
}
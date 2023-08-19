"use client"

import Head from 'next/head';
import styles from './page.module.css';
import Banner from '@/components/banner/banner';

export default function Home() {
  const handleBtnOnClick = () => {

  };

  return (
    <div>
       <Head>
        <title>Coffee Connoisseur</title>
      </Head>
      <main className={styles.main}>
        <div className={styles.center}>
          <Banner buttonText='View stores nearby' handleBtnClick={handleBtnOnClick}/>
        </div>
      </main>
    </div>
  )
}

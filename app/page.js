"use client"

import Head from 'next/head';
import Image from 'next/image';
import styles from './page.module.css';
import Banner from '@/components/banner/banner';
import Card from '@/components/card/card';

export default function Home() {
  const handleBtnOnClick = () => {

  };

  return (
    <div>
       <Head>
        <title>Coffee Connoisseur</title>
      </Head>
      <main className={styles.main}>
          <Banner buttonText='View stores nearby' handleBtnClick={handleBtnOnClick}/>
          <div className={styles.heroImage}>
            <Image src='/static/hero-image.png' width={700} height={400} alt='hero-image'/>
          </div>
          <Card name="DarkHorse Coffee" href="/static/hero-image" />
      </main>
    </div>
  )
}

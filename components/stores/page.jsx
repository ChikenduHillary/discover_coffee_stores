"use client"
import Image from "next/image";

import Card from "../card/card";
import styles from './page.module.css';
import Banner from "../banner/banner";

const Stores = ({props}) => {
    const coffeeStores = props.props.coffeeStores;
    const handleBtnOnClick = () => {
    };
  return (
    <main className={styles.main}>
        <Banner buttonText='View stores nearby' handleBtnClick={handleBtnOnClick}/>
        <div className={styles.heroImage}>
            <Image src='/static/hero-image.png' width={700} height={400} alt='hero-image'/>
        </div>
        {
            coffeeStores.length > 0 && <>
                <h1 className={styles.heading2}>Toronto Stores</h1>
                <div className={styles.cardLayout}>
                {
                    coffeeStores.map(({id, name, imgUrl,}) => (
                    <Card key={id} name={name} imgUrl="/static/hero-image.png" href='#' />
                    ))
                }
                </div>
            </>
        }
    </main>
  )
}

export default Stores

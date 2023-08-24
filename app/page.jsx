import Head from 'next/head';

import Stores from '@/components/stores/page';
import coffeeStores from '../data/coffee-stores.json';

export async function getData(context) {
  return {
    props: {
      coffeeStores
    }
  }
}

export default async function Home(params) {
  const coffeeStores = await getData();

  return (
    <div>
       <Head>
        <title>Coffee Connoisseur</title>
      </Head>
      <Stores props={coffeeStores}/>
    </div>
  )
}

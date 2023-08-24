import coffeeStores from '../data/coffee-stores.json';

export async function generateStaticParams(context) {
  console.log('context', coffeeStores)
  return {
    props: {
      coffeeStores
    }
  }
}
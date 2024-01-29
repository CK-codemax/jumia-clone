import ProductThumbnail from './components/ProductThumbnail';
import ProductView from './components/ProductView';


const gsmarena = require('gsmarena-api');

export default async function Home() {
  const deals = await gsmarena.deals.getDeals();
console.log(deals);
  return(<>
        <p>welcome to new jumia</p>
        <ProductView products={deals} />
  </>)
}
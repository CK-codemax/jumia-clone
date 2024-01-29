import { getServerSession } from 'next-auth/next'
import ProductThumbnail from './components/ProductThumbnail';
import ProductView from './components/ProductView';
import { options } from './api/auth/[...nextauth]/options';


const gsmarena = require('gsmarena-api');

export default async function Home() {
  const deals = await gsmarena.deals.getDeals();
  console.log(deals);
  // const session = await getServerSession(options)
  // if(!session)return null
  return(<>
        <p>welcome to new jumia</p>
        <ProductView products={deals} />
  </>)
}
import { getServerSession } from 'next-auth/next'
import ProductView from './components/ProductView';
import { options } from './api/auth/[...nextauth]/options';
import { correctPrice, getHistory } from './utils/currencyConverters';
import { redirect } from 'next/navigation';


const gsmarena = require('gsmarena-api');

export default async function Home() {
  const deals = await gsmarena.deals.getDeals();

  const newDeals = deals?.map((fullDeal) => {
   
  
    const fixedToCurrency = {
      ...fullDeal,
      history : getHistory(fullDeal.history, '$'),
      deal: {
        ...fullDeal.deal,
        currency: '$',
        discount: correctPrice(fullDeal.deal.currency, '$', fullDeal.deal.discount),
        price : correctPrice(fullDeal.deal.currency, '$', fullDeal.deal.price),
      }
    };
  return fixedToCurrency
  })
   
  const brands = await gsmarena.catalog.getBrands();
  const devices1 = await gsmarena.catalog.getBrand('apple-phones-48');
  const devices2 = await gsmarena.catalog.getBrand('sony-phones-7');
  const devices3 = await gsmarena.catalog.getBrand('tecno-phones-120');
 const use = [...devices1, ...devices2, ...devices3]
 const apple = await gsmarena.search.search('apple');

   const session = await getServerSession(options)
  return(<>
        <p>{session?.user?.name} welcome to new jumia</p>
        <ProductView products={newDeals} newDeals={apple}/>
       
  </>)
}
import { getServerSession } from 'next-auth/next'
import ProductView from './components/ProductView';
import { options } from './api/auth/[...nextauth]/options';
import { correctPrice, getHistory } from './utils/currencyConverters';


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

   const session = await getServerSession(options)
  // if(!session)return null
  return(<>
        <p>{session?.user?.name} welcome to new jumia</p>
        <ProductView products={newDeals} newDeals={deals}/>
       
  </>)
}
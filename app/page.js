
import ProductView from './components/ProductView';
import { options } from './api/auth/[...nextauth]/options';



const gsmarena = require('gsmarena-api');

export default async function Home() {
  const deals = await gsmarena.deals.getDeals();

  return(<>
       
        <ProductView products={deals}/>
       
  </>)
}

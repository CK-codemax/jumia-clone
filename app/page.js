
import ProductView from './components/ProductView';
import { options } from './api/auth/[...nextauth]/options';
import HomeTop from './components/HomeTop';



const gsmarena = require('gsmarena-api');

export default async function Home() {
  const deals = await gsmarena.deals.getDeals();

  return(<>
        <HomeTop />
        <ProductView products={deals}/>
       
  </>)
}

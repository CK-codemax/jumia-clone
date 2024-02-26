import { getServerSession } from 'next-auth/next'
import ProductView from './components/ProductView';
import { options } from './api/auth/[...nextauth]/options';



const gsmarena = require('gsmarena-api');

export default async function Home() {
  const deals = await gsmarena.deals.getDeals();
  
   

   const session = await getServerSession(options)
  return(<>
        <p>{session?.user?.name} welcome to new jumia</p>
        <ProductView products={dealsUse}/>
       
  </>)
}

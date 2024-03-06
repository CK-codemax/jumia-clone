
import ProductView from './components/ProductView';
import HomeTop from './components/HomeTop';
import Header from './components/Header';



const gsmarena = require('gsmarena-api');

export default async function Home() {
  const deals = await gsmarena.deals.getDeals();

  return(<>
        <Header />
        <HomeTop />
        <ProductView products={deals}/>
       
  </>)
}

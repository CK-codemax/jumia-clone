
import CartList from '../components/CartList';

const gsmarena = require('gsmarena-api');


export default async function page() {
  const deals = await gsmarena.deals.getDeals();
 
  return (
    <CartList list={deals} />
  )
}

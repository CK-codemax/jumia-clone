import OrderSuccess from "../components/OrderSuccess";

const gsmarena = require('gsmarena-api');

export default async function page(){

  const deals = await gsmarena.deals.getDeals();

  
  return (
  <OrderSuccess deals={deals} />
  )
  }

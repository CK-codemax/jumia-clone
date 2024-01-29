import IndividualProduct from '@/app/components/IndividualProduct';

const gsmarena = require('gsmarena-api');


export default async function page({params : {id = null}}) {

    const device = await gsmarena.catalog.getDevice(id)
    const deals = await gsmarena.deals.getDeals();
    const deviceDeal = deals.find((deal) => deal.id === id)

  return (
    <div>
        <IndividualProduct device={device} deal={deviceDeal} />
    </div>
  )
}

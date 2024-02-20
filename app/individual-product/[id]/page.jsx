import IndividualProduct from '@/app/components/IndividualProduct';

const gsmarena = require('gsmarena-api');


export default async function page({params : {id = null}}) {

    const device = await gsmarena.catalog.getDevice(id)
    const deals = await gsmarena.deals.getDeals();

  return (
    <div>
        <IndividualProduct device={device} deals={deals} id={id} />
    </div>
  )
}

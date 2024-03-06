
import { getServerSession } from 'next-auth';
import CartList from '../components/CartList';
import Header from '../components/Header';
import { options } from '../api/auth/[...nextauth]/options';
import SignIn from '../components/SignIn';

const gsmarena = require('gsmarena-api');


export default async function page() {
  const deals = await gsmarena.deals.getDeals();
  const session = await getServerSession(options)
 if(!session)return<SignIn />
  return (<>
    <Header />
    <CartList list={deals} />
  </>
  )
}

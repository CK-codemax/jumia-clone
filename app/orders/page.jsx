import { getServerSession } from "next-auth";
import Header from "../components/Header";
import OrderList from "../components/OrderList";
import { options } from "../api/auth/[...nextauth]/options";
import SignIn from "../components/SignIn";

export default async function page() {
  const session = await getServerSession(options)
 if(!session)return<SignIn/>
  return (<>
    <Header />
    <OrderList />
    </>
  )
}

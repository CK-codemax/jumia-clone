import { getServerSession } from 'next-auth/next'
import { options } from '../api/auth/[...nextauth]/options'


export default async function page(){

  const session = await getServerSession(options)
  if(!session)return null
  return (
  <p>{session?.user?.name} {session?.user?.email} thanks for patronising us</p>
  )
  }
// export default function page() {
//   return (
//     <div>thanks for patronising us</div>
//   )
// }

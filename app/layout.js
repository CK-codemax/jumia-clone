import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import ReduxProvider from "./ReduxProvider";
import { getServerSession } from "next-auth";
import { options } from "./api/auth/[...nextauth]/options";
import AuthProvider from './context/AuthProvider';


const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Jumia clone",
  description: "I built this Online retail app to practice Redux and some api routes",
};

export default async function RootLayout({ children }) {
  const session = await getServerSession(options)

 
  return (
    <html lang="en">

      <body className={inter.className}>
     <AuthProvider session={session}>

       <ReduxProvider>
       <Header />
         {children}
       </ReduxProvider>
     </AuthProvider>
  
        </body>
    </html>
  );
}

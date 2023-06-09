import NavBar from '@/components/navBar'
import './globals.css'
import Footer from '@/components/footer'
import { headers } from 'next/headers'
import { getServerSession } from "next-auth/next"
import { authOptions } from '@/pages/api/auth/[...nextauth]'
import AuthContext from '@/components/AuthContext'
export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}



export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const session = await getServerSession(authOptions)
  console.log(session);
  return (
    <html lang="en">
      <body>
        <div id="next_app">
          {/* <AuthContext session={session} > */}
          <NavBar />
          {children}
          <Footer />
          {/* </AuthContext> */}
        </div>
        <div id="modalLogin"></div>
        <div id="side-panel-overlay"></div>
      </body>
    </html>
  )
}

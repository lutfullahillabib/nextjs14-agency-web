import { Poppins } from 'next/font/google'
import './globals.css'
import AppProgressBar from '@/utility/AppProgressBar'
import Navbar from '@/components/shared/Navbar'
import Footer from '@/components/shared/Footer'

// const inter = Inter({ subsets: ['latin'] })

const poppins = Poppins({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin-ext"],
});

// export const metadata = {
//   title: 'Create Next App',
//   description: 'Generated by create next app',
// }

export default function RootLayout({ children }) {
  return (
    <html lang="en">

      {/* <body className={inter.className}> */}
      <body className={poppins.className}>
        <Navbar />
        {children}
        <Footer />

        <AppProgressBar />
      </body>

    </html>
  )
}


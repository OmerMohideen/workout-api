import Footer from './components/Footer'
import Navbar from './components/Navbar'
import './globals.css'

export const metadata = {
  title: 'Workout API',
  description: 'An api which generates super set workouts',
   robots: {
    index: false,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: false,
      noimageindex: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
   openGraph: {
    title: 'Workout API',
    description: 'An api which generates super set workouts',
    url: 'https://workout-api.vercel.app',
    siteName: 'Workout API',
    images: [
      "/home.png",
      {
        type: "image/png"
      },
    ],
    locale: 'en-US',
    type: 'website',
  },
   twitter: {
    card: 'summary_large_image',
    title: 'Workout API',
    description: 'An api which generates super set workouts',
    images: [
      "/home.png",
    ],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Navbar/>
        {children}
        <Footer/>
      </body>
    </html>
  )
}

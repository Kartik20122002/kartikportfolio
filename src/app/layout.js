import { Roboto  } from 'next/font/google'


const inter = Roboto({ subsets: ['latin'] , weight: ["100","300","400","500" , "700" ,"900"] })

export const metadata = {
  title: 'Kartik Hatwar',
  description: 'Welcome to my portfolio',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="manifest" href="/manifest.json" />
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}

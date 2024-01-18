import { Inter } from 'next/font/google'
import './globals.css'
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';
import '../styles/plugins.css'
import '../styles/style.css'


library.add(fas, fab);

const inter = Inter({ subsets: ['latin'] })

export const viewport = {
  width: "device-width",
  height: "device-height",
  initialScale: 1,
  maximumScale: 1,
  minimumScale: 1,
}

export const metadata = {
  title: "SERJO LIO | I'm a ghost!",
  description: 'Sergio Lio Online Portfolio',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}

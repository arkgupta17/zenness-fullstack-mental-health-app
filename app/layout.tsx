import type { Metadata } from 'next'
// import { Geist, Geist_Mono } from 'next/font/google'
import localFont from "next/font/local";
import { Analytics } from '@vercel/analytics/next'
import Chatbot from '@/components/chatbot'
import { ChatbotProvider } from "./chatbot-context";
import './globals.css'

// const _geist = Geist({ subsets: ["latin"] });
// const _geistMono = Geist_Mono({ subsets: ["latin"] });

const ranade = localFont({
  src: [
    { path: "../public/FONTS/Ranade-Regular.woff2", weight: "400", style: "normal" },
    { path: "../public/FONTS/Ranade-Italic.woff2", weight: "400", style: "italic" },
    { path: "../public/FONTS/Ranade-Medium.woff2", weight: "500", style: "normal" },
    { path: "../public/FONTS/Ranade-Bold.woff2", weight: "700", style: "normal" },
    { path: "../public/FONTS/Ranade-BoldItalic.woff2", weight: "700", style: "italic" },
    { path: "../public/FONTS/Ranade-Light.woff2", weight: "300", style: "normal" },
    { path: "../public/FONTS/Ranade-LightItalic.woff2", weight: "300", style: "italic" },
  ],
  variable: "--font-ranade",
});

export const metadata: Metadata = {
  title: 'Zenness',
  description: 'Created with v0',
  generator: 'Zenness',
  icons: {
    icon: [
      {
        url: 'icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: 'public\apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    
       <html lang="en" className={ranade.variable}>
      <body className="font-ranade antialiased">
         <ChatbotProvider>
          {children}
          <Chatbot />
          <Analytics />
        </ChatbotProvider>
      </body>
    </html>
  )
}

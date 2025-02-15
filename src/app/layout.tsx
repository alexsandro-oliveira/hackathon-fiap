import type { Metadata } from 'next'
import { ClerkProvider } from '@clerk/nextjs'
import { dark } from '@clerk/themes'
import './globals.css'
import { Toaster } from 'sonner'
import { Footer } from './_components/footer'

export const metadata: Metadata = {
  title: 'Conexão Escola',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className="dark">
        <ClerkProvider appearance={{ baseTheme: dark }}>
          <div className="flex h-full flex-col">
            <div className="flex-1">{children}</div>
            <Footer />
          </div>
        </ClerkProvider>
        <Toaster />
      </body>
    </html>
  )
}

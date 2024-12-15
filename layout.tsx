import './globals.css'
import { ThemeProvider } from '@/components/theme-provider'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Sidebar from '@/components/Sidebar'

export const metadata = {
  title: 'Young Engineers Club',
  description: 'Empowering young minds through engineering',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script src="https://kit.fontawesome.com/your-font-awesome-kit.js" crossOrigin="anonymous"></script>
      </head>
      <body className="min-h-screen flex flex-col">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <div className="flex flex-col md:flex-row flex-grow">
            <Sidebar />
            <div className="flex-grow">
              <Header />
              <main className="p-6">{children}</main>
              <Footer />
            </div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}


import './globals.css'

export const metadata = {
  title: 'Sunset',
  description: 'A personal travel companion for romantic escapes.',
  manifest: '/manifest.json',
  themeColor: '#0f172a',
  appleWebApp: { capable: true, title: 'Sunset', statusBarStyle: 'black-translucent' }
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}

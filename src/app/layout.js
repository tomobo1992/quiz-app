import './globals.css'

export const metadata = {
  title: '16ビットクイズ',
  description: 'レトロスタイルのクイズアプリ',
}

export default function RootLayout({ children }) {
  return (
    <html lang="ja">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap" rel="stylesheet" />
      </head>
      <body className="bg-blue-950">{children}</body>
    </html>
  )
}

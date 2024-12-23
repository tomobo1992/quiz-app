export const metadata = {
  title: '16ビットクイズ',
  description: 'レトロスタイルのクイズアプリ',
}

export default function RootLayout({ children }) {
  return (
    <html lang="ja">
      <body>{children}</body>
    </html>
  )
}

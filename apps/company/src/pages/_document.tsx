import Header from '@/components/Header'
import { Html, Head, Main, NextScript } from 'next/document'
import { Footer } from 'ui'

export default function Document() {
  return (
    <Html lang="pt-br">
      <Head />
      <body className="bg-gray-50">
        <Header />
        <Main />
        <NextScript />
        <Footer />
      </body>
    </Html>
  )
}

import Footer from '@/components/Footer'
import Header from '@/components/Header'
import Link from '@/components/Link'
import useLinks from '@/hooks/useLinks'

export default function Home() {
  const links = useLinks()

  return (
    <main className="max-w-4xl mx-auto px-6">
      <Header />

      <section className="flex flex-col items-center flex-1 gap-6">
        {links.map((link, index) => (
          <Link
            description={link.description}
            domain={link.domain}
            url={link.url}
            key={index}
          />
        ))}
      </section>

      <Footer />
    </main>
  )
}
export default function Header() {
  const navLinkClassname = `hover:text-primary hover:font-medium cursor-pointer`

  return (
    <header className="fixed top-0 left-0 right-0 z-10 bg-primary/30 shadow-sm">
      <div className="flex justify-between items-center py-4 text-primary px-6 max-w-5xl mx-auto">
        <a href="/">
          <img className="h-8 lg:h-10" src="/assets/images/logo.png" alt="" />
        </a>

        <nav className="hidden lg:flex gap-4 text-white font-heading">
          <a href="/#vehicles" className={navLinkClassname}>
            Veículos
          </a>
          <a href="/#differentials" className={navLinkClassname}>
            Diferenciais
          </a>
          <a href="/#why-choose-us" className={navLinkClassname}>
            Por quê nos escolher?
          </a>
          <a href="/#services" className={navLinkClassname}>
            Serviços
          </a>
          <a href="/#contact" className={navLinkClassname}>
            Contato
          </a>
          <a href="/sobre" className={navLinkClassname}>
            Sobre
          </a>
        </nav>
      </div>
    </header>
  )
}

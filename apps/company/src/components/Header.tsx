type HeaderVariant = 'primary' | 'transparent'

interface HeaderProps {
  variant?: HeaderVariant
}

export default function Header({ variant = 'primary' }: HeaderProps) {
  const textColorByVariant = variant === 'primary' ? 'text-primary' : ''
  const hoverColorByVariant =
    variant === 'primary' ? 'hover:text-teal-800' : 'hover:text-primary'
  const navLinkClassname = `${textColorByVariant} ${hoverColorByVariant} hover:font-medium cursor-pointer`

  return (
    <header className="flex justify-between items-center py-4 text-primary px-6 max-w-5xl mx-auto">
      <a href="/">
        <img className="h-8 lg:h-10" src="/assets/images/logo.png" alt="" />
      </a>

      <nav className="hidden lg:flex gap-4 text-white">
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
    </header>
  )
}

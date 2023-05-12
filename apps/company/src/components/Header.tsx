export default function Header() {
  return (
    <header className="flex justify-between items-center py-4 text-primary px-6 max-w-5xl mx-auto">
      <a href="#home">Logo</a>

      <nav className="hidden lg:flex gap-4 text-white">
        <a
          href="#vehicles"
          className="hover:text-primary hover:font-medium cursor-pointer"
        >
          Veículos
        </a>
        <a
          href="#differentials"
          className="hover:text-primary hover:font-medium cursor-pointer"
        >
          Diferenciais
        </a>
        <a
          href="#why-choose-us"
          className="hover:text-primary hover:font-medium cursor-pointer"
        >
          Por quê nos escolher?
        </a>
        <a
          href="#services"
          className="hover:text-primary hover:font-medium cursor-pointer"
        >
          Serviços
        </a>
        <a
          href="#contact"
          className="hover:text-primary hover:font-medium cursor-pointer"
        >
          Contato
        </a>
        <a
          href="/sobre"
          className="hover:text-primary hover:font-medium cursor-pointer"
        >
          Sobre
        </a>
      </nav>
    </header>
  )
}

import { WhatsappLogo } from 'phosphor-react'

interface ContactButtonProps {
  to: string
}
export default function ContactButton({ to }: ContactButtonProps) {
  return (
    <a href={to} target="_blank" rel="noreferrer">
      <button className="bg-green-600 min-w-48 lg:min-w-64 h-12 lg:h-14 rounded font-heading font-bold mx-auto flex items-center justify-between px-4 text-gray-50 gap-2">
        <span>Entrar em contato</span>
        <span>
          <WhatsappLogo size={24} />
        </span>
      </button>
    </a>
  )
}

import { WhatsappLogo } from 'phosphor-react'

export default function ContactButton() {
  return (
    <button className="bg-green-600 w-48 lg:w-64 h-10 lg:h-14 rounded font-bold mx-auto flex items-center justify-between px-4 text-gray-50">
      <span>Entrar em contato</span>
      <span>
        <WhatsappLogo size={24} />
      </span>
    </button>
  )
}

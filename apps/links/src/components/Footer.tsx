import { InstagramLogo, WhatsappLogo } from 'phosphor-react'

export default function Footer() {
  return (
    <footer className="bottom-0 left-0 right-0 flex gap-2 mx-6 justify-center pt-8 pb-12">
      <a 
        href="https://instagram.com/santiveiculos"
        target="_blank'"
        rel="noreferrer"
      >
        <InstagramLogo className="text-primary" size={40} />
      </a>
      <a 
        href="https://wa.me/5511947226536"
        target="_blank'"
        rel="noreferrer"
      >
        <WhatsappLogo className="text-primary" size={40} />
      </a>
    </footer>
  )
}
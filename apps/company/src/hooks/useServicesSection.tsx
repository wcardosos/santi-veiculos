import { WhatsappLinkProvider } from '@/providers/whatsapp-link-provider'
import { ContactLinkService } from '@/services/contact-link'

export default function useServicesSection() {
  const whatsappLinkProvider = new WhatsappLinkProvider()
  const contactLinkService = new ContactLinkService(whatsappLinkProvider)

  const salesContactLink = contactLinkService.execute(
    'Olá. Estou querendo comprar um carro!',
  )
  const locationContactLink = contactLinkService.execute(
    'Olá. Estou querendo locar um carro!',
  )

  return {
    salesContactLink,
    locationContactLink,
  }
}

import { WhatsappLinkProvider } from '@/providers/whatsapp-link-provider'
import { ContactLinkService } from '@/services/contact-link'

export default function useDefaultContactButtonLink() {
  const whatsappLinkProvider = new WhatsappLinkProvider()
  const contactLinkService = new ContactLinkService(whatsappLinkProvider)

  const defaultContactLink = contactLinkService.execute(
    'Quero comprar um carro!',
  )

  return {
    defaultContactLink,
  }
}

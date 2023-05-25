import { WhatsappLinkProvider } from '@/providers/whatsapp-link-provider'
import { CarInterestContactService } from '@/services/car-interest-contact'

export default function useCarInterestContact(brand: string, model: string) {
  const whatsappLinkProvider = new WhatsappLinkProvider()
  const carInterestContactService = new CarInterestContactService(
    whatsappLinkProvider,
  )

  const carInterestContactLink = carInterestContactService.execute({
    brand,
    model,
  })

  return {
    carInterestContactLink,
  }
}

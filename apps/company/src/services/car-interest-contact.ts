import { WhatsappLinkProvider } from '@/providers/whatsapp-link-provider'

interface CarInterestData {
  brand: string
  model: string
  year: number
}

export class CarInterestContactService {
  private whatsappLinkProvider: WhatsappLinkProvider

  constructor(whatsappLinkProvider: WhatsappLinkProvider) {
    this.whatsappLinkProvider = whatsappLinkProvider
  }

  execute({ brand, model, year }: CarInterestData): string {
    return this.whatsappLinkProvider.getLinkWithText(
      `Me interessei pelo ${brand} ${model} ${year}. Quero mais informações!`,
    )
  }
}

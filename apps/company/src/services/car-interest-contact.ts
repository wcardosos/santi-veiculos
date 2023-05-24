import { WhatsappLinkProvider } from '@/providers/whatsapp-link-provider'

interface CarInterestData {
  brand: string
  model: string
}

export class CarInterestContactService {
  private whatsappLinkProvider: WhatsappLinkProvider

  constructor(whatsappLinkProvider: WhatsappLinkProvider) {
    this.whatsappLinkProvider = whatsappLinkProvider
  }

  execute({ brand, model }: CarInterestData): string {
    return this.whatsappLinkProvider.getLinkWithText(
      `Me interessei pelo ${brand} ${model}. Quero mais informações!`,
    )
  }
}

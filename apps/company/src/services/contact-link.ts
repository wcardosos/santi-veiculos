import { WhatsappLinkProvider } from '@/providers/whatsapp-link-provider'

export class ContactLinkService {
  private whatsappLinkProvider: WhatsappLinkProvider

  constructor(whatsappLinkProvider: WhatsappLinkProvider) {
    this.whatsappLinkProvider = whatsappLinkProvider
  }

  execute(text: string): string {
    return this.whatsappLinkProvider.getLinkWithText(text)
  }
}

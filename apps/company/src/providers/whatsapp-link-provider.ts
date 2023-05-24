export class WhatsappLinkProvider {
  private WHATSAPP_BASE_URL = 'https://wa.me/5511947226536?text='

  getLinkWithText(text: string): string {
    return this.WHATSAPP_BASE_URL + this.formatTextWithSpaces(text)
  }

  private formatTextWithSpaces(text: string): string {
    return text.replaceAll(' ', '%20')
  }
}

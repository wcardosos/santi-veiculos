import { describe, expect, it } from 'vitest'
import { WhatsappLinkProvider } from '../../src/providers/whatsapp-link-provider'

describe('WhatsappLinkProvider', () => {
  const whatsappLinkProvider = new WhatsappLinkProvider()

  describe('getLinkWithText', () => {
    it('should return the link with the text', () => {
      const textMock = 'test'

      const linkResult = whatsappLinkProvider.getLinkWithText(textMock)

      expect(linkResult).toBe('https://wa.me/5511947226536?text=test')
    })

    it('should return the link formatted when the text has spaces', () => {
      const textMock = 'testing a lot of spaces'

      const linkResult = whatsappLinkProvider.getLinkWithText(textMock)

      expect(linkResult).toBe(
        'https://wa.me/5511947226536?text=testing%20a%20lot%20of%20spaces',
      )
    })
  })
})

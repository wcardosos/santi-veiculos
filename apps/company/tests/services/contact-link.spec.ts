import { describe, expect, it, vi } from 'vitest'
import { ContactLinkService } from '../../src/services/contact-link'
import { WhatsappLinkProvider } from '../../src/providers/whatsapp-link-provider'

describe('ContactLinkService', () => {
  const whatsappLinkProvider = {} as WhatsappLinkProvider
  const getLinkWithTextMock = vi.fn().mockReturnValue('contact link')
  whatsappLinkProvider.getLinkWithText = getLinkWithTextMock

  const contactLinkService = new ContactLinkService(whatsappLinkProvider)

  describe('execute', () => {
    it('should return the contact link', () => {
      const textMock = 'test'

      const result = contactLinkService.execute(textMock)

      expect(getLinkWithTextMock).toHaveBeenCalledWith('test')
      expect(result).toBe('contact link')
    })
  })
})

import { describe, expect, it, vi } from 'vitest'
import { CarInterestContactService } from '../../src/services/car-interest-contact'
import { WhatsappLinkProvider } from '../../src/providers/whatsapp-link-provider'

describe('CarInterestContactService', () => {
  const whatsappLinkProvider = {} as WhatsappLinkProvider
  const getLinkWithTextMock = vi.fn().mockReturnValue('car contact link')
  whatsappLinkProvider.getLinkWithText = getLinkWithTextMock

  const carInterestContactService = new CarInterestContactService(
    whatsappLinkProvider,
  )

  describe('execute', () => {
    it('should return the contact link with the car info data', () => {
      const carInfoMock = {
        brand: 'Renault',
        model: 'Kwid',
      }

      const result = carInterestContactService.execute(carInfoMock)

      expect(getLinkWithTextMock).toHaveBeenCalledWith(
        'Me interessei pelo Renault Kwid. Quero mais informações!',
      )
      expect(result).toBe('car contact link')
    })
  })
})

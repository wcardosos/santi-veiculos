import { describe, expect, it, vi } from 'vitest'
import { HttpProvider } from '../../src/providers/http-provider'
import { GetAllCarsForSaleService } from '../../src/services/get-all-cars-for-sale'

describe('GetAllCarsForSaleService', () => {
  const httpProviderMock = {} as HttpProvider

  const httpProviderPostMock = vi.fn()
  httpProviderPostMock.mockResolvedValue({
    data: {
      data: {
        allSales: [
          {
            value: 30000,
            vehicle: {
              brand: 'Volkswagen',
              model: 'Golf',
              slug: 'volkswagen-golf-2013',
              images: [{ url: 'image url' }],
              car: [{ motor: 1.6 }],
            },
          },
          {
            value: 30000,
            vehicle: {
              brand: 'Volkswagen',
              model: 'Fox',
              slug: 'volkswagen-fox-2013',
              images: [{ url: 'image url' }],
              car: [{ motor: 1.0 }],
            },
          },
        ],
      },
    },
  })
  httpProviderMock.post = httpProviderPostMock

  const getAllCarsForSaleService = new GetAllCarsForSaleService(
    httpProviderMock,
  )

  describe('execute', () => {
    it('should return all cars', async () => {
      const result = await getAllCarsForSaleService.execute()

      expect(result).toEqual([
        {
          brand: 'Volkswagen',
          model: 'Golf',
          slug: 'volkswagen-golf-2013',
          value: 30000,
          motor: 1.6,
          imageUrl: 'image url',
        },
        {
          brand: 'Volkswagen',
          model: 'Fox',
          slug: 'volkswagen-fox-2013',
          value: 30000,
          motor: 1,
          imageUrl: 'image url',
        },
      ])
    })
  })
})

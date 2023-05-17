import { describe, expect, it, vi } from 'vitest'
import { HttpProvider } from '../../src/providers/http-provider'
import { GetAllCarsToSaleService } from '../../src/services/get-all-cars-to-sale'

describe('GetAllCarsToSaleService', () => {
  const httpProviderMock = {} as HttpProvider

  const httpProviderPostMock = vi.fn()
  httpProviderPostMock.mockResolvedValue({
    data: {
      data: {
        allSales: [
          {
            value: 30000,
            issold: false,
            vehicle: {
              brand: 'Volkswagen',
              model: 'Golf',
              year: 2013,
              slug: 'volkswagen-golf-2013',
              images: [{ url: 'image url' }],
              car: [{ motor: 1.6, fuel: 'gas', transmission: 'manual' }],
            },
          },
          {
            value: 30000,
            issold: false,
            vehicle: {
              brand: 'Volkswagen',
              model: 'Fox',
              year: 2013,
              slug: 'volkswagen-fox-2013',
              images: [{ url: 'image url' }],
              car: [{ motor: 1.0, fuel: 'gas', transmission: 'manual' }],
            },
          },
        ],
      },
    },
  })
  httpProviderMock.post = httpProviderPostMock

  const getAllCarsToSaleService = new GetAllCarsToSaleService(httpProviderMock)

  describe('execute', () => {
    it('should return all cars', async () => {
      const result = await getAllCarsToSaleService.execute()

      expect(result).toEqual([
        {
          brand: 'Volkswagen',
          model: 'Golf',
          year: 2013,
          slug: 'volkswagen-golf-2013',
          value: 30000,
          isSold: false,
          motor: 1.6,
          fuel: 'Gasolina',
          transmission: 'Manual',
          imagesUrls: ['image url'],
        },
        {
          brand: 'Volkswagen',
          model: 'Fox',
          year: 2013,
          slug: 'volkswagen-fox-2013',
          isSold: false,
          value: 30000,
          motor: 1,
          fuel: 'Gasolina',
          transmission: 'Manual',
          imagesUrls: ['image url'],
        },
      ])
    })
  })
})

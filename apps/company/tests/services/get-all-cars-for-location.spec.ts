import { describe, expect, it, vi } from 'vitest'
import { HttpProvider } from '../../src/providers/http-provider'
import { GetAllCarsForLocationService } from '../../src/services/get-all-cars-for-location'

describe('GetAllCarsForLocationService', () => {
  const httpProviderMock = {} as HttpProvider

  const httpProviderPostMock = vi.fn()
  httpProviderPostMock.mockResolvedValue({
    data: {
      data: {
        allLocations: [
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
              car: [{ motor: 1.0, fuel: 'gas', transmission: 'manual' }],
            },
          },
        ],
      },
    },
  })
  httpProviderMock.post = httpProviderPostMock

  const getAllCarsForLocationService = new GetAllCarsForLocationService(
    httpProviderMock,
  )

  describe('execute', () => {
    it('should return all cars', async () => {
      const result = await getAllCarsForLocationService.execute()

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

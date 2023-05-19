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
            located: false,
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
            located: false,
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
          year: 2013,
          slug: 'volkswagen-golf-2013',
          value: 30000,
          located: false,
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
          located: false,
          value: 30000,
          motor: 1,
          fuel: 'Gasolina',
          transmission: 'Manual',
          imagesUrls: ['image url'],
        },
      ])
    })

    it('should raise an error when transmission is invalid', async () => {
      httpProviderPostMock.mockResolvedValueOnce({
        data: {
          data: {
            allLocations: [
              {
                value: 30000,
                located: false,
                vehicle: {
                  brand: 'Volkswagen',
                  model: 'Golf',
                  year: 2013,
                  slug: 'volkswagen-golf-2013',
                  images: [{ url: 'image url' }],
                  car: [{ motor: 1.6, fuel: 'gas', transmission: null }],
                },
              },
            ],
          },
        },
      })

      await expect(() =>
        getAllCarsForLocationService.execute(),
      ).rejects.toThrowError('Invalid transmission! Value: null')
    })

    it('should raise an error when fuel is invalid', async () => {
      httpProviderPostMock.mockResolvedValueOnce({
        data: {
          data: {
            allLocations: [
              {
                value: 30000,
                located: false,
                vehicle: {
                  brand: 'Volkswagen',
                  model: 'Golf',
                  year: 2013,
                  slug: 'volkswagen-golf-2013',
                  images: [{ url: 'image url' }],
                  car: [{ motor: 1.6, fuel: null, transmission: 'manual' }],
                },
              },
            ],
          },
        },
      })

      await expect(() =>
        getAllCarsForLocationService.execute(),
      ).rejects.toThrowError('Invalid fuel! Value: null')
    })
  })
})

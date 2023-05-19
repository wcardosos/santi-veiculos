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
            sold: false,
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
            sold: false,
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
          year: 2013,
          slug: 'volkswagen-golf-2013',
          value: 30000,
          sold: false,
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
          sold: false,
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
            allSales: [
              {
                value: 30000,
                sold: false,
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
        getAllCarsForSaleService.execute(),
      ).rejects.toThrowError('Invalid transmission! Value: null')
    })

    it('should raise an error when fuel is invalid', async () => {
      httpProviderPostMock.mockResolvedValueOnce({
        data: {
          data: {
            allSales: [
              {
                value: 30000,
                sold: false,
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
        getAllCarsForSaleService.execute(),
      ).rejects.toThrowError('Invalid fuel! Value: null')
    })
  })
})

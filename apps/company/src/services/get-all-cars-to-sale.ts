import { Car } from '@/entities/car'
import { carsForSaleQuery } from '../graphql/queries/cars'
import { HttpProvider } from '@/providers/http-provider'

type CmsFuel = 'gas' | 'alcohol' | 'flex'
type CmsTransmission = 'manual' | 'automatic'

interface CmsAsset {
  url: string
}

interface CmsCar {
  motor: number
  fuel: CmsFuel
  transmission: CmsTransmission
}

interface CmsVehicle {
  brand: string
  model: string
  year: number
  slug: string
  images: CmsAsset[]
  car: CmsCar[]
}

interface GetAllGarsToSaleQueryResult {
  value: number
  issold: boolean
  vehicle: CmsVehicle
}

export const API_URL = 'https://graphql.datocms.com/'
export const API_TOKEN = '8d97b0e25fc28f9821658d0d509037'

export class GetAllCarsToSaleService {
  private httpProvider: HttpProvider

  constructor(httpProvider: HttpProvider) {
    this.httpProvider = httpProvider
  }

  async execute(): Promise<Car[]> {
    const { data: responseData } = await this.httpProvider.post(
      API_URL,
      { query: carsForSaleQuery, variables: {} },
      {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${API_TOKEN}`,
      },
    )

    return responseData.data.allSales.map(
      ({
        value,
        issold,
        vehicle: { brand, model, year, slug, images, car },
      }: GetAllGarsToSaleQueryResult) => {
        return {
          brand,
          model,
          year,
          slug,
          imagesUrls: this.getImagesUrls(images),
          value,
          isSold: issold,
          motor: car[0].motor,
          fuel: this.getFuelFromCms(car[0].fuel),
          transmission: this.getTransmissionFromCms(car[0].transmission),
        }
      },
    )
  }

  private getFuelFromCms(fuel: CmsFuel) {
    switch (fuel) {
      case 'gas':
        return 'Gasolina'
      case 'alcohol':
        return 'Álcool'
      case 'flex':
        return 'Flex'
      default:
        return null
    }
  }

  private getTransmissionFromCms(transmission: CmsTransmission) {
    switch (transmission) {
      case 'automatic':
        return 'Automático'
      case 'manual':
        return 'Manual'
      default:
        return null
    }
  }

  private getImagesUrls(images: CmsAsset[]) {
    return images.map((image) => image.url)
  }
}

import { Car } from '@/entities/car'
import { HttpProvider } from '@/providers/http-provider'

type CmsFuel = 'gas' | 'alcohol' | 'flex'
type CmsTransmission = 'manual' | 'automatic'

interface CmsAsset {
  url: string
}
interface CmsSale {
  value: number
  issold: boolean
}

interface CmsCar {
  motor: number
  fuel: CmsFuel
  transmission: CmsTransmission
}

interface GetAllGarsToSaleQueryResult {
  brand: string
  model: string
  year: number
  slug: string
  images: CmsAsset[]
  sale: CmsSale[]
  car: CmsCar[]
}

export const API_URL = 'https://graphql.datocms.com/'
export const API_TOKEN = '8d97b0e25fc28f9821658d0d509037'

export class GetAllCarsToSaleService {
  private httpProvider: HttpProvider

  constructor(httpProvider: HttpProvider) {
    this.httpProvider = httpProvider
  }

  async execute(): Promise<Car[]> {
    const query = `{
      allVehicles {
        brand
        model
        year
        slug
        images {
          url
        }
        sale: _allReferencingSales(first:1) {
          value
          issold
        }
        car: _allReferencingCars(first: 1){
          motor
          fuel
          transmission
        }
      }
    }`

    const { data: responseData } = await this.httpProvider.post(
      API_URL,
      { query, variables: {} },
      {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${API_TOKEN}`,
      },
    )

    return responseData.data.allVehicles.map(
      ({
        brand,
        car,
        model,
        sale,
        slug,
        year,
        images,
      }: GetAllGarsToSaleQueryResult) => ({
        brand,
        model,
        year,
        slug,
        imagesUrls: this.getImagesUrls(images),
        value: sale[0].value,
        isSold: sale[0].issold,
        motor: car[0].motor,
        fuel: this.getFuelFromCms(car[0].fuel),
        transmission: this.getTransmissionFromCms(car[0].transmission),
      }),
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

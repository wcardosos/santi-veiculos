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

export interface CmsVehicle {
  brand: string
  model: string
  year: number
  slug: string
  images: CmsAsset[]
  car: CmsCar[]
}

export abstract class BaseCarsService {
  private httpProvider: HttpProvider
  private API_URL = 'https://graphql.datocms.com/'
  private API_TOKEN = '8d97b0e25fc28f9821658d0d509037'

  constructor(httpProvider: HttpProvider) {
    this.httpProvider = httpProvider
  }

  protected async requestData<T>(
    query: string,
    variables: unknown,
  ): Promise<T> {
    const { data } = await this.httpProvider.post(
      this.API_URL,
      { query, variables },
      {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${this.API_TOKEN}`,
      },
    )

    return data
  }

  protected getFuelFromCms(fuel: CmsFuel) {
    switch (fuel) {
      case 'gas':
        return 'Gasolina'
      case 'alcohol':
        return 'Álcool'
      case 'flex':
        return 'Flex'
      default:
        throw new Error(`Invalid fuel! Value: ${fuel}`)
    }
  }

  protected getTransmissionFromCms(transmission: CmsTransmission) {
    switch (transmission) {
      case 'automatic':
        return 'Automático'
      case 'manual':
        return 'Manual'
      default:
        throw new Error(`Invalid transmission! Value: ${transmission}`)
    }
  }

  protected getImagesUrls(images: CmsAsset[]) {
    return images.map((image) => image.url)
  }
}

import { Car } from '@/entities/car'
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

export interface CmsCarTransaction {
  value: number
  vehicle: CmsVehicle
}

export abstract class BaseCarsService {
  private httpProvider: HttpProvider
  private API_URL = 'https://graphql.datocms.com/'
  private API_TOKEN = '8d97b0e25fc28f9821658d0d509037'
  private HEADERS = {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${this.API_TOKEN}`,
  }

  constructor(httpProvider: HttpProvider) {
    this.httpProvider = httpProvider
  }

  protected async requestData<T>(
    query: string,
    variables: unknown, // Tiṕar quando for necessário utilizar essas variables
  ): Promise<T> {
    const { data } = await this.httpProvider.post(
      this.API_URL,
      { query, variables },
      this.HEADERS,
    )

    return data
  }

  protected getMainImageUrl(assets: CmsAsset[]) {
    return assets[0].url
  }

  protected getCarMotor(car: CmsCar[]): number {
    return car[0].motor
  }

  protected composeCarsData(carsTransactions: CmsCarTransaction[]): Car[] {
    return carsTransactions.map(
      ({ value, vehicle: { brand, model, slug, images, car } }) => ({
        brand,
        model,
        slug,
        imageUrl: this.getMainImageUrl(images),
        value,
        motor: this.getCarMotor(car),
      }),
    )
  }
}

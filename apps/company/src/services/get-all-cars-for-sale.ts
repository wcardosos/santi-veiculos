import { carsForSaleQuery } from '../graphql/queries/cars'
import { CarForSale } from '@/entities/car-for-sale'
import { BaseCarsService, CmsVehicle } from './base-cars-service'

interface CmsCarForSale {
  value: number
  sold: boolean
  vehicle: CmsVehicle
}
interface GetAllGarsForSaleQueryResult {
  data: {
    allSales: CmsCarForSale[]
  }
}
export class GetAllCarsForSaleService extends BaseCarsService {
  async execute(): Promise<CarForSale[]> {
    const responseData = await this.requestData<GetAllGarsForSaleQueryResult>(
      carsForSaleQuery,
      {},
    )

    return responseData.data.allSales.map((carForSale) => {
      return this.composeCarForSaleData(carForSale)
    })
  }

  private composeCarForSaleData({
    value,
    sold,
    vehicle: { brand, model, year, slug, images, car },
  }: CmsCarForSale): CarForSale {
    return {
      brand,
      model,
      year,
      slug,
      imagesUrls: this.getImagesUrls(images),
      value,
      sold,
      motor: car[0].motor,
      fuel: this.getFuelFromCms(car[0].fuel),
      transmission: this.getTransmissionFromCms(car[0].transmission),
    }
  }
}

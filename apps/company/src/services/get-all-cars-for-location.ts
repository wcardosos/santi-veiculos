import { carsForLocationQuery } from '../graphql/queries/cars'
import { CarForLocation } from '@/entities/car-for-location'
import { BaseCarsService, CmsVehicle } from './base-cars-service'

interface CmsCarForLocation {
  value: number
  located: boolean
  vehicle: CmsVehicle
}

interface GetAllGarsForLocationQueryResult {
  data: {
    allLocations: CmsCarForLocation[]
  }
}
export class GetAllCarsForLocationService extends BaseCarsService {
  async execute(): Promise<CarForLocation[]> {
    const responseData =
      await this.requestData<GetAllGarsForLocationQueryResult>(
        carsForLocationQuery,
        {},
      )

    console.log(`responseData: ${JSON.stringify(responseData)}`)

    return responseData.data.allLocations.map((carForLocation) =>
      this.composeCarData(carForLocation),
    )
  }

  protected composeCarData({
    value,
    located,
    vehicle: { brand, model, year, slug, images, car },
  }: CmsCarForLocation): CarForLocation {
    return {
      brand,
      model,
      year,
      slug,
      imagesUrls: this.getImagesUrls(images),
      value,
      located,
      motor: car[0].motor,
      fuel: this.getFuelFromCms(car[0].fuel),
      transmission: this.getTransmissionFromCms(car[0].transmission),
    }
  }
}

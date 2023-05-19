import { Car } from '@/entities/car'
import { carsForLocationQuery } from '../graphql/queries/cars'
import { BaseCarsService, CmsCarTransaction } from './base-cars-service'

interface GetAllGarsForLocationQueryResult {
  data: {
    allLocations: CmsCarTransaction[]
  }
}
export class GetAllCarsForLocationService extends BaseCarsService {
  async execute(): Promise<Car[]> {
    const queryVariables = {}
    const responseData =
      await this.requestData<GetAllGarsForLocationQueryResult>(
        carsForLocationQuery,
        queryVariables,
      )

    return this.composeCarsData(responseData.data.allLocations)
  }
}

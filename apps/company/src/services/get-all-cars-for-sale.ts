import { Car } from '@/entities/car'
import { carsForSaleQuery } from '../graphql/queries/cars'
import { BaseCarsService, CmsCarTransaction } from './base-cars-service'

interface GetAllGarsForSaleQueryResult {
  data: {
    allSales: CmsCarTransaction[]
  }
}
export class GetAllCarsForSaleService extends BaseCarsService {
  async execute(): Promise<Car[]> {
    const queryVariables = {}
    const responseData = await this.requestData<GetAllGarsForSaleQueryResult>(
      carsForSaleQuery,
      queryVariables,
    )

    return this.composeCarsData(responseData.data.allSales)
  }
}

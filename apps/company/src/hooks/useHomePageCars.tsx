import { useEffect, useState } from 'react'
import { Car } from '@/entities/car'
import { HttpProvider } from '@/providers/http-provider'
import { GetAllCarsForSaleService } from '@/services/get-all-cars-for-sale'
import { GetAllCarsForLocationService } from '@/services/get-all-cars-for-location'

export default function useHomePageCars() {
  const [carsForSale, setCarsForSale] = useState<Car[]>([])
  const [carsForLocation, setCarsForLocation] = useState<Car[]>([])

  useEffect(() => {
    if (carsForSale.length) return
    const httpProvider = new HttpProvider()
    const getAllCarsForSaleService = new GetAllCarsForSaleService(httpProvider)
    const getAllCarsForLocationService = new GetAllCarsForLocationService(
      httpProvider,
    )

    getAllCarsForSaleService.execute().then((data) => {
      setCarsForSale(data)
    })
    getAllCarsForLocationService.execute().then((data) => {
      setCarsForLocation(data)
    })
  })

  return {
    carsForSale,
    carsForLocation,
  }
}

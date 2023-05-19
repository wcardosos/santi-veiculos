import { useEffect, useState } from 'react'
import { Car } from '@/entities/car'
import { HttpProvider } from '@/providers/http-provider'
import { GetAllCarsForLocationService } from '@/services/get-all-cars-for-location'

export default function useCarsForLocation() {
  const [carsForLocation, setCarsForLocation] = useState<Car[]>([])

  const hasCarsForLocation = !!carsForLocation.length

  useEffect(() => {
    if (carsForLocation.length) return
    const httpProvider = new HttpProvider()
    const getAllCarsForLocationService = new GetAllCarsForLocationService(
      httpProvider,
    )
    getAllCarsForLocationService.execute().then((data) => {
      setCarsForLocation(data)
    })
  })

  return {
    carsForLocation,
    hasCarsForLocation,
  }
}

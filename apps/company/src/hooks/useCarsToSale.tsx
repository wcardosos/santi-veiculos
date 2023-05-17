import { useEffect, useState } from 'react'
import { Car } from '@/entities/car'
import { HttpProvider } from '@/providers/http-provider'
import { GetAllCarsToSaleService } from '@/services/get-all-cars-to-sale'

export default function useCarsToSale() {
  const [carsToSale, setCarsToSale] = useState<Car[]>([])

  const hasCarsToSale = !!carsToSale.length

  useEffect(() => {
    if (carsToSale.length) return
    const httpProvider = new HttpProvider()
    const getAllCarsToSaleService = new GetAllCarsToSaleService(httpProvider)
    getAllCarsToSaleService.execute().then((data) => {
      setCarsToSale(data)
    })
  })

  return {
    carsToSale,
    hasCarsToSale,
  }
}

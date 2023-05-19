import { useEffect, useState } from 'react'
import { Car } from '@/entities/car'
import { HttpProvider } from '@/providers/http-provider'
import { GetAllCarsForSaleService } from '@/services/get-all-cars-for-sale'

export default function useCarsForSale() {
  const [carsForSale, setCarsForSale] = useState<Car[]>([])

  const hasCarsForSale = !!carsForSale.length

  useEffect(() => {
    if (carsForSale.length) return
    const httpProvider = new HttpProvider()
    const getAllCarsForSaleService = new GetAllCarsForSaleService(httpProvider)
    getAllCarsForSaleService.execute().then((data) => {
      setCarsForSale(data)
    })
  })

  return {
    carsForSale,
    hasCarsForSale,
  }
}

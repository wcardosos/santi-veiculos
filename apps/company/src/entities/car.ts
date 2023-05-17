type Fuel = 'Gasolina' | 'Álcool' | 'Flex'
type Transmission = 'Manual' | 'Automático'

export interface Car {
  brand: string
  model: string
  year: number
  slug: string
  imagesUrls: string[]
  value: number
  isSold: boolean
  motor: number
  fuel: Fuel
  tranmission: Transmission
}

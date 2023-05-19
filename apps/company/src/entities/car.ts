type Fuel = 'Gasolina' | 'Álcool' | 'Flex'
type Transmission = 'Manual' | 'Automático'

export interface Car {
  brand: string
  model: string
  year: number
  slug: string
  imagesUrls: string[]
  value: number
  motor: number
  fuel: Fuel
  transmission: Transmission
}

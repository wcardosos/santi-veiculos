import { Car } from './car'

export interface CarForLocation extends Car {
  located: boolean
}

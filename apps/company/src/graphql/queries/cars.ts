export const carsForSaleQuery = `{
  allSales(filter: { issold: { eq: false } }) {
    value
    vehicle {
      brand
      model
      slug
      images {
        url
      }
      car: _allReferencingCars(first: 1) {
        motor
      }
    }
  }
}`

export const carsForLocationQuery = `{
  allLocations(filter: { islocated: { eq: false } }) {
    value
    vehicle {
      brand
      model
      slug
      images {
        url
      }
      car:_allReferencingCars(first: 1) {
        transmission
      }
    }
  }
}`

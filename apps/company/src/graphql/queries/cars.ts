export const carsForSaleQuery = `{
  allSales(filter: { issold: { eq: false } }) {
    value
    issold
    vehicle {
      brand
      model
      year
      slug
      images {
        url
      }
      car: _allReferencingCars(first: 1) {
        motor
        fuel
        transmission
      }
    }
  }
}`

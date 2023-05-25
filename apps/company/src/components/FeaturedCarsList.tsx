import { Car } from '@/entities/car'
import CarCard from './CarCard'
import Button from './Button'

interface FeaturedCarsListProps {
  cars: Car[]
  type: 'sale' | 'location'
}

export default function FeaturedCarsList({
  cars,
  type,
}: FeaturedCarsListProps) {
  const hasCars = cars.length > 0
  const variantColor = type === 'sale' ? 'primary' : 'secondary'

  return (
    <>
      <div className="flex flex-col lg:flex-row gap-4 lg:gap-12 mt-6 lg:mt-10 mb-12 justify-center">
        {!hasCars && <p>Sem carros disponíveis no momento</p>}
        {hasCars &&
          cars.map(({ brand, model, motor, slug, value, imageUrl }) => (
            <CarCard
              key={slug}
              imageUrl={imageUrl}
              brand={brand}
              model={model}
              motor={motor}
              value={value}
              variant={variantColor}
            />
          ))}
      </div>
      {hasCars && (
        <Button variant="filled" color={variantColor}>
          Ver todos
        </Button>
      )}
    </>
  )
}

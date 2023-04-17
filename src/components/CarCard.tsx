import Button from './Button'

interface CarCardProps {
  imageUrl: string
  value: number
  motor: number
  brand: string
  model: string
}

export default function CarCard({
  imageUrl,
  value,
  motor,
  brand,
  model,
}: CarCardProps) {
  return (
    <div className="bg-gray-100 shadow-md">
      <img
        className="w-full h-48 object-cover rounded-t-lg"
        src={imageUrl}
        alt="Car image"
      />

      <div className="pt-4 lg:pt-6 pb-6 lg:pb-8 px-4 lg:px-6 text-start">
        <div className="flex justify-between items-center w-full">
          <strong className="font-bold text-primary text-lg">
            R$ {value.toLocaleString('pt-br')}
          </strong>
          <p>{motor.toFixed(1)}</p>
        </div>
        <div className="pt-2 pb-6">
          <p>{`${brand} ${model}`}</p>
        </div>
        <div className="flex items-center">
          <Button variant="filled" color="primary">
            Mais detalhes
          </Button>
        </div>
      </div>
    </div>
  )
}

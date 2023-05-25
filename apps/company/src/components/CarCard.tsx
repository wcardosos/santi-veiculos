import { WhatsappLinkProvider } from '@/providers/whatsapp-link-provider'
import { CarInterestContactService } from '@/services/car-interest-contact'
import LinkButton from './LinkButton'

interface CarCardProps {
  imageUrl: string
  value: number
  motor: number
  brand: string
  model: string
  variant: 'primary' | 'secondary'
}

export default function CarCard({
  imageUrl,
  value,
  motor,
  brand,
  model,
  variant,
}: CarCardProps) {
  const carInterestData = {
    brand,
    model,
  }

  const whatsappLinkProvider = new WhatsappLinkProvider()
  const carInterestContactService = new CarInterestContactService(
    whatsappLinkProvider,
  )

  const carInterestContactLink =
    carInterestContactService.execute(carInterestData)

  return (
    <article className="bg-gray-100 shadow-md">
      <img
        className="w-72 lg:w-80 h-48 object-cover rounded-t-lg"
        src={imageUrl}
        alt="Car image"
      />

      <div className="pt-4 lg:pt-6 pb-6 lg:pb-8 px-4 lg:px-6 text-start">
        <div className="flex justify-between items-center w-full">
          <strong
            className={`font-heading font-bold text-${
              variant === 'primary' ? 'primary' : 'orange-500'
            } text-lg`}
          >
            R$ {value.toLocaleString('pt-br')}
          </strong>
          <p>{motor.toFixed(1)}</p>
        </div>
        <div className="pt-2 pb-6">
          <p>{`${brand} ${model}`}</p>
        </div>
        <div className="flex items-center">
          <LinkButton to={carInterestContactLink} color={variant}>
            Mais detalhes
          </LinkButton>
        </div>
      </div>
    </article>
  )
}

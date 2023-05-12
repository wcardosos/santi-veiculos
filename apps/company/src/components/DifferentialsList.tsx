import { AirplaneTilt, Files, GasPump } from 'phosphor-react'
import Differential from './Differential'

interface DifferentialsListProps {
  position?: 'right' | 'center'
}

export default function DifferentialsList({
  position,
}: DifferentialsListProps) {
  const dynamicStyles = position === 'right' ? 'text-right' : 'items-center'

  return (
    <div className={`flex flex-col gap-4 pt-12 ${dynamicStyles}`}>
      <Differential
        icon={AirplaneTilt}
        text="Entrega para todo o Brasil"
        reverse
      />
      <Differential icon={Files} text="Documentação inclusa" reverse />
      <Differential icon={GasPump} text="Tanque cheio" reverse />
    </div>
  )
}

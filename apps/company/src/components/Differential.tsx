import { ForwardRefExoticComponent } from 'react'
import { IconProps } from 'phosphor-react'

interface DifferentialProps {
  icon: ForwardRefExoticComponent<IconProps>
  text: string
  reverse?: boolean
}

export default function Differential({
  icon: Icon,
  text,
  reverse,
}: DifferentialProps) {
  return (
    <div
      className={`flex gap-2 items-center ${reverse ? 'flex-row-reverse' : ''}`}
    >
      <Icon size={24} />
      <span>{text}</span>
    </div>
  )
}

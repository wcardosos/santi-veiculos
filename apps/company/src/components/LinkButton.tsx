import { ReactNode } from 'react'
import Button from './Button'

type Color = 'primary' | 'secondary'
type Variant = 'filled' | 'ghost'

interface LinkButtonProps {
  to: string
  color?: Color
  variant?: Variant
  openInThisTab?: boolean
  children: ReactNode
}

export default function LinkButton({
  to,
  color = 'primary',
  variant = 'filled',
  openInThisTab = false,
  children,
}: LinkButtonProps) {
  return (
    <a
      href={to}
      target={openInThisTab ? '_self' : '_blank'}
      rel="noreferrer"
      className="mx-auto"
    >
      <Button variant={variant} color={color}>
        {children}
      </Button>
    </a>
  )
}

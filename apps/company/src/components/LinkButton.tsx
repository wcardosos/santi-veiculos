import { ReactNode } from 'react'
import Button from './Button'

type Color = 'primary' | 'secondary'

interface LinkButtonProps {
  to: string
  color?: Color
  children: ReactNode
}

export default function LinkButton({
  to,
  color = 'primary',
  children,
}: LinkButtonProps) {
  return (
    <a href={to} target="_blank" rel="noreferrer">
      <Button variant="filled" color={color}>
        {children}
      </Button>
    </a>
  )
}

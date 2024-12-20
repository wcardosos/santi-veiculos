import { ReactNode } from 'react'

type Variant = 'filled' | 'ghost'
type Color = 'primary' | 'secondary' | null

interface DefaultStyles {
  primary: string[]
  secondary: string[]
  ghost: string[]
}

interface ButtonProps {
  variant: Variant
  color?: Color
  children: ReactNode
}

export default function Button({ variant, color, children }: ButtonProps) {
  const shadowStyles = ['shadow-md']
  const dynamicStyles: DefaultStyles = {
    primary: [
      'bg-primary/90',
      'hover:bg-primary text-gray-50',
      ...shadowStyles,
    ],
    secondary: [
      'bg-orange-400',
      'hover:bg-orange-500 text-gray-50',
      ...shadowStyles,
    ],
    ghost: ['border', 'border-gray-50', 'hover:bg-gray-50/20'],
  }

  const styles =
    variant === 'filled'
      ? (color && dynamicStyles[color]) || []
      : dynamicStyles.ghost

  return (
    <button
      className={`w-48 lg:w-64 h-12 lg:h-14 font-heading rounded font-bold mx-auto ${styles.join(
        ' ',
      )}`}
    >
      {children}
    </button>
  )
}

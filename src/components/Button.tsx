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
  const shadowStyles = ['shadow-sm', 'shadow-gray-900']
  const dynamicStyles: DefaultStyles = {
    primary: ['bg-primary/90', 'hover:bg-primary', ...shadowStyles],
    secondary: ['bg-orange-400', 'hover:bg-orange-500', ...shadowStyles],
    ghost: ['border', 'border-gray-50', 'hover:bg-gray-50/20'],
  }

  const styles =
    variant === 'filled'
      ? (color && dynamicStyles[color]) || []
      : dynamicStyles.ghost

  return (
    <button
      className={`w-48 lg:w-64 h-10 lg:h-14 rounded font-bold mx-auto ${styles.join(
        ' ',
      )}`}
    >
      {children}
    </button>
  )
}

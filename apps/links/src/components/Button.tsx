import { ReactNode } from 'react'

interface ButtonProps {
  children: ReactNode
}

export default function Button({ children }: ButtonProps) {
  return (
    <button className="bg-primary w-full px-4 py-6 text-gray-50 font-medium rounded-full hover:bg-primary/90">
      {children}
    </button>
  )
}

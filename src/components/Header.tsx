import { List as Menu } from 'phosphor-react'

export default function Header() {
  return (
    <header className="flex justify-between items-center py-4 text-primary px-6">
      <p>Logo</p>
      <Menu size={24} weight="bold" />
    </header>
  )
}
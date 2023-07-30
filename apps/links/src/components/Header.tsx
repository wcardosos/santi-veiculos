import Image from 'next/image'
import logoImage from 'ui/assets/logo.webp'


export default function Header() {
  return (
    <header className="flex flex-col items-center py-16 gap-2">
        <div className="w-32">
        <Image src={logoImage} alt="" />
      </div>
      <strong className="text-primary text-lg">@santiveiculos</strong>
    </header>
  )
}
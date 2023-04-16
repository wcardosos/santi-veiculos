import { List as Menu } from 'phosphor-react'

export default function Home() {
  return (
    <main>
      <header className="flex justify-between items-center py-4 text-primary px-6">
        <p>Logo</p>
        <Menu size={24} weight="bold" />
      </header>

      <section className="relative w-screen min-h-[80vh] sm:min-h-[100vh] md:min-h-[50vh] lg:min-h-[80vh] overflow-hidden pb-6">
        <video
          className="absolute w-full h-full object-cover"
          autoPlay
          muted
          loop
        >
          <source src="/assets/videos/man-driving.mp4" type="video/mp4" />
        </video>

        <div className="bg-primary/60 w-full h-full absolute text-gray-50 py-16 px-6">
          <h1 className="font-bold text-3xl lg:text-5xl">
            Encontre o carro dos{' '}
            <span className="text-orange-400">seus sonhos</span>
          </h1>
          <p className="mt-6 max-w-md lg:max-w-lg">
            Com qualidade e procedência, oferecemos opções acessíveis e
            confiáveis para atender às suas necessidades. Acesse os nossos
            veículos disponíveis e encontre o que procura!
          </p>

          <div className="grid grid-rows-2 gap-4 mt-16">
            <button className="bg-orange-400 hover:bg-orange-500 w-48 lg:w-64 h-10 lg:h-14 rounded font-bold mx-auto shadow-sm shadow-gray-900">
              Carros em destaque
            </button>
            <button className="border border-gray-50 hover:bg-gray-50/20 hover:text-secon w-48 lg:w-64 h-10 lg:h-14 rounded font-bold mx-auto">
              Serviços
            </button>
          </div>
        </div>
      </section>
    </main>
  )
}

import Button from '@/components/Button'
import Header from '@/components/Header'
import Tabs from '@/components/Tabs'

export default function Home() {
  return (
    <main>
      <Header />

      <section className="relative min-h-[80vh] sm:min-h-[100vh] md:min-h-[50vh] lg:min-h-[80vh] overflow-hidden pb-6">
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
            <Button variant="filled" color="secondary">
              Carros em destaque
            </Button>
            <Button variant="ghost">Serviços</Button>
          </div>
        </div>
      </section>

      <section className="my-12 lg:my-16 text-center mx-auto">
        <h1 className="font-bold text-primary text-xl lg:text-2xl">
          Veículos em destaque
        </h1>

        <div className="w-64 lg:w-96 h-[2px] bg-secondary my-6 mx-auto" />

        <div className="max-w-2xl mx-auto">
          <Tabs />
        </div>
      </section>
    </main>
  )
}

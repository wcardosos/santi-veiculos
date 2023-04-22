import Button from '@/components/Button'
import ContactButton from '@/components/ContactButton'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import Tabs from '@/components/Tabs'
import { AirplaneTilt, ArrowRight, Files, GasPump } from 'phosphor-react'

export default function Home() {
  return (
    <main>
      <section className="relative min-h-screen md:min-h-[60vh] lg:min-h-screen">
        <img
          className="absolute w-full h-full object-cover"
          src="/assets/images/people-traveling.jpg"
          alt=""
        />
        <div className="absolute w-full">
          <Header />
        </div>

        <div className="bg-gradient-to-t from-primary to-primary/0 w-full h-full absolute text-gray-50 py-24 px-6">
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

          <div className="flex flex-col gap-4 items-center pt-12">
            <div className="flex gap-2 items-center">
              <AirplaneTilt size={24} />
              <span>Entrega para todo o Brasil</span>
            </div>
            <div className="flex gap-2 items-center">
              <Files size={24} />
              <span>Documentação inclusa</span>
            </div>
            <div className="flex gap-2 items-center">
              <GasPump size={24} />
              <span>Tanque cheio</span>
            </div>
          </div>
        </div>
      </section>

      <section className="my-12 lg:my-16 text-center mx-auto px-6">
        <h1 className="font-bold text-primary text-xl lg:text-2xl">
          Veículos em destaque
        </h1>

        <div className="w-64 lg:w-96 h-[2px] bg-secondary my-6 mx-auto" />

        <div className="max-w-2xl mx-auto">
          <Tabs />
        </div>
      </section>

      <section className="relative my-12 h-[40vh] lg:h-[80vh]">
        <img
          className="absolute w-full h-full object-cover"
          src="/assets/images/woman-in-car.jpg"
          alt="Woman in car enjoying the day"
        />

        <div className="absolute w-full h-full bg-gray-900/50 text-right text-gray-50 px-6 py-10 lg:py-24">
          <div className="lg:max-w-3xl mx-auto">
            <h1 className="font-bold text-2xl lg:text-4xl">
              Aproveite nossos diferenciais
            </h1>
            <ul className="flex flex-col gap-2 lg:gap-4 py-6 lg:py-10">
              <li>Entrega para todo o Brasil</li>
              <li>Documentação inclusa</li>
              <li>Tanque cheio</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="max-w-5xl mx-auto py-0 px-6">
        <h1 className="text-2xl font-bold text-primary">
          Por que escolher a Santi Veículos?
        </h1>
        <div className="grid grid-rows-2 mt-6 lg:mt-12 gap-4 lg:gap-12">
          <div className="grid grid-rows-3 lg:grid-rows-1 grid-cols-1 lg:grid-cols-3 gap-4">
            <div className="text-center">
              <img
                className="mx-auto"
                src="/assets/svg/steering-wheel.svg"
                alt=""
              />
              <h2 className="font-bold text-lg text-primary mt-4 mb-2">
                Compra, venda e troca
              </h2>
              <p>
                Compra, venda e troca de veículos, com documentação já inclusa!
              </p>
            </div>
            <div className="text-center">
              <img className="mx-auto" src="/assets/svg/key.svg" alt="" />
              <h2 className="font-bold text-lg text-primary mt-4 mb-2">
                Locação
              </h2>
              <p>
                Perfeito para você que é motorista de aplicativo. Disponível
                também para empresas.
              </p>
            </div>
            <div className="text-center">
              <img className="mx-auto" src="/assets/svg/shield.svg" alt="" />
              <h2 className="font-bold text-lg text-primary mt-4 mb-2">
                Seguro
              </h2>
              <p>
                A nossa parceria com a{' '}
                <strong className="text-primary">MdBroker Seguros</strong> te
                deixa preparado para futuras surpresas desagradáveis.
              </p>
            </div>
          </div>
          <div className="grid grid-rows-3 lg:grid-rows-1 grid-cols-1 lg:grid-cols-3 gap-4">
            <div className="text-center">
              <img className="mx-auto" src="/assets/svg/money.svg" alt="" />
              <h2 className="font-bold text-lg text-primary mt-4 mb-2">
                Financiamento
              </h2>
              <p>
                Encontre a melhor taxa para você a partir da nossa parceria com
                a <strong className="text-primary">Dryve</strong>
              </p>
            </div>
            <div className="text-center">
              <img className="mx-auto" src="/assets/svg/history.svg" alt="" />
              <h2 className="font-bold text-lg text-primary mt-4 mb-2">
                Laudo cautelar
              </h2>
              <p>Saiba tudo o que já aconteceu com seu veículo</p>
            </div>
            <div className="text-center">
              <img className="mx-auto" src="/assets/svg/wallet.svg" alt="" />
              <h2 className="font-bold text-lg text-primary mt-4 mb-2">
                Pagamento descomplicado
              </h2>
              <p>Aceitamos PIX e todos os cartões de crédito</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gray-900 w-full h-[80vh] lg:h-[60vh] relative my-12">
        <div className="w-full h-full absolute grid grid-cols-1 lg:grid-cols-2 grid-rows-2 lg:grid-rows-1">
          <img
            className="w-full max-h-[40vh] lg:max-h-fit h-full object-cover opacity-30"
            src="/assets/images/buy-and-sell.jpg"
            alt=""
          />
          <img
            className="w-full max-h-[40vh] lg:max-h-fit h-full object-cover opacity-30"
            src="/assets/images/rental.jpg"
            alt=""
          />
        </div>
        <div className="w-full h-full absolute grid grid-cols-1 lg:grid-cols-2 grid-rows-2 lg:grid-rows-1 text-gray-50">
          <div className="relative px-6">
            <div className="absolute bottom-0">
              <div className="flex items-center mb-10">
                <p className="font-bold mr-4 text-xl">Quero comprar</p>
                <ArrowRight className="text-2xl" />
              </div>
            </div>
          </div>
          <div className="relative px-6">
            <div className="absolute bottom-0">
              <div className="flex items-center mb-10">
                <p className="font-bold mr-4 text-xl">Quero locar</p>
                <ArrowRight className="text-2xl" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="text-center text-primary px-6">
        <h1 className="font-bold text-xl">
          VEÍCULOS COM PREÇOS ACESSÍVEIS E A QUALIDADE QUE VOCÊ PROCURA
        </h1>
      </section>

      <section className="my-12 px-6">
        <h1 className="text-primary font-bold text-xl">Contato</h1>
        <p className="mt-4 mb-6">
          Se interessou por nossos serviços e quer saber mais ? Fale conosco
          pelo WhatsApp!
        </p>
        <ContactButton />
      </section>

      <Footer />
    </main>
  )
}

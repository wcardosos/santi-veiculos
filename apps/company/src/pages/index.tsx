import ContactButton from '@/components/ContactButton'
import DifferentialsList from '@/components/DifferentialsList'
import LinkButton from '@/components/LinkButton'
import Tabs from '@/components/Tabs'
import useDefaultContactButtonLink from '@/hooks/useDefaultContactButtonLink'
import useServicesSection from '@/hooks/useServicesSection'
import { Separator } from '@radix-ui/react-separator'
import Head from 'next/head'
import { ArrowRight } from 'phosphor-react'
import Image from 'next/image'
import peopleTravelingPicture from '../../public/assets/images/people-traveling.webp'
import womanInCarPicture from '../../public/assets/images/woman-in-car.webp'
import buyAndSellPicture from '../../public/assets/images/buy-and-sell.webp'
import rentalPicture from '../../public/assets/images/rental.webp'

export default function Home() {
  const { defaultContactLink } = useDefaultContactButtonLink()
  const { salesContactLink, locationContactLink } = useServicesSection()

  return (
    <>
      <Head>
        <title>Santi Veículos - Qualidade e Procedência</title>
      </Head>
      <main>
        <section
          className="relative min-h-screen md:min-h-[60vh] lg:min-h-screen"
          id="home"
        >
          <div className="absolute w-full h-full">
            <Image
              className="object-cover"
              src={peopleTravelingPicture}
              alt="People traveling"
              fill
            />
          </div>

          <article className="bg-gradient-to-t from-primary to-primary/0 w-full h-full absolute text-gray-50 py-24">
            <div className="max-w-5xl mx-auto px-6">
              <h1 className="font-heading font-heading font-bold text-3xl lg:text-5xl">
                Encontre o carro dos{' '}
                <span className="text-orange-400">seus sonhos</span>
              </h1>
              <p className="mt-6 max-w-md lg:max-w-lg">
                Com qualidade e procedência, oferecemos opções acessíveis e
                confiáveis para atender às suas necessidades. Acesse os nossos
                veículos disponíveis e encontre o que procura!
              </p>

              <div className="grid grid-rows-2 gap-4 mt-16">
                <LinkButton to="#vehicles" color="secondary" openInThisTab>
                  Carros em destaque
                </LinkButton>
                <LinkButton to="#services" variant="ghost" openInThisTab>
                  Serviços
                </LinkButton>
              </div>

              <DifferentialsList />
            </div>
          </article>
        </section>

        <section
          id="vehicles"
          className="my-12 lg:my-16 text-center mx-auto px-6"
        >
          <h1 className="font-heading font-bold text-primary text-xl lg:text-2xl">
            Veículos em destaque
          </h1>

          <Separator className="w-64 lg:w-96 h-[2px] bg-secondary my-6 mx-auto" />

          <article className="max-w-5xl mx-auto px-6">
            <Tabs />
          </article>
        </section>

        <section
          id="differentials"
          className="relative my-12 h-[50vh] lg:h-[80vh]"
        >
          <div className="absolute w-full h-full">
            <Image
              className="object-cover"
              src={womanInCarPicture}
              alt="Woman in car enjoying the day"
              fill
            />
          </div>

          <article className="absolute w-full h-full bg-gray-900/50 text-right text-gray-50 px-6 py-10 lg:py-24">
            <div className="lg:max-w-3xl mx-auto">
              <h1 className="font-heading font-bold text-2xl lg:text-4xl">
                Aproveite nossos diferenciais
              </h1>
              <DifferentialsList position="right" />
            </div>
          </article>
        </section>

        <section id="why-choose-us" className="max-w-5xl mx-auto py-0 px-6">
          <h1 className="font-heading text-2xl font-bold text-primary">
            Por que escolher a Santi Veículos?
          </h1>
          <article className="grid grid-rows-2 mt-6 lg:mt-12 gap-4 lg:gap-12">
            <div className="grid grid-rows-3 lg:grid-rows-1 grid-cols-1 lg:grid-cols-3 gap-4">
              <div className="text-center">
                <Image
                  className="mx-auto"
                  src="/assets/svg/steering-wheel.svg"
                  alt=""
                  width={64}
                  height={64}
                />
                <h2 className="font-bold text-lg text-primary mt-4 mb-2">
                  Compra, venda e troca
                </h2>
                <p>
                  Compra, venda e troca de veículos, com documentação já
                  inclusa!
                </p>
              </div>
              <div className="text-center">
                <Image
                  className="mx-auto"
                  src="/assets/svg/key.svg"
                  alt=""
                  width={64}
                  height={64}
                />
                <h2 className="font-bold text-lg text-primary mt-4 mb-2">
                  Locação
                </h2>
                <p>
                  Perfeito para você que é motorista de aplicativo. Disponível
                  também para empresas.
                </p>
              </div>
              <div className="text-center">
                <Image
                  className="mx-auto"
                  src="/assets/svg/shield.svg"
                  alt=""
                  width={64}
                  height={64}
                />
                <h2 className="font-bold text-lg text-primary mt-4 mb-2">
                  Seguro
                </h2>
                <p>
                  A nossa parceria com a{' '}
                  <strong className="font-heading text-primary">
                    MdBroker Seguros
                  </strong>{' '}
                  te deixa preparado para futuras surpresas desagradáveis.
                </p>
              </div>
            </div>
            <div className="grid grid-rows-3 lg:grid-rows-1 grid-cols-1 lg:grid-cols-3 gap-4">
              <div className="text-center">
                <Image
                  className="mx-auto"
                  src="/assets/svg/money.svg"
                  alt=""
                  width={64}
                  height={64}
                />
                <h2 className="font-bold text-lg text-primary mt-4 mb-2">
                  Financiamento
                </h2>
                <p>
                  Encontre a melhor taxa para você a partir da nossa parceria
                  com a{' '}
                  <strong className="font-heading text-primary">Dryve</strong>
                </p>
              </div>
              <div className="text-center">
                <Image
                  className="mx-auto"
                  src="/assets/svg/history.svg"
                  alt=""
                  width={64}
                  height={64}
                />
                <h2 className="font-bold text-lg text-primary mt-4 mb-2">
                  Laudo cautelar
                </h2>
                <p>Saiba tudo o que já aconteceu com seu veículo</p>
              </div>
              <div className="text-center">
                <Image
                  className="mx-auto"
                  src="/assets/svg/wallet.svg"
                  alt=""
                  width={64}
                  height={64}
                />
                <h2 className="font-bold text-lg text-primary mt-4 mb-2">
                  Pagamento descomplicado
                </h2>
                <p>Aceitamos PIX e todos os cartões de crédito</p>
              </div>
            </div>
          </article>
        </section>

        <section
          id="services"
          className="bg-gray-900 w-full h-[80vh] lg:h-[60vh] relative my-12"
        >
          <div className="w-full h-full absolute grid grid-cols-1 lg:grid-cols-2 grid-rows-2 lg:grid-rows-1">
            <Image
              className="w-full max-h-[40vh] lg:max-h-fit h-full object-cover opacity-30"
              src={buyAndSellPicture}
              alt=""
            />
            <Image
              className="w-full max-h-[40vh] lg:max-h-fit h-full object-cover opacity-30"
              src={rentalPicture}
              alt=""
            />
          </div>
          <div className="w-full h-full absolute grid grid-cols-1 lg:grid-cols-2 grid-rows-2 lg:grid-rows-1 text-gray-50">
            <div className="relative px-6">
              <div className="absolute bottom-0">
                <a href={salesContactLink} target="_blank" rel="noreferrer">
                  <div className="flex items-center mb-10">
                    <p className="font-bold mr-4 text-xl">Quero comprar</p>
                    <ArrowRight className="text-2xl" />
                  </div>
                </a>
              </div>
            </div>
            <div className="relative px-6">
              <div className="absolute bottom-0">
                <a href={locationContactLink} target="_blank" rel="noreferrer">
                  <div className="flex items-center mb-10">
                    <p className="font-bold mr-4 text-xl">Quero locar</p>
                    <ArrowRight className="text-2xl" />
                  </div>
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="text-center text-primary px-6">
          <h1 className="font-heading font-bold text-xl">
            VEÍCULOS COM PREÇOS ACESSÍVEIS E A QUALIDADE QUE VOCÊ PROCURA
          </h1>
        </section>

        <section id="contact" className="my-12 max-w-5xl mx-auto py-0 px-6">
          <h1 className="font-heading text-primary font-bold text-xl">
            Contato
          </h1>
          <p className="mt-4 mb-6">
            Se interessou por nossos serviços e quer saber mais ? Fale conosco
            pelo WhatsApp!
          </p>
          <ContactButton to={defaultContactLink} />
        </section>
      </main>
    </>
  )
}

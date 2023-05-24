import ContactButton from '@/components/ContactButton'
import Header from '@/components/Header'
import useDefaultContactButtonLink from '@/hooks/useDefaultContactButtonLink'
import Head from 'next/head'

export default function About() {
  const { defaultContactLink } = useDefaultContactButtonLink()

  return (
    <>
      <Head>
        <title>Santi Veículos - Sobre</title>
      </Head>
      <Header />
      <main className="max-w-5xl mx-auto px-6">
        <div className="max-w-xl mx-auto my-24 mb-16">
          <img className="w-full" src="/assets/svg/logo.svg" alt="" />
        </div>

        <section className="my-6 lg:my-10">
          <h1 className="font-bold text-3xl text-primary mb-6">Quem somos</h1>
          <p>
            Aqui na <strong className="text-primary">Santi Veículos</strong>,
            estamos comprometidos em oferecer aos nossos clientes uma
            experiência excepcional ao adquirir ou alugar um veículo. Nossa
            missão é fornecer veículos de qualidade e procedência, sempre
            priorizando a satisfação e as necessidades individuais de cada
            cliente.
          </p>
          <br />
          <p>
            Fundada recentemente, nossa empresa é jovem, mas nossa equipe traz
            consigo uma vasta experiência no setor automotivo, garantindo
            conhecimento e profissionalismo em todas as interações com nossos
            clientes.
          </p>
        </section>

        <section className="my-6 lg:my-10">
          <h1 className="font-bold text-3xl text-primary mb-6">
            Nosso trabalho
          </h1>
          <p>
            Acreditamos que a chave para a excelência está em nossa abordagem
            centrada no cliente. Valorizamos cada pessoa que entra em contato
            conosco e buscamos entender suas preferências e necessidades
            específicas. Com uma ampla gama de veículos disponíveis, desde
            carros compactos e sedãs elegantes até utilitários esportivos
            robustos, temos o veículo ideal para atender a todas as demandas e
            estilos de vida.
          </p>
          <br />
          <p>
            Nossa equipe é formada por profissionais dedicados e experientes,
            prontos para ajudar e orientar nossos clientes em todas as etapas do
            processo de compra ou locação. Acreditamos na transparência e na
            confiança, e é por isso que trabalhamos apenas com veículos de
            qualidade e procedência comprovadas. Cada veículo em nosso estoque
            passa por uma rigorosa inspeção e manutenção antes de ser oferecido
            aos nossos clientes, garantindo assim a segurança e a tranquilidade
            deles.
          </p>
        </section>

        <section className="my-6 lg:my-10">
          <h1 className="font-bold text-3xl text-primary mb-6">
            Nossos objetivos
          </h1>
          <p>
            Temos a visão de nos tornarmos líderes no setor automotivo,
            proporcionando um serviço impecável e estabelecendo relacionamentos
            de longo prazo com nossos clientes. Valorizamos a confiança
            depositada em nós e nos esforçamos para superar as expectativas em
            todos os aspectos do nosso negócio.
          </p>
          <br />
          <p>
            <strong className="text-primary">Qualidade</strong> e{' '}
            <strong className="text-primary">procedência</strong> são os pilares
            que sustentam nossos serviços, e estamos empenhados em fazer com que
            você sinta isso em cada interação com nossa empresa.
          </p>
        </section>

        <section className="my-10 lg:my-12">
          <p>
            Se você está em busca de um veículo confiável, uma equipe
            comprometida e um atendimento personalizado, a{' '}
            <strong className="text-primary">Santi Veículos</strong> é a escolha
            certa para você. Entre em contato conosco para obter mais
            informações, agendar um test-drive ou discutir suas necessidades de
            locação de veículos. Estamos ansiosos para ajudá-lo a encontrar o
            veículo perfeito que atenda a todas as suas exigências.
          </p>

          <div className="mt-6 lg:my-10">
            <ContactButton to={defaultContactLink} />
          </div>
        </section>
      </main>
    </>
  )
}

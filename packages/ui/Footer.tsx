import {
  Copyright,
  EnvelopeSimple,
  InstagramLogo,
  WhatsappLogo,
} from 'phosphor-react'

export function Footer() {
  return (
    <footer className="bg-primary text-gray-50 px-6 py-12">
      <div className="max-w-5xl mx-auto py-0 px-6">
        <strong>Logo</strong>

        <div className="mt-6">
          <strong>Nosso princípios</strong>

          <div className="py-4 flex flex-col gap-4">
            <div className="flex flex-col gap-2">
              <strong>Qualidade</strong>
              <p>
                Buscamos o melhor veículo para atender as necessidades do seu
                dia-a-dia
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <strong>Procedência</strong>
              <p>
                Fornecemos a segurança necessária para você comprar seu novo
                carro sem preocupações
              </p>
            </div>
          </div>

          <>
            <strong>Redes sociais</strong>

            <div className="flex gap-2 py-4">
              <EnvelopeSimple size={24} />
              <InstagramLogo size={24} />
              <WhatsappLogo size={24} />
            </div>
          </>

          <div className="flex gap-2 items-center">
            <Copyright size={20} />
            <p>2023</p>
          </div>
        </div>
      </div>
    </footer>
  )
}

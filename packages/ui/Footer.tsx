/* eslint-disable no-use-before-define */
import React from 'react'
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
        <img
          className="w-16"
          src="https://www.datocms-assets.com/101238/1684886918-logo-secondary.png"
          alt=""
        />

        <div className="mt-6">
          <strong>Nossos princípios</strong>

          <div className="py-4 flex flex-col gap-4">
            <div className="flex flex-col gap-2">
              <strong>Qualidade</strong>
              <p>Veículos incríveis que fazem a diferença em cada trajeto!</p>
            </div>
            <div className="flex flex-col gap-2">
              <strong>Procedência</strong>
              <p>
                Veículos com história transparente, para você acelerar sem
                preocupações!
              </p>
            </div>
          </div>

          <p className="my-4">CNPJ: 22.049.182/0001-28</p>

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

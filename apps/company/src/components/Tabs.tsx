import {
  Root as TabRoot,
  List as TabList,
  Trigger as TabTrigger,
  Content as TabContent,
} from '@radix-ui/react-tabs'

import { useState } from 'react'
import CarCard from './CarCard'
import Button from './Button'
import useCarsToSale from '@/hooks/useCarsToSale'

type Tab = 'sale' | 'location'

export default function Tabs() {
  const [selectedTab, setSelectedTab] = useState<Tab>('sale')
  const { carsToSale, hasCarsToSale } = useCarsToSale()

  const saleSelectedStyles =
    'text-primary font-bold w-1/2 py-2 border-b-2 border-primary'
  const locationSelectedStyles =
    'text-orange-500 font-bold w-1/2 py-2 border-b-2 border-orange-500'
  const defaultStyles =
    'text-gray-600 w-1/2 py-2 border-b-[1px] border-gray-600'

  return (
    <TabRoot className="flex flex-col w-full" defaultValue="sale">
      <TabList className="flex">
        <TabTrigger
          className={
            selectedTab === 'sale' ? saleSelectedStyles : defaultStyles
          }
          value="sale"
          onClick={() => setSelectedTab('sale')}
        >
          Venda
        </TabTrigger>
        <TabTrigger
          className={
            selectedTab === 'location' ? locationSelectedStyles : defaultStyles
          }
          value="location"
          onClick={() => setSelectedTab('location')}
        >
          Locação
        </TabTrigger>
      </TabList>

      <TabContent value="sale">
        <div className="flex flex-col lg:flex-row gap-4 lg:gap-12 mt-6 lg:mt-10 mb-12 justify-center">
          {!hasCarsToSale && <p>Carregando...</p>}
          {carsToSale.map(({ brand, model, motor, slug, value }) => (
            <CarCard
              key={slug}
              imageUrl="/assets/images/car.jpg"
              brand={brand}
              model={model}
              motor={motor}
              value={value}
              variant="primary"
            />
          ))}
        </div>

        {hasCarsToSale && (
          <Button variant="filled" color="primary">
            Ver todos
          </Button>
        )}
      </TabContent>
      <TabContent value="location">
        <div className="flex flex-col lg:flex-row gap-4 lg:gap-12 mt-6 lg:mt-10 mb-12 justify-center">
          <CarCard
            imageUrl="/assets/images/car.jpg"
            value={30000}
            motor={1.4}
            brand="Marca"
            model="Modelo"
            variant="secondary"
          />
          <CarCard
            imageUrl="/assets/images/car.jpg"
            value={30000}
            motor={2}
            brand="Marca"
            model="Modelo"
            variant="secondary"
          />
          <CarCard
            imageUrl="/assets/images/car.jpg"
            value={30000}
            motor={2.5}
            brand="Marca"
            model="Modelo"
            variant="secondary"
          />
        </div>

        <Button variant="filled" color="secondary">
          Ver todos
        </Button>
      </TabContent>
    </TabRoot>
  )
}

import {
  Root as TabRoot,
  List as TabList,
  Trigger as TabTrigger,
  Content as TabContent,
} from '@radix-ui/react-tabs'

import { useState } from 'react'
import CarCard from './CarCard'
import Button from './Button'

type Tab = 'sale' | 'location'

export default function Tabs() {
  const [selectedTab, setSelectedTab] = useState<Tab>('sale')

  const selectedStyles =
    'text-primary font-bold w-1/2 py-2 border-b-2 border-primary'
  const defaultStyles =
    'text-gray-600 w-1/2 py-2 border-b-[1px] border-gray-600'

  return (
    <TabRoot className="flex flex-col w-full" defaultValue="sale">
      <TabList className="flex">
        <TabTrigger
          className={selectedTab === 'sale' ? selectedStyles : defaultStyles}
          value="sale"
          onClick={() => setSelectedTab('sale')}
        >
          Venda
        </TabTrigger>
        <TabTrigger
          className={
            selectedTab === 'location' ? selectedStyles : defaultStyles
          }
          value="location"
          onClick={() => setSelectedTab('location')}
        >
          Locação
        </TabTrigger>
      </TabList>

      <TabContent value="sale">
        <div className="flex flex-col gap-4 lg:gap-12 mt-6 mb-12">
          <CarCard
            imageUrl="/assets/images/car.jpg"
            value={50000}
            motor={2}
            brand="Marca"
            model="Modelo"
          />
          <CarCard
            imageUrl="/assets/images/car.jpg"
            value={50000}
            motor={2}
            brand="Marca"
            model="Modelo"
          />
          <CarCard
            imageUrl="/assets/images/car.jpg"
            value={50000}
            motor={2}
            brand="Marca"
            model="Modelo"
          />
        </div>

        <Button variant="filled" color="primary">
          Ver todos
        </Button>
      </TabContent>
      <TabContent value="location">
        <div className="flex flex-col gap-4 mt-6 mb-12">
          <CarCard
            imageUrl="/assets/images/car.jpg"
            value={30000}
            motor={1.4}
            brand="Marca"
            model="Modelo"
          />
          <CarCard
            imageUrl="/assets/images/car.jpg"
            value={30000}
            motor={2}
            brand="Marca"
            model="Modelo"
          />
          <CarCard
            imageUrl="/assets/images/car.jpg"
            value={30000}
            motor={2.5}
            brand="Marca"
            model="Modelo"
          />
        </div>

        <Button variant="filled" color="primary">
          Ver todos
        </Button>
      </TabContent>
    </TabRoot>
  )
}

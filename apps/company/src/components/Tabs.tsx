import {
  Root as TabRoot,
  List as TabList,
  Trigger as TabTrigger,
  Content as TabContent,
} from '@radix-ui/react-tabs'

import { useState } from 'react'
import useHomePageCars from '@/hooks/useHomePageCars'
import FeaturedCarsList from './FeaturedCarsList'

type Tab = 'sale' | 'location'

export default function Tabs() {
  const [selectedTab, setSelectedTab] = useState<Tab>('sale')
  const { carsForSale, carsForLocation } = useHomePageCars()

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
        <FeaturedCarsList cars={carsForSale} type="sale" />
      </TabContent>
      <TabContent value="location">
        <FeaturedCarsList cars={carsForLocation} type="location" />
      </TabContent>
    </TabRoot>
  )
}

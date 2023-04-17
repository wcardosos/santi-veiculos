import {
  Root as TabRoot,
  List as TabList,
  Trigger as TabTrigger,
} from '@radix-ui/react-tabs'

import { useState } from 'react'

type Tab = 'sale' | 'location'

export default function Tabs() {
  const [selectedTab, setSelectedTab] = useState<Tab>('sale')

  const selectedStyles =
    'text-primary font-bold w-1/2 py-2 border-b-2 border-primary'
  const defaultStyles =
    'text-gray-600 w-1/2 py-2 border-b-[1px] border-gray-600'

  return (
    <TabRoot className="flex flex-col w-full">
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
    </TabRoot>
  )
}

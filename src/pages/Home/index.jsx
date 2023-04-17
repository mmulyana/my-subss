import {
  BaseLayout,
  CreateWithDrawer,
  ProductList,
  TotalExpense,
} from '../../components'
import { useState } from 'react'
import { data } from '../../utils'

export default function Home() {
  const [isOpen, setIsOpen] = useState(false)

  function handleOpenDrawer() {
    setIsOpen(true)
  }

  function handleCloseDrawer() {
    setIsOpen(false)
  }

  return (
    <BaseLayout>
      <TotalExpense />
      <ProductList data={data} />
      <div className='fixed bottom-4 left-1/2 -translate-x-1/2 flex justify-center'>
        <button
          className='rounded-full bg-violet-600 hover:bg-violet-800 text-white px-6 py-2 text-sm'
          onClick={handleOpenDrawer}
        >
          New Subss
        </button>
      </div>
      <CreateWithDrawer
        isOpen={isOpen}
        onClose={handleCloseDrawer}
        openButton={<button onClick={handleOpenDrawer} />}
      />
    </BaseLayout>
  )
}

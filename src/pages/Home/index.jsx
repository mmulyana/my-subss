import { BaseLayout, CreateWithDrawer, TotalExpense } from '../../components'
import { useState } from 'react'

export default function Home() {
  const [isOpen, setIsOpen] = useState(false)

  const handleOpenDrawer = () => {
    setIsOpen(true)
  }

  const handleCloseDrawer = () => {
    setIsOpen(false)
  }

  return (
    <BaseLayout>
      <TotalExpense />
      <div className='mt-3 flex justify-center'>
        <button className='rounded-full bg-violet-600 hover:bg-violet-800 text-white px-6 py-2 text-sm' onClick={handleOpenDrawer}>New Subss</button>
      </div>
      <CreateWithDrawer
        isOpen={isOpen}
        onClose={handleCloseDrawer}
        openButton={<button onClick={handleOpenDrawer} />}
      />
    </BaseLayout>
  )
}

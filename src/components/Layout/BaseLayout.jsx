import { useState } from 'react'
import { CreateWithDrawer } from '../Drawer'
import Navbar from '../Navbar'
import Tabbar from '../Tabbar'

export default function BaseLayout({ children }) {
  const [isOpen, setIsOpen] = useState(false)

  function handleOpenDrawer() {
    setIsOpen(true)
  }

  function handleCloseDrawer() {
    setIsOpen(false)
  }

  return (
    <div className='max-w-[600px] mx-auto relative'>
      <Navbar />
      <main className='mt-16'>{children}</main>
      <Tabbar>
        <div className='w-full h-full flex justify-center'>
          <button
            className='rounded-full bg-violet-600 hover:bg-violet-800 text-white px-6 py-2 text-sm'
            onClick={handleOpenDrawer}
          >
            New Subss
          </button>
        </div>
      </Tabbar>
      
      <CreateWithDrawer
        isOpen={isOpen}
        onClose={handleCloseDrawer}
        openButton={<button onClick={handleOpenDrawer} />}
      />
    </div>
  )
}

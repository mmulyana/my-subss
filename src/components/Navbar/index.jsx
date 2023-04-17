import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

export default function Navbar() {
  const { user_metadata } = useSelector((s) => s.user)

  const [offset, setOffset] = useState(0)

  useEffect(() => {
    const onScroll = () => setOffset(window.pageYOffset)
    window.removeEventListener('scroll', onScroll)
    window.addEventListener('scroll', onScroll, { passive: true })
    
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div className={`fixed z-50 py-2 w-full top-0 left-0 ${offset > 0 ? 'bg-gray-100' : null}`}>
      <div className='max-w-[600px] flex justify-between items-center mx-auto'>
        <div>
          <p className='text-xs text-gray-500'>Good Morning</p>
          <p className='text-gray-800'>{user_metadata.username}</p>
        </div>
        <div className='h-9 w-9 rounded-full bg-gray-300'></div>
      </div>
    </div>
  )
}

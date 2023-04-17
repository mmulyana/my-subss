import React from 'react'

export default function Tabbar({ children }) {
  return (
    <div className='fixed bottom-0 left-0 h-16 w-full p-3 bg-gradient-to-t from from-gray-100 to-gray-100/20'>{children}</div>
  )
}

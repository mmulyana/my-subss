import React from 'react'

export default function ProductItem({ data }) {
  return (
    <div className='w-full py-2 px-3 flex justify-between items-center border-b border-gray-200 bg-white'>
      <p className='text-gray-500'>{data.title}</p>
      <p className='font-medium text-gray-800'>Rp {data.price}</p>
    </div>
  )
}

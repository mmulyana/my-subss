import React from 'react'

export default function ProductItem({ data }) {
  return (
    <div className='w-full py-2 px-3 flex justify-between items-center border-b border-gray-200 bg-white'>
      <div>
        <p className='text-gray-500'>{data.title}</p>
        <p className='text-xs text-gray-400 capitalize mt-1'>{data.type}</p>
      </div>
      <div>
        <p className='font-medium text-gray-800'>Rp {data.price}</p>
        <p className='text-xs text-gray-400 mt-1'>{data.duedate}</p>
      </div>
    </div>
  )
}

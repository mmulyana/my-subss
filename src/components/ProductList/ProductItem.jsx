import React from 'react'

export default function ProductItem({ data, openDetailData }) {
  return (
    <div
      className='w-full py-2 px-3 flex justify-between items-center border-b border-gray-200 bg-white cursor-pointer'
      onClick={() => openDetailData(data.id)}
    >
      <div>
        <p className='text-gray-700'>{data.name}</p>
        <p className='text-xs text-gray-400 capitalize mt-1'>{data.label}</p>
      </div>
      <div className='flex flex-col items-end'>
        <p className='font-medium text-gray-800'>Rp {data.price}</p>
        <p className='text-xs text-gray-400 mt-1'>{data.payment_date}</p>
      </div>
    </div>
  )
}

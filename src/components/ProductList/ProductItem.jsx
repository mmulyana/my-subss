import React from 'react'
import { calculateDaysBetween, changeFormat, getDayToday } from '../../utils'

let currDay = getDayToday()

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
        <p className='font-medium text-gray-800'>
          {changeFormat(data.price).slice(0, -3)}
        </p>
        <p className='text-xs text-gray-400 mt-1'>
          sisa {calculateDaysBetween(currDay, data.payment_date) - 1} hari
        </p>
      </div>
    </div>
  )
}

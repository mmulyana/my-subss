import React from 'react'
import ProductItem from './ProductItem'

export default function ProductList({ data }) {
  return (
    <div className='mt-4'>
      <div>
        <p className='text-gray-500'>Total subscription <span className='text-gray-800 font-semibold'>{data.length}</span></p>
      </div>
      <div className='flex flex-col gap-2 mt-2'>
        {data.map((data, index) => (
          <ProductItem data={data} key={index} />
        ))}
      </div>
    </div>
  )
}

import React from 'react'
import ProductItem from './ProductItem'

export default function ProductList({ data, openDetailData }) {
  return (
    <div className='mt-4 mb-8'>
      <div>
        <p className='text-gray-500 text-sm'>
          Total subscription{' '}
          <span className='text-gray-800 font-semibold'>{data.length}</span>
        </p>
      </div>
      <div className='flex flex-col gap-2 mt-2'>
        {data.length > 0 ? (
          data.map((data, index) => (
            <ProductItem
              data={data}
              key={index}
              openDetailData={openDetailData}
            />
          ))
        ) : (
          <p>404</p>
        )}
      </div>
    </div>
  )
}

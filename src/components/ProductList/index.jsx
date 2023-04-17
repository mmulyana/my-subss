import React from 'react'
import ProductItem from './ProductItem'

export default function ProductList({ data }) {
  return (
    <div className='flex flex-col gap-2 mt-4'>
      {data.map((data, index) => (
        <ProductItem data={data} key={index} />
      ))}
    </div>
  )
}

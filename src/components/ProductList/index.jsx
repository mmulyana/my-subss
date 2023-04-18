import React, { useEffect, useState } from 'react'
import ProductItem from './ProductItem'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

export default function ProductList({ data, openDetailData }) {
  const [isLoading, setIsLoading] = useState(true)
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false)
    }, 800)
  }, [])
  return (
    <div className='mt-4 mb-8'>
      <div>
        {!isLoading ? (
          <p className='text-gray-500 text-sm'>
            Total subscription{' '}
            <span className='text-gray-800 font-semibold'>{data.length}</span>
          </p>
        ) : (
          <Skeleton />
        )}
      </div>
      <div className='flex flex-col gap-2 mt-2'>
        {!isLoading && data.length > 0 &&
          data.map((data, index) => (
            <ProductItem
              data={data}
              key={index}
              openDetailData={openDetailData}
            />
          ))}
        {isLoading && <Skeleton count={3} />}
      </div>
    </div>
  )
}

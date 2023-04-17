import React from 'react'
import withDrawer from './withDrawer'
import { useSelector } from 'react-redux'

function Detail({ onClose }) {
  const { data } = useSelector((s) => s.detail)
  return (
    <div>
      <div className='w-full py-2'>
        <p className='text-2xl text-gray-800'>{data.name}</p>
      </div>
    </div>
  )
}

const DetailWithDrawer = withDrawer(Detail)
export default DetailWithDrawer

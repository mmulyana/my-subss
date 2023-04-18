import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { supabase } from '../../service/supabase'
import Skeleton from 'react-loading-skeleton'
import { changeFormat } from '../../utils'

export default function TotalExpense() {
  const { id } = useSelector((s) => s.user)
  const { data } = useSelector((s) => s.subscription)
  const [total, setTotal] = useState(0)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    getTotal(id)
  }, [data])

  async function getTotal(iduser) {
    const { data } = await supabase
      .from('subscription')
      .select('price', { count: 'exact' })
      .eq('iduser', iduser)

    let total = data.reduce((acc, curr) => {
      return acc + curr.price
    }, 0)
    setTotal(total)
    setIsLoading(false)
  }

  if (isLoading) {
    return <Skeleton style={{ height: '6rem' }} />
  }

  return (
    <div className='h-24 w-full bg-gray-300 rounded-lg flex gap-2 items-center justify-between px-4 lg:px-6'>
      <div>
        <p className='text-gray-800 font-semibold'>Total Expenses</p>
        <p className='text-gray-600 text-sm'>Per month</p>
      </div>
      <p className='text-lg text-gray-800 font-semibold'>
        {changeFormat(total).slice(0, -3)}
      </p>
    </div>
  )
}

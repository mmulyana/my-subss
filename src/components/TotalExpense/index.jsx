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
    return <Skeleton style={{ height: '10rem' }} />
  }

  return (
    <div className='h-40 w-full bg-violet-700 rounded-lg flex flex-col gap-2 items-center justify-center'>
      <p className='text-3xl text-white font-semibold'>
        {changeFormat(total).slice(0, -3)}
      </p>
      <p className='text-white/60 text-sm'>Monthly Expense</p>
    </div>
  )
}

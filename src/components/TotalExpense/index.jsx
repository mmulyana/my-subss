import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { supabase } from '../../service/supabase'

export default function TotalExpense() {
  const { id } = useSelector((s) => s.user)
  const [total, setTotal] = useState(0)

  useEffect(() => {
    getTotal(id)
  }, [])

  async function getTotal(iduser) {
    const { data } = await supabase
      .from('subscription')
      .select('price', { count: 'exact' })
      .eq('iduser', iduser)

    let total = data.reduce((acc, curr) => {
      return acc + curr.price;
    }, 0)
    setTotal(total)
  }

  return (
    <div className='h-40 w-full bg-violet-700 rounded-lg flex flex-col gap-2 items-center justify-center'>
      <p className='text-3xl text-white font-semibold'>Rp {total}</p>
      <p className='text-white/60 text-sm'>Monthly Expense</p>
    </div>
  )
}
